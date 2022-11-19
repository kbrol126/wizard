export function initHeader() {
  class Headerclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var hederEl = document.createElement("header");
      hederEl.textContent = "Header";
      hederEl.setAttribute("class", "header");
      var stylehederEl = document.createElement("style");
      stylehederEl.textContent =
        ".header{width: 100%;min-height: 60px;background: #FF8282;font-family: 'Roboto';font-style: normal;font-weight: 500;font-size: 22px;line-height: 26px;color: #000000;display: flex;align-items: center;justify-content: center;}       ";
      shadow.appendChild(stylehederEl);
      shadow.appendChild(hederEl);
    }
  }
  customElements.define("header-comp", Headerclass);
}
