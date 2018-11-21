var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let x=canvas.width/2
let deltaX=0;
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let intervalID="";
let status = document.getElementById("gameStatus")
let shipImage= new Image()
shipImage.src="./img/ship.svg"

let shipImage= new Image()
shipImage.src="./img/ship.svg"
    // ctx.drawImage(shipImage,0,0)




function main(){
    deltaX=0;
    status.innerHTML= " Score: ???? " 
 intervalID = setInterval( drawShip, 100) }


 function stopGame(){
    status.innerHTML= " GAME OVER!" 
    clearInterval(intervalID) 
    deltaX=0;
}
   
function drawShip(){
    ctx.clearRect(0, 0, 700, 500)
    ctx.fillStyle="#FF0000";
     ctx.drawImage(shipImage,x-25+deltaX,450,50,30)
    
    // ctx.fillRect();

    drawAlien();
    console.log("it is running ")
    

}



function drawAlien(){

    for(let i = 0; i < 10; i++) {
        ctx.fillStyle="green";
        ctx.fillRect(50+(i*50), 50, 30, 20); 
        ctx.fillStyle="lime";
        ctx.fillRect(50+(i*50), 100, 30, 20);
        ctx.fillStyle="yellow";
        ctx.fillRect(50+(i*50), 150, 30, 20);

        ctx.fillStyle="orange";
        ctx.fillRect(50+(i*50), 200, 30, 20); 
    }
}


document.onkeydown = function(e){
    if (e.keyCode === 37){
        deltaX-=5;
        console.log(deltaX)
    }
    else if (e.keyCode === 39){
        deltaX+=5;
        console.log(deltaX)
    }}


   


    start.addEventListener("click", main)
    stop.addEventListener("click", stopGame) 
   


