const words = [
    "Frontend Developer",
    "UI Designer",
    "Web Developer",
    "JavaScript Developer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function type(){

    current = words[i];

    if(!isDeleting){

        typing.textContent = current.substring(0,j++);
    }
    else{

        typing.textContent = current.substring(0,j--);
    }

    if(!isDeleting && j === current.length + 1){

        isDeleting = true;

        setTimeout(type,1200);

        return;
    }

    if(isDeleting && j === 0){

        isDeleting = false;

        i++;

        if(i === words.length){

            i = 0;
        }

    }

    setTimeout(type,isDeleting ? 60 : 120);

}

type();