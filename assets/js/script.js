const hamburger = document.querySelector('.navbar__hamburger')
const navMenu = document.querySelector('.navbar__menu')
const [removeBtn, addBtn, addCartBtn] = document.querySelectorAll('button')
const itemQuantityToAdd = document.querySelector('.itemQuaityToAdd')
const [arrowLeft, arrowRight] = document.querySelectorAll('i')
const productImg = document.querySelector('.images__img')
const productDescription = document.querySelector('.product__description-content')
const productPrice = document.querySelector('.product__price-value')
const productTitle = document.querySelector('.product__title')
let count = 1

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})

document.querySelectorAll('.navbar__link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active')
  navMenu.classList.remove('active')
}))

arrowLeft.addEventListener('click', () => {
  if (productImg.src = './assets/images/cosiness.png') {
    productImg.src = './assets/images/intensity.png'
    productTitle.innerHTML = 'Intensity'
    productPrice.innerHTML = '$14'
    productDescription.innerHTML = 'Chili, oregano, safran, paprika'
    arrowLeft.style.color = 'rgba(0, 0, 0, 0.5)'
    arrowLeft.classList.toggle('cursorOff')
    arrowRight.style.color = '#000'
    arrowRight.classList.toggle('cursorOff')
  }
})

arrowRight.addEventListener('click', () => {
  if (productImg.src = './assets/images/intensity.png') {
    productImg.src= './assets/images/cosiness.png'
    productTitle.innerHTML = 'Cosiness'
    productPrice.innerHTML = '$18'
    productDescription.innerHTML = 'Coriander, annatto, cloves'
    arrowLeft.style.color = '#000'
    arrowLeft.classList.toggle('cursorOff')
    arrowRight.style.color = 'rgba(0, 0, 0, 0.5)'
    arrowRight.classList.toggle('cursorOff')
  }
})

removeBtn.addEventListener('click', () => {
  count > 0 ? count-- : count = 0
  itemQuantityToAdd.innerHTML = count
})

addBtn.addEventListener('click', () => {
  count++
  itemQuantityToAdd.innerHTML = count
})

addCartBtn.addEventListener('click', () => {
  alert(`${count} items added to bag.`)
})
