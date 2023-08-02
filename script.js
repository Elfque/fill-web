const dropBtn = document.querySelectorAll(".drop_button");
const navBtn = document.querySelector(".nav-button");
const list = document.querySelector("nav ul");
const close = document.querySelector(".close");

dropBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentDrop = btn.closest(".drop");
    parentDrop.classList.toggle("active");
  });
});

// $(".hold").slick({
//   // dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   centerMode: true,
//   prevArrow: $(".prev"),
//   nextArrow: $(".next"),
//   responsive: [
//     {
//       breakpoint: 1000,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// });

// $(".pictures").slick({
//   // dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   centerMode: true,
//   prevArrow: $(".prev1"),
//   nextArrow: $(".next1"),
//   responsive: [
//     {
//       breakpoint: 1000,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// });
const swiper = new Swiper(".swiper", {
  speed: 1000,
  spaceBetween: 40,
  loop: true,
  slidesPerView: 4,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

navBtn.addEventListener("click", () => {
  list.classList.toggle("hide");
});

close.addEventListener("click", () => {
  list.classList.toggle("hide");
});
