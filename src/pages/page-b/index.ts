export function initPageB(params) {
  const div = document.createElement("div");
  div.innerHTML = ` <h1> Pagina B</h1>`;
  div.addEventListener("click", () => {
    params.goTo("/page-a");
  });

  return div;
}
