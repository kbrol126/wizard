export function initPageA(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <header-comp></header-comp>
  <titulo-comp></titulo-comp>
  <subtitulo-comp></subtitulo-comp>
  <h3-comp></h3-comp>
  <h4-comp></h4-comp>
  <label-input></label-input>
  <select-comp></select-comp>
  <button-comp></button-comp>
  <buttonwhite-comp></buttonwhite-comp>
  <footer-comp></footer-comp>

   `;
  (function () {
    const header = document
      .querySelector("body > div > div > header-comp")
      ?.shadowRoot?.querySelector(".header");
    console.log(header);
  })();

  // div.addEventListener("click", () => {
  //   params.goTo("/page-b");
  // });

  return div;
}
