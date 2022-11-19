import { initPageA } from "./pages/page-a";
import { initPageB } from "./pages/page-b";

const routes = [
  {
    path: /\/page-a/,
    component: initPageA,
  },
  {
    path: /\/page-b/,
    component: initPageB,
  },
];
export function initRouter(container: Element | null) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route): any {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        if (container!.firstChild) {
          container!.firstChild.remove();
        }
        container?.appendChild(el);
      }
    }
  }
  (function () {
    window.addEventListener("load", () => {
      handleRoute(location.pathname);
    });
  })();
}
