const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

<link rel="stylesheet" href="styles/styleHome.css">

<nav>
    <a href="home.html" class="menu"><img src="files/logonew.png"  id="Magicarnival_menu"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="portfolio.html" class="menu">PORTFOLIO</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="aboutus.html" class="menu">ABOUT US</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="faq.html" class="menu">FAQ</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="blog.html" class="menu">BLOG</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="getstarted.html" class="menu" id="getStarted">GET STARTED</a>
</nav>
`
class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);