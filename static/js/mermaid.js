if (document.querySelectorAll('.mermaid').length > 0) {
  import("https://cdn.jsdelivr.net/npm/mermaid@10.9.1/+esm").then((mermaid) => {
    mermaid.initialize({
      theme: document.querySelector("body").classList.contains("dark")
        ? "dark"
        : "default",
    });
    mermaid.run();
  });
}
