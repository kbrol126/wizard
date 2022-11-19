export function initTitulo() {
  class Tituloclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var tituloEl = document.createElement("h1");
      tituloEl.textContent = "Título - Poppins - 52px - Bold";
      tituloEl.setAttribute("class", "titulo");
      var styletituloEl = document.createElement("style");
      styletituloEl.textContent =
        ".titulo{display: flex;text-align:left;min-height: 61px;width:100%;font-family: 'Roboto';font-style: normal;font-weight: 700;font-size: 52px;line-height: 61px;color: #000000;}       ";
      shadow.appendChild(styletituloEl);
      shadow.appendChild(tituloEl);
    }
  }
  customElements.define("titulo-comp", Tituloclass);
}
