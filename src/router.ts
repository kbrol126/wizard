import { initWelcome } from "./pages/welcome";
import { initStep1 } from "./pages/step1";

const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/form/,
    component: initStep1,
  },
];

export function initRouter(container: Element | null) {
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

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
}
