function toggleMenuDisplay() {

    mobileMedia = window.matchMedia("(min-width: 1101px)")
    var menuOpenButton = document.querySelector(".nav_menu-btn--open");
    var menuCloseButton = document.querySelector(".nav_menu-btn--close");
    var menu = document.querySelector(".nav-menu");
    if (mobileMedia.matches) { // If media query matches
        changeDisplayCSS(menuOpenButton, "nav_menu-btn--show", "nav_menu-btn--hide");
        changeDisplayCSS(menuCloseButton, "nav_menu-btn--show", "nav_menu-btn--hide");
        changeDisplayCSS(menu, "nav_menu--hide", "nav_menu--show");

    }
    else {
        // Only change the display of a menu button to the default burger bar when both are hidden.
        // Don't want it to change to a button a person hasn't pressed on, on resize in a mobile pixel range.
        if (menuOpenButton.classList.contains("nav_menu-btn--hide")
            && menuCloseButton.classList.contains("nav_menu-btn--hide")) {

            changeDisplayCSS(menuOpenButton, "nav_menu-btn--hide", "nav_menu-btn--show");
            changeDisplayCSS(menu, "nav_menu--show", "nav_menu--hide");

        }

    }
}

function toggleMenuSymbol() {

    var menuOpenButton = document.querySelector(".nav_menu-btn--open");
    var menuCloseButton = document.querySelector(".nav_menu-btn--close");
    var menu = document.getElementsByClassName("nav-menu")[0];

    showOrHideMainMenuElement(menuOpenButton, menuCloseButton, menu);
}

function showOrHideMainMenuElement(menuOpenButton, menuCloseButton, menu) {

    if (menuOpenButton.classList.contains("nav_menu-btn--show")) {

        changeDisplayCSS(menuOpenButton, "nav_menu-btn--show", "nav_menu-btn--hide");
        changeDisplayCSS(menuCloseButton, "nav_menu-btn--hide", "nav_menu-btn--show");
        changeDisplayCSS(menu, "nav_menu--hide", "nav_menu--show");

    }

    else if (menuCloseButton.classList.contains("nav_menu-btn--show")) {

        changeDisplayCSS(menuCloseButton, "nav_menu-btn--show", "nav_menu-btn--hide");
        changeDisplayCSS(menuOpenButton, "nav_menu-btn--hide", "nav_menu-btn--show");
        changeDisplayCSS(menu, "nav_menu--show", "nav_menu--hide");
    }
}

function changeDisplayCSS(menuButton, removeCSS, addCSS) {
    menuButton.classList.remove(removeCSS);
    menuButton.classList.add(addCSS);
}

function toggleSubMenu() {
    var subMenu = document.getElementsByClassName("nav-sub-menu ")[0];
    var subMenuOpenButton = document.querySelector(".nav-sub-menu--button-open-menu");
    var subMenuCloseButton = document.querySelector(".nav-sub-menu--button-closed-menu");

    showOrHideSubMenuElement(subMenuOpenButton, subMenuCloseButton, subMenu);
}

function showOrHideSubMenuElement(subMenuOpenButton, subMenuCloseButton, subMenu) {

    if (subMenuOpenButton.classList.contains("button-hide")) {

        subMenuOpenButton.classList.remove("button-hide");
        subMenuCloseButton.classList.add("button-hide");
        subMenu.classList.remove("nav_sub-menu--hide");

    }

    else if (subMenuCloseButton.classList.contains("button-hide")) {

        subMenuCloseButton.classList.remove("button-hide");
        subMenuOpenButton.classList.add("button-hide");
        subMenu.classList.add("nav_sub-menu--hide");


    }
}

function showOrHideHero(button){
    var heroShown = document.querySelector(".hero--show");
   
    if(button.classList.contains("hero__button--lco-img") ) {

        var nextHero = document.querySelectorAll(".hero")[0];

    }

    else if(button.classList.contains("hero__button--easy-styles-img") ) {

        var nextHero = document.querySelectorAll(".hero")[1];
         
    }

    else if(button.classList.contains("hero__button--colourism-img") ) {

        var nextHero = document.querySelectorAll(".hero")[2];
        
    }

    if(!(nextHero === heroShown)){

        nextHero.classList.remove("hero--hide");
        heroShown.classList.add("hero--hide");


        heroShown.classList.remove("hero--show");
        nextHero.classList.add("hero--show");

    }

}

function addListenerToHeroButton(){
    var buttons = document.getElementsByClassName("hero__button");

    for (let i = 0; i < buttons.length; i++){
    
            buttons[i].addEventListener("click",function (){showOrHideHero(buttons[i])});
        
    }
}

toggleMenuDisplay();
window.addEventListener("resize", toggleMenuDisplay);
var subMenuOpenButton = document.querySelector(".nav-sub-menu--button-closed-menu");
var subMenuCloseButton = document.querySelector(".nav-sub-menu--button-open-menu");

var menuOpenButton = document.querySelector(".nav_menu-btn--open");
var menuCloseButton = document.querySelector(".nav_menu-btn--close");
addListenerToHeroButton();
menuOpenButton.addEventListener("click", toggleMenuSymbol);
menuCloseButton.addEventListener("click", toggleMenuSymbol);
subMenuOpenButton.addEventListener("click", toggleSubMenu);
subMenuCloseButton.addEventListener("click", toggleSubMenu);
