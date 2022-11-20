export function initThankyou(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <header-comp></header-comp>
  <titulo-comp variant="Gracias"></titulo-comp>
  <h3-comp variant="Necesitamos algunos datos más"></h3-comp>
  <button-comp variant="De nada"></button-comp>
  <footer-comp></footer-comp>

   `;

  // div.addEventListener("click", () => {
  //   params.goTo("/page-b");
  // });

  return div;
}
