export function initH3() {
  class H3class extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var h3El = document.createElement("h3");
      h3El.textContent = "Large - Poppins - 22px  - Medium";
      h3El.setAttribute("class", "h3-comp");
      var styleh3El = document.createElement("style");
      styleh3El.textContent =
        ".h3-comp{display: flex;text-align:left;min-height: 61px;width:100%;font-family: 'Roboto';font-style: normal;font-weight: 500;font-size: 22px;line-height: 26px;color: #000000;}       ";
      shadow.appendChild(styleh3El);
      shadow.appendChild(h3El);
    }
  }
  customElements.define("h3-comp", H3class);
}
