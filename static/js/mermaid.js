import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10.9.1/+esm";

if (document.querySelectorAll(".mermaid").length > 0) {
  mermaid.initialize({
    startOnLoad: true,
    theme: document.querySelector("body")?.classList.contains("dark")
      ? "dark"
      : "default",
  });
}
