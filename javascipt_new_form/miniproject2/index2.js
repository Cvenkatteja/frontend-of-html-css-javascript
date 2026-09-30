const myinput= document.getElementById(`myinput`);
const mysubmit = document.getElementById(`mysubmit`);
const myresultsubmit = document.getElementById(`myresultsubmit`);

let age;

mysubmit.onclick = function(){

    age = myinput.value;
    age = Number(age);
    
    if(age>=100){
        // console.log("you are elgible for to work here ");   
        myresultsubmit.textContent="you are elgible for to work here";
    }
    else if(age == 0){
        // console.log("you are not ekigbke to work here");
        myresultsubmit.textContent = "you are not eligble to work here";
    }
    else if(age >=18){
        // console.log("you are to old to work here");
        myresultsubmit.textContent = "you are to old to work here";
    }
    else{
        // console.log("you need to be 120+ to work here");
          myresultsubmit.textContent = "you need to be 120+ to work here";

    }
}