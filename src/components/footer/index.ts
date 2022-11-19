export function initFooter() {
  class Footerclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var FooterEl = document.createElement("footer");
      FooterEl.textContent = "Footer";
      FooterEl.setAttribute("class", "footer");
      var styleFooterEl = document.createElement("style");
      styleFooterEl.textContent =
        ".footer{margin-top:26px;width: 100%;min-height: 233px;background: #FFA0EA;;font-family: 'Roboto';font-style: normal;font-weight: 500;font-size: 22px;line-height: 26px;color: #000000;display: flex;align-items: center;justify-content: center;}       ";
      shadow.appendChild(styleFooterEl);
      shadow.appendChild(FooterEl);
    }
  }
  customElements.define("footer-comp", Footerclass);
}
