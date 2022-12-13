import { state } from "../../state";

export function initStep1(params) {
  const div = document.createElement("div");
  div.innerHTML = `  <header-comp></header-comp>
  <titulo-comp variant="Hola ${state.getState().list[0]}"></titulo-comp>
  <form class="formulario">
  <label-input variant="Email" type="email" class="label" name="email" ></label-input>
  <label-input variant="Comida favorita" name="comida" class="comida"></label-input>
  <select-comp class="ppt" variant="Alguna de estas tres opciones"></select-comp>
  <button-comp variant="Enviar"></button-comp>
  </form>

  <footer-comp></footer-comp>

   `;
  const $ = (selector) => div.querySelector(selector);
  const getInputValue = (shadowElement) =>
    shadowElement.shadowRoot.querySelector("input").value;

  const formulario = $(".formulario");
  const label: any = $(".label");
  const comida: any = $(".comida");
  const ppt: any = $(".ppt");

  formulario?.addEventListener("submit", (e: any) => {
    e.preventDefault();

    console.log(getInputValue(label));
    console.log(getInputValue(comida));
    console.log(ppt.querySelector("select").value);
  });
  return div;
}
