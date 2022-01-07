(function () {
  const iconBurger = document.querySelector(".navigation-burger");
  const navigationsBody = document.querySelector(".header__menu");
  iconBurger.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconBurger.classList.toggle("_active");
    navigationsBody.classList.toggle("_active");
  });

