export function initSelect() {
  class Selectclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      // var shadow = this.attachShadow({ mode: "open" });
      var variant = this.getAttribute("variant") || "label";
      //creo div contenedor
      var divEl = document.createElement("div");
      divEl.setAttribute("class", "div-contenedor");
      var styleInputName = document.createElement("style");
      styleInputName.textContent =
        ".div-contenedor{box-sizing: border-box;width:242px;min-height:83px; display: flex; flex-direction: column;gap: 5px;margin-top:26px}";
      this.appendChild(styleInputName);
      this.appendChild(divEl);

      //creo label del select
      var labelEl = document.createElement("label");
      labelEl.textContent = variant;
      labelEl.setAttribute("class", "label__del__input");
      var styleLabelEl = document.createElement("style");
      styleLabelEl.textContent =
        ".label__del__input{min-width:122px;height:23px;font-family: 'Roboto';font-style: normal;font-weight: 400;font-size: 18px;line-height: 21px;color: #000000;}";
      labelEl.appendChild(styleLabelEl);
      labelEl.setAttribute("for", "fname");

      //creo select
      var selectEl = document.createElement("select");
      selectEl.textContent = "select";
      selectEl.setAttribute("name", "opciones");
      selectEl.setAttribute("class", "select");

      var styleEl = document.createElement("style");
      styleEl.textContent =
        ".select{box-sizing: border-box;Width:100%;Height:55px;border: 2px solid #000000;border-radius: 4px;padding:0 3px;margin:0; }";
      selectEl.appendChild(styleEl);
      styleEl.setAttribute("type", "text/css");
      selectEl.setAttribute("id", "option");
      selectEl.innerHTML = `
      <option value="Piedra" class="opcion_select">Piedra</option>
      <option value="Papel" class="opcion_select">Papel</option>
      <option value="Tijeras" class="opcion_select">Tijeras</option>
     
     `;

      selectEl.appendChild(styleEl);
      //agrego elementos al shadow
      this.querySelector("div")?.appendChild(labelEl);
      this.querySelector("div")?.appendChild(selectEl);
    }
  }
  customElements.define("select-comp", Selectclass);
}
