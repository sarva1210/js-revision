var inc = document.querySelector('#inc')
var dec = document.querySelector('#dec')
var h2 = document.querySelector('h2')

var count = 0

inc.addEventListener('click',function(){
    count++
    h2.innerHTML = count
})

dec.addEventListener('click',function(){
    count--
    h2.innerHTML = count
})