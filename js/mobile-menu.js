// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");

//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);

//     mobileMenuRef.classList.toggle("is-open");
//   });
// })();

(() => {
  const menuBtnOpen = document.querySelector("[data-menu-open]");
  const menuBtnClose = document.querySelector("[data-menu-close]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnOpen.addEventListener("click", () => {
    const expanded =
      menuBtnOpen.getAttribute("aria-expanded") === "true" || false;

    menuBtnOpen.classList.toggle("is-open");
    menuBtnOpen.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
  menuBtnClose.addEventListener("click", () => {
    const expanded =
      menuBtnClose.getAttribute("aria-expanded") === "true" || false;

    menuBtnClose.classList.toggle("is-open");
    menuBtnClose.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();
