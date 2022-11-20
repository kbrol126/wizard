export function initH4() {
  class H4class extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var variant = this.getAttribute("variant") || "Body - Poppins - 18px";
      var h4El = document.createElement("h4");
      h4El.textContent = variant;
      h4El.setAttribute("class", "h4-comp");
      var styleh4El = document.createElement("style");
      styleh4El.textContent =
        ".h4-comp{display: flex;text-align:left;min-height: 61px;width:100%;font-family: 'Roboto';font-style: normal;font-weight: 400;font-size: 18px;line-height: 21px;color: #000000;}       ";
      shadow.appendChild(styleh4El);
      shadow.appendChild(h4El);
    }
  }
  customElements.define("h4-comp", H4class);
}
