
//eslint-disable-next-line
import IMask from 'imask';

const tels = document.querySelectorAll("input[type=\"tel\"]");

tels.forEach(el => {
    IMask(el, {
        mask: "+{7} (000) 000 0000"
    });
});