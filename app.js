var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let x=canvas.width/2
let y= canvas.height/2
let deltaX=0;
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let intervalID="";
let status = document.getElementById("gameStatus")
let shipImage= new Image()
shipImage.src="./img/ship.svg"

// let shipImage= new Image()
// shipImage.src="./img/ship.svg"
    // ctx.drawImage(shipImage,0,0)

/* The functions to start and stop the game */
function main(){
    deltaX=0;
    status.innerHTML= " Score: ???? " 
    intervalID = setInterval( drawShip, 100) 
}


function stopGame(){
    status.innerHTML= " GAME OVER!" 
    clearInterval(intervalID) 
    deltaX=0;
}


/* Drawing the Ship that go on the top of the canvas */

function drawShip(){
    ctx.clearRect(0, 0, 700, 500)
    ctx.fillStyle="#FF0000";
    ctx.drawImage(shipImage,x-25+deltaX,450,50,30)
    // ctx.fillRect();
    drawAlien();


}

/* Drawing the Aliens that go on the top of the canvas */

function drawAlien(){

    for(let i = 0; i < 12 ; i++) {
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


/* Drawing the Bullet that go on the top of the canvas */

function drawBullet() {
    for( let i = 0; i < 1; i++) {
        ctx.beginPath()
        ctx.fillStyle = "black";
        ctx.arc(350, 460 - (i * 40), 5, 0, 2 * Math.PI, true)
        ctx.stroke();
        ctx.fill();
    }
}

/* The event listeners that move the ship */

document.onkeydown = function(e) {

    if (e.keyCode === 37){
        deltaX-=5;
        console.log(deltaX)
    }
    else if (e.keyCode === 39){
        deltaX+=5;
        console.log(deltaX)
    } else if(e.keyCode === 32) {
        console.log("true")
        drawBullet()
    }
}   




    start.addEventListener("click", main)
    stop.addEventListener("click", stopGame) 


