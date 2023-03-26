addEventListener('DOMContentLoaded', function(){
    this.document.querySelector('#burger', '#menu-close').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('menu_is-active')
    })
    this.document.querySelector('#menu-close').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('menu_is-active')
    })
})