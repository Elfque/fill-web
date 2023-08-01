const dropBtn = document.querySelectorAll(".drop_button");

dropBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentDrop = btn.closest(".drop");
    parentDrop.classList.toggle("active");
  });
});

$(".hold").slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
});

$(".pictures").slick({
  // dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: true,
  prevArrow: $(".prev1"),
  nextArrow: $(".next1"),
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
