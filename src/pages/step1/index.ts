export function initStep1(params) {
  const div = document.createElement("div");
  div.innerHTML = `  <header-comp></header-comp>
  <titulo-comp variant="Necesitamos algunos datos más"></titulo-comp>
  <label-input variant="Email"></label-input>
  <label-input variant="Comida favorita"></label-input>
  <select-comp></select-comp>
  <button-comp variant="Continuar"></button-comp>
  <buttonwhite-comp variant="Volver"></buttonwhite-comp>
  <footer-comp></footer-comp>

   `;
  // div.addEventListener("click", () => {
  //   params.goTo("/page-a");
  // });

  return div;
}
