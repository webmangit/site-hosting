
export function isBurger() {
    const burgerMenu = document.querySelector('.header__burger');
    const menuBody = document.querySelector('.header__menu');
    if (burgerMenu) {
        burgerMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            burgerMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
    }
}