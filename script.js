const btnMobile = document.getElementById('btnMobile')
const burguer = document.getElementById('burgerBtn')
function toggleMenu() {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')

  burguer.classList.toggle('fa-bars')
  burguer.classList.toggle('fa-x')
}

btnMobile.addEventListener('click', toggleMenu)
