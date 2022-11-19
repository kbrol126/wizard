import { initHeader } from "../../components/header/header";
import { initTitulo } from "../../components/titulo/titulo";
import { initSubitulo } from "../../components/subtitulo";
import { initH3 } from "../../components/h3";
import { initH4 } from "../../components/h4";
import { initLabelInput } from "../../components/label+input";
import { initSelect } from "../../components/select";
import { initButtonBlue } from "../../components/button-blue";
import { initButtonWhite } from "../../components/button-white";
import { initFooter } from "../../components/footer";
export function initPageA(params) {
  initHeader();
  initTitulo();
  initSubitulo();
  initH3();
  initH4();
  initLabelInput();
  initSelect();
  initButtonBlue();
  initButtonWhite();
  initFooter();

  const div = document.createElement("div");
  div.innerHTML = `
  <header-comp></header-comp>
  <titulo-comp></titulo-comp>
  <subtitulo-comp></subtitulo-comp>
  <h3-comp></h3-comp>
  <h4-comp></h4-comp>
  <label-input></label-input>
  <select-comp></select-comp>
  <button-comp></button-comp>
  <buttonwhite-comp></buttonwhite-comp>
  <footer-comp></footer-comp>

   `;

  // div.addEventListener("click", () => {
  //   params.goTo("/page-b");
  // });
  return div;
}
