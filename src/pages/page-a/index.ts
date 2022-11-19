import { initHeader } from "../../components/header/header";
import { initTitulo } from "../../components/titulo/titulo";
import { initSubitulo } from "../../components/subtitulo";
initHeader();
initTitulo();
initSubitulo();

export function initPageA(params) {
  const div = document.createElement("div");
  div.innerHTML = `<h1>Pagina A este elemento</h1>
  <header-comp></header-comp>
  <titulo-comp></titulo-comp>
  <subtitulo-comp></subtitulo-comp>
   `;

  div.addEventListener("click", () => {
    params.goTo("/page-b");
  });
  return div;
}
