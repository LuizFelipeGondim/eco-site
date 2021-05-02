export default function hamburguerMenu() {

    let menu = document.querySelector('.menu')
    let hamburguer = document.querySelector('.hamburguer')
    menu?.classList.toggle('active')
    hamburguer?.classList.toggle('active')

}