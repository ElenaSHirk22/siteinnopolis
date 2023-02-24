const elementStyle = document.querySelector('.element-style');
const loginPopUp = document.querySelector('.login-popup');
const modalClossBut = document.querySelector('.modal-closs-but');

console.log(elementStyle);
console.log(loginPopUp);

elementStyle.addEventListener('click', openLoginPopUp);

modalClossBut.addEventListener('click', closeLoginPopUp);

function openLoginPopUp() {
    loginPopUp.classList.add('show-popup'); 
}

function closeLoginPopUp(e) {
    e.preventDefault();
    loginPopUp.classList.remove('show-popup');
}
