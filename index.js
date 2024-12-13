let currantMoleTile;
let currentPlantTile;

let score = 0;
let gameOver = false;


window.onload = function(){
    setGame();
}

function setGame(){

    for(let i=0; i<9; i++){

       let tile = document.createElement("div");
        tile.id = i.toString();
      
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);   
      
        
        
     }

        setInterval(setMole, 800);
     setInterval(setPlant, 1400);
   

    

   

}

function getRandomNum (){

    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole (){
    
    if(gameOver){
        return;
    }


    if(currantMoleTile){

        currantMoleTile.innerHTML= "";

   
    }

    let mole = document.createElement("img");

    mole.src = "asets/monty-mole.png";
    
    let num = getRandomNum();

    if(currentPlantTile && currentPlantTile.id == num){
        return;
    }

    currantMoleTile = document.getElementById(num);

    currantMoleTile.appendChild(mole);


}

function setPlant(){
    if(gameOver){
        return;
    }
    if(currentPlantTile){
        currentPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");

    plant.src = "asets/piranha-plant.png";

    let num = getRandomNum();

    if(currantMoleTile && currantMoleTile.id == num){

        return;
    }
    
    currentPlantTile = document.getElementById(num);

    currentPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameOver){
        return;
    }
    if(this == currantMoleTile){

     score+=10;
        document.getElementById("scrore").innerText = score.toString();
        

    }
    else if(this == currentPlantTile){
        document.getElementById("scrore").innerText = "GAME OVER:" + score.toString();

        gameOver = true;

    }
}

btn = document.getElementById("btn");


 btn.addEventListener("click",(()=>{
if(gameOver){

    gameOver = false;

    score.innerText = "0";
}

 }))



 akash();