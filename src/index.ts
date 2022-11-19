import { initRouter } from "./router";
import { initHeader } from "./components/header/header";
import { initTitulo } from "./components/titulo/titulo";
import { initSubitulo } from "./components/subtitulo";
import { initH3 } from "./components/h3";
import { initH4 } from "./components/h4";
import { initLabelInput } from "./components/label+input";
import { initSelect } from "./components/select";
import { initButtonBlue } from "./components/button-blue";
import { initButtonWhite } from "./components/button-white";
import { initFooter } from "./components/footer";

function main() {
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
  const rootEl = document.querySelector(".root");
  initRouter(rootEl);
}

main();
