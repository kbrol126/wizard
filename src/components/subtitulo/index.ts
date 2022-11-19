export function initSubitulo() {
  class Subtituloclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var subTituloEl = document.createElement("h2");
      subTituloEl.textContent = "Subtítulo - Poppins - 38px - Bold";
      subTituloEl.setAttribute("class", "subtitulo");
      var stylesubTituloEl = document.createElement("style");
      stylesubTituloEl.textContent =
        ".subtitulo{display: flex;text-align:left;min-height: 61px;width:100%;font-family: 'Roboto';font-style: normal;font-weight: 700;font-size: 38px;line-height: 45px;color: #000000;}       ";
      shadow.appendChild(stylesubTituloEl);
      shadow.appendChild(subTituloEl);
    }
  }
  customElements.define("subtitulo-comp", Subtituloclass);
}
