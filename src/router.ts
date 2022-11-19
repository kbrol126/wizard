import { initPageA } from "./pages/page-a";
import { initPageB } from "./pages/page-b";
const routes = [
  {
    path: /\/page-a/,
    component: initPageA,
  },
  {
    path: /\//,
    component: initPageA,
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

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
