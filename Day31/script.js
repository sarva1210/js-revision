var allbtn = document.querySelectorAll('button')

allbtn.forEach(function(elem){
    elem.addEventListener('click', function(){
        if(elem.innerHTML == 'Add Friend'){
            elem.innerHTML = 'Remove Friend'
        } else {
            elem.innerHTML = 'Add Friend'
        }
    })    
})