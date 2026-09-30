const mycheckbox = document.getElementById("mycheckbox");
const myvisabtn = document.getElementById("myvisabtn");
const mymastercardbtn =document.getElementById("mymastercardbtn");
const mypaypal = document.getElementById("mypaypal");
const mysubmit= document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit .onclick = function(){
    if(mycheckbox.checked){
        subresult.textContent = "you have been subscribed";
    }
    else{
        subresult.textContent = "you are not subscribed!";
    }

    if (myvisabtn.checked){
        paymentresult.textContent = "you  directing to the page";
    }
    else if (mymastercardbtn.checked){
        paymentresult.textContent = "you are directing to the page of mastercard";

    }
    else if (mypaypal.checked){
        paymentresult.textContent = "you are directing to the paypal page";
    }
    else{
        paymentresult.textContent = "you must select the payment type";
    }
    


}
