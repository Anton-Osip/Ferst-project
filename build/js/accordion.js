const accardionHead = document.getElementsByClassName('accardion__head');
const accardionBody = document.getElementsByClassName('accardion__body');


for (let i = 0; i < accardionHead.length; i++) {
     accardionHead[i].onclick = function () {
          this.classList.toggle('accardion__head--active');
          this.nextElementSibling.classList.toggle('accardion__body--active')
     }
}
