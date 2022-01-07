(function () {
  const iconBurger = document.querySelector(".navigation-burger");
  const navigationsBody = document.querySelector(".header__container");
  iconBurger.addEventListener("click", function (e) {
    iconBurger.classList.toggle("active");
    navigationsBody.classList.toggle("active");
  });

 

