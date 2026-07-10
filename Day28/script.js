var btn = document.querySelector('button')
var main = document.querySelector('main')

var arr = [
  "Hey! I love JavaScript.",
  "Work hard, stay humble.",
  "You can do it!!!",
  "Code. Sleep. Repeat.",
  "Every bug teaches something.",
  "Small steps every day.",
  "Dream big, code bigger.",
  "Practice makes progress.",
  "Never stop learning.",
  "Errors are proof you're trying.",
  "Push yourself beyond limits.",
  "One line of code at a time.",
  "Stay curious, keep building.",
  "Your future self will thank you.",
  "Coding is creating magic.",
  "Keep calm and debug.",
  "Consistency beats motivation.",
  "Today's effort is tomorrow's success.",
  "Think. Code. Improve.",
  "Success starts with one commit.",
  "Build projects, not excuses.",
  "Learn by doing.",
  "Make your dreams executable.",
  "Focus on progress, not perfection.",
  "Believe in your skills.",
  "Great developers never stop learning.",
  "Every expert was once a beginner.",
  "Turn coffee into code",
  "Trust the process.",
  "Your next project could change everything.",
  "Write clean code.",
  "Coding is a superpower.",
  "Keep pushing forward.",
  "One bug closer to success.",
  "Be fearless while learning.",
  "Debug like a detective.",
  "Create. Learn. Repeat.",
  "Your code tells your story.",
  "Stay patient, stay persistent."
];

btn.addEventListener('click',function(){
    var h1 = document.createElement('h1')
    var x = Math.random()*60
    var y = Math.random()*60
    var rot = Math.random()*360
    var scl = Math.random()*2
    var a = Math.floor(Math.random()*arr.length)
    h1.innerHTML = arr[a]
    h1.style.position=' absolute'

    h1.style.left= x+'%'
    h1.style.top= y+'%'
    h1.style.rotate= rot+'deg'
    h1.style.scale= scl
    main.appendChild(h1);
})