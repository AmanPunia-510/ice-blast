// ===================================== navbar ========================================//

const item = document.querySelector(".navbar-items");
const menu = document.querySelector(".toggle");

menu.addEventListener("click", () => {
  item.classList.toggle("show");
  let contain = document.querySelector("body");
  let container = document.querySelector(".my-container");

  if (item.classList.contains("show")) {
    contain.style.position = "fixed";
    contain.style.top = "0";
    contain.style.left = "0";
    contain.style.width = "100%";
    index.classList.add("z-3");
    container.classList.add("position-u");
  } else {
    contain.style.position = "unset";
  }
});

// ===================================== accrodian-1 ========================================//

let accordianItems = document.querySelectorAll(".accordian-box1");
let layer1 = document.querySelector(".layer-on-p");
layer1.classList.add("d-block");
let layers = document.querySelectorAll(".layer-on-p");
layers.forEach((l) => {
  l.style.display = "none";
});

accordianItems.forEach((item) => {
  let paragraph = item.querySelector(".accordian1-p");
  let heading = item.querySelector(".acc-p-h2");
  let svg = item.querySelector(".accordian-svg");
  let layer = item.querySelector(".layer-on-p");

  heading.style.cursor = "pointer";

  heading.addEventListener("click", () => {
    accordianItems.forEach((otherItem) => {
      if (otherItem !== item) {
        let otherParagraph = otherItem.querySelector(".accordian1-p");
        let otherSvg = otherItem.querySelector(".accordian-svg");
        let layer = otherItem.querySelector(".layer-on-p");

        otherParagraph.classList.add("d-none");
        otherParagraph.classList.remove("d-block");
        otherSvg.innerHTML = "+";
        layer.classList.add("d-none");
      }
    });

    if (paragraph.classList.contains("d-none")) {
      paragraph.classList.remove("d-none");
      paragraph.classList.add("d-block");
      layer.classList.remove("d-none");
      layer.classList.add("d-inline-block");
      svg.innerHTML = "-";
    } else {
      paragraph.classList.remove("d-block");
      paragraph.classList.add("d-none");
      svg.innerHTML = "+";
      layer.classList.add("d-none");
    }
  });
});

// ===================================== accrodian-2 ========================================//
let accordian_items = document.querySelectorAll(".accordian-box");

accordian_items.forEach((items) => {
  let paragraph = items.querySelector(".accordian-p");
  let heading = items.querySelector(".accordian-txt-or-svg");
  let svg = items.querySelector(".accordian-svg");
  let main_h = items.querySelector(".accordian-h");

  heading.style.cursor = "pointer";
  heading.addEventListener("click", () => {
    accordian_items.forEach((other) => {
      if (other !== items) {
        let paragraph = other.querySelector(".accordian-p");
        let svg = other.querySelector(".accordian-svg");
        let main_h = other.querySelector(".accordian-h");
        other.classList.remove("accord_back_clr");
        paragraph.classList.add("d-none");
        main_h.style.color = "unset";
        svg.innerHTML = "+";
        svg.style.color = "unset";
      }
    });
    if (paragraph.classList.contains("d-none")) {
      items.classList.add("accord_back_clr");
      paragraph.classList.remove("d-none");
      paragraph.classList.add("d-block");
      main_h.style.color = "white";
      svg.innerHTML = "-";
      svg.style.color = "white";
      paragraph.style.pointerevent = "none";
    } else {
      paragraph.classList.remove("d-block");
      paragraph.classList.add("d-none");
      svg.innerHTML = "+";
      svg.style.color = "unset";
      items.classList.remove("accord_back_clr");
      main_h.style.color = "unset";
    }
  });
});

// ===================================== SLIDER ========================================//

var gallerySlider = new Swiper(".gallery-slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    dots: false,
  },
  effect: "coverflow",
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 150,
    modifier: 1.5,
    slideShadows: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
  },
});

const check = document.querySelector(".checkbox-part");
const check_img = document.querySelector(".check-img");

check.addEventListener("click", () => {
  check_img.classList.toggle("d-none");
})