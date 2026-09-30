 const decreasebtn = document.getElementById("decreasebtn");
 const resetbtn = document.getElementById("resetbtn");
 const increasebtn = document.getElementById("increasebtn");
 const mylabel = document.getElementById("mylabel");

 let count = 0;


 decreasebtn.onclick = function(){
    count--;
    mylabel.textContent = count;
 }

 increasebtn.onclick = function(){
    count++;
    mylabel.textContent = count;
 }
 
 resetbtn.onclick = function(){
    count = 0;
    mylabel.textContent = count;
 }