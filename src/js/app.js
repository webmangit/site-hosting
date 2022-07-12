import * as burger from './modules/burger.js'
import * as transfer from './modules/transfer.js'
import * as spoller from './modules/spoller.js'

// Перенос HTML-элементов из одного места страницы в любое другое при смене размера экрана
transfer.isTransfer()
// Обеспечение работы меню бургера
burger.isBurger()
// Обеспечение работы споллера
spoller.isSpoller()



const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        stopOneLastSlide: false,
        disableOnInteraction: true,
    }
});

