export default function toggleMenu() {

    let toggle = document.querySelector('.toggle')
    let sidebar = document.querySelector('.sidebar')
    let main_content = document.querySelector('.main-content')
    let header = document.querySelector('.header')
    let content = document.querySelector('.content')
    toggle?.classList.toggle('active')
    sidebar?.classList.toggle('active')
    main_content?.classList.toggle('active')
    header?.classList.toggle('active')
    content?.classList.toggle('active')

}