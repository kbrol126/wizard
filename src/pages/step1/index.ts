export function initStep1(params) {
  const div = document.createElement("div");
  div.innerHTML = `  <header-comp></header-comp>
  <titulo-comp variant="Necesitamos algunos datos más"></titulo-comp>
  <label-input variant="Email" type="email"></label-input>
  <label-input variant="Comida favorita"></label-input>
  <select-comp></select-comp>
  <button-comp variant="Continuar"></button-comp>
  <buttonwhite-comp variant="Volver"></buttonwhite-comp>
  <footer-comp></footer-comp>

   `;
  var button = div.querySelector("button-comp");
  button?.addEventListener("click", () => {
    params.goTo("/thankyou");
  });
  var button = div.querySelector("buttonwhite-comp");
  button?.addEventListener("click", () => {
    params.goTo("/welcome");
  });
  return div;
}
