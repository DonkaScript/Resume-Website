
const activePage = window.location.pathname;
const LinkA = document.querySelectorAll('.list a');

const list = document.querySelectorAll('.list');
list.forEach((item) => item.addEventListener('click', ActiveLink));
function ActiveLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}