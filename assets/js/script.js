// ===================================== accrodian ========================================//
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
  slidesPerView: 2.5,
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 150,
    modifier: 1.5,
    slideShadows: false,
  },
});

// ===================================== PRELOADER ========================================//

// const preloader = document.querySelector(".preloader");

// setTimeout(() => {
//   preloader.classList.add("d-none");
// }, 3000);
