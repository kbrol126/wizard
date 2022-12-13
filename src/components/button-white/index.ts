export function initButtonWhite() {
  class ButtonWclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      // var shadow = this.attachShadow({ mode: "open" });
      var variant = this.getAttribute("variant") || "Outlined";
      var buttonEl = document.createElement("button");
      buttonEl.setAttribute("class", "button");
      buttonEl.setAttribute("type", "submit");
      buttonEl.textContent = variant;
      var styleButtonW = document.createElement("style");
      styleButtonW.textContent =
        ".button{display:block;width:242px;Height:55px;border: 2px solid #000000;background: #E5E5E5;border-radius: 4px;padding:0 3px;margin: 26px 0 0 0;font-family: 'Roboto';font-style: normal;font-weight: 500;font-size: 22px;line-height: 26px;text-align: center;color: #000000;}";
      this.appendChild(styleButtonW);
      this.appendChild(buttonEl);

      this.querySelector("div")?.appendChild(buttonEl);
    }
  }
  customElements.define("buttonwhite-comp", ButtonWclass);
}
