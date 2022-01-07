(function(){
  const iconBurger = document.querySelector(".navigation-burger");
  const navigationsBody = document.querySelector(".header__menu");
  console.log(iconBurger)
  iconBurger.addEventListener("click", function (e) {
    console.log(111)
    document.body.classList.toggle("lock");
    iconBurger.classList.toggle("_active");
    navigationsBody.classList.toggle("header__menu_active");
  });

})();
  
