import { initWelcome } from "./pages/welcome";
import { initStep1 } from "./pages/step1";
import { initThankyou } from "./pages/thankyou";
const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/step-1/,
    component: initStep1,
  },
  {
    path: /\/thankyou/,
    component: initThankyou,
  },
];
export function initRouter(container: Element | null) {
  handleRoute(location.pathname);
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el: any = r.component({ goTo: goTo });
        if (container?.firstChild) {
          container.firstChild.remove();
        }
        container?.appendChild(el);
      }
    }
  }
  //ver
  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
