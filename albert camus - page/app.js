// animação imagem png-albert
const imageRotate = document.querySelector('#png-albert')

imageRotate.addEventListener('mouseover',function(){
    imageRotate.style.animation='rotacion 2s forwards'
})

imageRotate.addEventListener('mouseleave',function(){
    imageRotate.style.animation='rotacion-reverse 2s forwards'
})
