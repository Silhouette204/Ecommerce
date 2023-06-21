AOS.init();

let shoes = document.querySelectorAll(".brand-list li");
let active = "./img/nike.webp";

shoes.forEach((e) => {
  e.addEventListener("mouseenter", (event) => {
    shoes.forEach((e) => {
      e.classList.remove("active");
    });

    event.target.classList.add("active");
    active = event.target.getAttribute("data-img");
    let image = document.querySelector(".image");
    image.style.backgroundImage = `url("${active}")`;
  });
});
