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
