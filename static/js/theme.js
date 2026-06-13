// Theme initialization (runs immediately to prevent FOUC)
(function() {
    const html = document.querySelector("html");
    if (localStorage.getItem("pref-theme") === "dark") {
        html.dataset.theme = 'dark';
    } else if (localStorage.getItem("pref-theme") === "light") {
        html.dataset.theme = 'light';
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.dataset.theme = 'dark';
    } else {
        html.dataset.theme = 'light';
    }
})();

// Defer the rest to when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    // Menu scroll position
    let menu = document.getElementById('menu');
    if (menu) {
        const scrollPosition = localStorage.getItem("menu-scroll-position");
        if (scrollPosition) {
            menu.scrollLeft = parseInt(scrollPosition, 10);
        }
        menu.onscroll = function () {
            localStorage.setItem("menu-scroll-position", menu.scrollLeft);
        };
    }

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            var id = this.getAttribute("href").substr(1);
            if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.querySelector(`[id='${decodeURIComponent(id)}']`).scrollIntoView({
                    behavior: "smooth"
                });
            } else {
                document.querySelector(`[id='${decodeURIComponent(id)}']`).scrollIntoView();
            }
            if (id === "top") {
                history.replaceState(null, null, " ");
            } else {
                history.pushState(null, null, `#${id}`);
            }
        });
    });

    // Top link visibility
    var toplink = document.getElementById("top-link");
    if (toplink) {
        window.onscroll = function () {
            const scrollThreshold = window.innerHeight;
            if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
                toplink.classList.remove("hidden");
            } else {
                toplink.classList.add("hidden");
            }
        };
    }

    // Theme toggle
    var themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const html = document.querySelector("html");
            if (html.dataset.theme === "dark") {
                html.dataset.theme = 'light';
                localStorage.setItem("pref-theme", 'light');
            } else {
                html.dataset.theme = 'dark';
                localStorage.setItem("pref-theme", 'dark');
            }
        });
    }

    // Code copy buttons
    document.querySelectorAll('pre > code').forEach((codeblock) => {
        const container = codeblock.parentNode.parentNode;
        const copybutton = document.createElement('button');
        copybutton.classList.add('copy-code');
        copybutton.innerHTML = 'copy';

        function copyingDone() {
            copybutton.innerHTML = 'copied!';
            setTimeout(() => {
                copybutton.innerHTML = 'copy';
            }, 2000);
        }

        copybutton.addEventListener('click', (cb) => {
            if ('clipboard' in navigator) {
                navigator.clipboard.writeText(codeblock.textContent);
                copyingDone();
                return;
            }
            const range = document.createRange();
            range.selectNodeContents(codeblock);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            try {
                document.execCommand('copy');
                copyingDone();
            } catch (e) { }
            selection.removeRange(range);
        });

        if (container.classList.contains("highlight")) {
            container.appendChild(copybutton);
        } else if (container.parentNode.firstChild === container) {
            // td containing LineNos
        } else if (codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName === "TABLE") {
            // table containing LineNos and code
            codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(copybutton);
        } else {
            // code blocks not having highlight as parent class
            codeblock.parentNode.appendChild(copybutton);
        }
    });
});
