import { state } from "../../state";

export function initWelcome(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <header-comp></header-comp>
  <titulo-comp variant="Te damos la bienvenida a esta página"></titulo-comp>
  <h3-comp variant="Para continuar ingresá tu nombre"></h3-comp>
  <label-input variant="Nombre"></label-input>
  <button-comp variant="Comenzar"></button-comp>
  <footer-comp ></footer-comp>

   `;
  var button = div.querySelector(" div > button-comp > button");
  var inputEl: any = div
    .querySelector(" div > label-input")
    ?.shadowRoot?.querySelector("#fname");

  button?.addEventListener("click", (e) => {
    state.addItem(inputEl.value);
    params.goTo("/form");
  });
  return div;
}
