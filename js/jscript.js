function toggleMenuDisplay() {

    mobileMedia = window.matchMedia("(min-width: 1101px)")
    var menuOpenButton = document.querySelector(".nav_menu-btn--open");
    var menuCloseButton = document.querySelector(".nav_menu-btn--close");

    if (mobileMedia.matches) { // If media query matches
        changeDisplayCSS(menuOpenButton, "nav_menu-btn--show", "nav_menu-btn--hide");
        changeDisplayCSS(menuCloseButton, "nav_menu-btn--show", "nav_menu-btn--hide" );
    }
    else {
        // Only change the display of a menu button to the default burger bar when both are hidden.
        // Don't want it to change to a button a person hasn't pressed on, on resize in a mobile pixel range.
        if (menuOpenButton.classList.contains("nav_menu-btn--hide")
            && menuCloseButton.classList.contains("nav_menu-btn--hide")) {

                changeDisplayCSS(menuOpenButton,"nav_menu-btn--hide", "nav_menu-btn--show" );
        }
      
    }
}

function toggleMenuSymbol() {

    var menuOpenButton = document.querySelector(".nav_menu-btn--open");
    var menuCloseButton = document.querySelector(".nav_menu-btn--close");

    showOrHideElement(menuOpenButton, menuCloseButton);
}

function showOrHideElement(menuOpenButton, menuCloseButton) {

    if (menuOpenButton.classList.contains("nav_menu-btn--show")) {

        changeDisplayCSS(menuOpenButton, "nav_menu-btn--show", "nav_menu-btn--hide");
        changeDisplayCSS(menuCloseButton, "nav_menu-btn--hide", "nav_menu-btn--show" );

    }

    else if (menuCloseButton.classList.contains("nav_menu-btn--show")) {

        changeDisplayCSS(menuCloseButton, "nav_menu-btn--show", "nav_menu-btn--hide" );
        changeDisplayCSS(menuOpenButton, "nav_menu-btn--hide", "nav_menu-btn--show" );
    }
}

function changeDisplayCSS(menuButton, removeCSS, addCSS) {
    menuButton.classList.remove(removeCSS);
    menuButton.classList.add(addCSS);
}

toggleMenuDisplay();
window.addEventListener("resize", toggleMenuDisplay);
var menuOpenButton = document.querySelector(".nav_menu-btn--open");
var menuCloseButton = document.querySelector(".nav_menu-btn--close");
menuOpenButton.addEventListener("click", toggleMenuSymbol);
menuCloseButton.addEventListener("click", toggleMenuSymbol);
