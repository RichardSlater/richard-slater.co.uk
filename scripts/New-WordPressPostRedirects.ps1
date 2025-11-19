Function Get-CanonicalUri($Uri) {
    Write-Debug "Input URI: $Uri"

    $request = [System.Net.WebRequest]::Create($Uri)
    $request.AllowAutoRedirect = $false
    $response = $request.GetResponse()

    Write-Debug "Status Code: $($response.StatusCode) ($([int]$response.StatusCode))"

    if ([int]$response.StatusCode -eq 200) {
        Write-Debug "SUCCESS: $Uri"
        return $Uri
    }

    if ([int]$response.StatusCode -ge 300 -and [int]$response.StatusCode -le 399) {
        $headers = $response.Headers
        return Get-CanonicalUri -Uri $headers["Location"]
    }

    if ([int]$response.StatusCode -ge 400) {
        throw "HTTP Request to $Uri resulted in a ${$response.Status} error."
    }
}

$inputUris = Get-Content ./inputUris.txt

$redirects = @{}
$maxLengthRelativeUri = 20
$maxLenghtCanoncalUri = 0

foreach ($uri in $inputUris) {
    $relativeUri = $uri.Replace("http://www.richard-slater.co.uk", [String]::Empty)
    $canonicalUri = (Get-CanonicalUri $uri).Replace("http://www.richard-slater.co.uk", [String]::Empty)
    $redirects[$relativeUri] = $canonicalUri

    if ($relativeUri.Length -gt $maxLengthRelativeUri) {
        $maxLengthRelativeUri = $relativeUri.Length
    }

    if ($canonicalUri.Length -gt $maxLenghtCanoncalUri) {
        $maxLenghtCanoncalUri = $canonicalUri.Length
    }
}

foreach ($redirect in $redirects.Keys) {
    Write-Host "$($redirect.PadRight($maxLengthRelativeUri))    $($redirects[$redirect].PadRight($maxLenghtCanoncalUri))    301!"
}