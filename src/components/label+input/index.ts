export function initLabelInput() {
  class LabelInputclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var divEl = document.createElement("div");
      divEl.setAttribute("class", "div-contenedor");
      var styleInputName = document.createElement("style");
      styleInputName.textContent =
        ".div-contenedor{width:242px;height:83px;display: flex; flex-direction: column;gap: 5px;margin-top:26px}";
      shadow.appendChild(styleInputName);
      shadow.appendChild(divEl);

      var labelEl = document.createElement("label");
      labelEl.textContent = "label";
      labelEl.setAttribute("class", "label__del__input");
      var styleLabelEl = document.createElement("style");
      styleLabelEl.textContent =
        ".label__del__input{width:122px;height:23px;font-family: 'Roboto';font-style: normal;font-weight: 400;font-size: 18px;line-height: 21px;color: #000000;}";
      labelEl.appendChild(styleLabelEl);
      labelEl.setAttribute("for", "fname");

      var inputEl = document.createElement("input");
      inputEl.setAttribute("class", "input");
      var styleInputEl = document.createElement("style");
      styleInputEl.textContent =
        ".input{box-sizing: border-box;Width:100%;Height:55px;border: 2px solid #000000;border-radius: 4px;padding:0 3px;margin:0}";
      inputEl.appendChild(styleInputEl);
      inputEl.setAttribute("id", "fname");
      inputEl.setAttribute("type", "text");
      inputEl.setAttribute("name", "name");
      inputEl.setAttribute("placeholder", "Campo de texto");

      shadow.querySelector("div")?.appendChild(labelEl);
      shadow.querySelector("div")?.appendChild(inputEl);
    }
  }
  customElements.define("label-input", LabelInputclass);
}
