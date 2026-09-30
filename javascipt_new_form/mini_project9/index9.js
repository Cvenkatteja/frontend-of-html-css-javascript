const choices = ["Rock" , "Papers" , "Scissors"];
const playerchoice = document.getElementById("playerchoice");
const computerchoice = document.getElementById("computerchoice");
const resultdisplay = document.getElementById("resultdisplay");

function playgame(playerdisplay){

    const computerdisplay = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if(playerdisplay === computerdisplay){
        result = "It's a Tie";
    }
    else{
        switch(playerdisplay){
            case "Rock":
                result = (computerdisplay === "Scissors") ? "you win ": "you lose";
                break;
            case "Papers":
                result = (computerdisplay === "Rock") ? "you win" : "you lose" ;
                break;
            case "Scissors":
                result = (computerdisplay === "Papers") ? "you win " : "you  lose";
                break;  

                
                
            }
            
        }
        playerchoice.textContent = `playerchoice: ${playerdisplay}`;
        computerchoice.textContent = `computerchoice: ${computerdisplay}`;
        resultdisplay.textContent = result ;

}