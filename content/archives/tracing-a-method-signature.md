---
title: 'Tracing A Method Signature'
date: Fri, 16 Jul 2010 21:03:52 +0000
draft: false
tags: ['EVEMon', 'Exceptions', 'Programming', 'Reflection', 'Stack Trace']
---

Over the past three weeks I have discovered that many performance problems with Windows Forms applications are down to certain events being fired very rapidly, usually these are down to layout operations being triggered by updates to controls. Without the use of [RedGate Software's](http://www.red-gate.com/) excellent performance profiler I have been forced back into the habit of temporarily peppering the code I suspect of being a problem with trace messages. For a while I was quite disorganised using trace messages such as "Entered SoAndSoMethod", "OnSomeEvent Triggered", etc. Over time I have settled into using the declaring class and method name to identify which method was being called. Thinking about it today I decided this was still too much work (yeah, I am that lazy), I wondered if [System.Reflection](http://msdn.microsoft.com/en-us/library/system.reflection.aspx) could help me:```
public static void Trace()
{
    var stackTrace = new StackTrace();
    var frame = stackTrace.GetFrame(1);
    var method = frame.GetMethod();
    var parameters = FormatParameters(method.GetParameters());
    var declaringType = method.DeclaringType.ToString().Replace("EVEMon.", String.Empty);

    Trace("{0}.{1}({2})", declaringType, method.Name, parameters);
}
``````
private static string FormatParameters(ParameterInfo\[\] parameters)
{
    var paramDetail = new StringBuilder();

    foreach (var param in parameters)
    {
        if (paramDetail.Length != 0)
            paramDetail.Append(", ");

        paramDetail.AppendFormat("{0} {1}", param.GetType().Name, param.Name);
    }

    return paramDetail.ToString();
}
```This means that with liberal application of:```
EveClient.Trace();
```Will output the following to the trace:```
0d 0h 00m 03s > CharacterMonitor.OnLoad(ParameterInfo e)
0d 0h 00m 03s > CharacterMonitor.multiPanel\_SelectionChange(ParameterInfo sender, ParameterInfo e)
0d 0h 00m 03s > CharacterMonitor.multiPanel\_SelectionChange(ParameterInfo sender, ParameterInfo e)
```Hopefully that will save a few seconds here and there. It is a shame that reflection can't get the actual values of the parameters from the frame, as that would be even more useful.