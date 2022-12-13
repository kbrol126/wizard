import { initRouter } from "./router";
import { initHeader } from "./components/header/header";
import { initTitulo } from "./components/titulo/titulo";
import { initH3 } from "./components/h3";
import { initSelect } from "./components/select";
import { initButtonBlue } from "./components/button-blue";
import { initButtonWhite } from "./components/button-white";
import { initFooter } from "./components/footer";
import { initLabelInput } from "./components/label+input";

function main() {
  initHeader();
  initTitulo();
  initH3();
  initSelect();
  initButtonBlue();
  initButtonWhite();
  initFooter();
  initLabelInput();
  const rootEl = document.querySelector(".root");
  initRouter(rootEl);
}

main();
