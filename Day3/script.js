let a = 12;
if(a>10){
    console.log("hey!!");
} else{
    console.log("bye bye!");
}


if(10){
    console.log("hey");
} else{
    console.log("goodbye!");
} //truthy


if(0){
    console.log("hie");
}else{
    console.log("byee");
} //falsy 


if(12>13){
    console.log("12 is greater");
}else if(14>15){
    console.log("14 is greater");
}else if(15>16){
    console.log("13 is greater");
}else{
    console.log("non are true");
}


23 > 13 ? console.log("yes") : console.log("nope");


switch(2){
    case 1:
        console.log("hi");
        break;
    case 2:    
        console.log("hie");
        break;
    case 3:    
        console.log("heyy");
        break;
    case 4:    
        console.log("hello");
        break;
    default:    
        console.log("default case");
}