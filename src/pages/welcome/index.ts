export function initWelcome(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <header-comp></header-comp>
  <titulo-comp variant="Te damos la bienvenida a esta página"></titulo-comp>
  <h4-comp variant="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?"></h4-comp>
  <h3-comp variant="Para continuar ingresá tu nombre"></h3-comp>
  <label-input variant="Nombre" placeholder="Ingresá tu nombre" type="text"></label-input>
  <button-comp variant="Comenzar" class="buttonCompEl"></button-comp>
  <footer-comp ></footer-comp>

   `;
  var button = div.querySelector("button-comp");
  button?.addEventListener("click", () => {
    params.goTo("/step-1");
  });
  return div;
}
