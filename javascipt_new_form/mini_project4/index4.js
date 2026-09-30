const textbox = document.getElementById(`textbox`);
const tofaheriheit = document.getElementById(`tofaheriheit`);
const tocelusis = document.getElementById(`tocelusis`);
const theresult = document.getElementById(`theresult`);
let temp;


function convert(){
    
    if(tofaheriheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32 ;
        theresult.textContent = temp + "°f"; 
    }
    else if(tocelusis.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        theresult.textContent = temp + "°c";

    }
    else{
        theresult.textContent = "select a unit";
    }

}
