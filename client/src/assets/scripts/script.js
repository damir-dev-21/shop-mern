export function script() {
  const toggle = document.querySelector(".toggle");
  const list = document.querySelector(".header__body__links");

  toggle.addEventListener("click", () => {
    list.classList.toggle("active");
  });
}
