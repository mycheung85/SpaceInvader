var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let x=canvas.width/2
let deltaX=0;


function drawShip(){
    ctx.clearRect(0, 0, 700, 500)
    ctx.fillStyle="#FF0000";
    ctx.fillRect(x-25+deltaX,450,50,30);
    drawAlien();
    drawBullet();
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

function drawBullet() {
    ctx.fillStyle = "black";
    ctx.arc(350, 460, 5, 0, 2 * Math.PI, true)
    ctx.stroke();
}



document.onkeydown = function(e){
    if (e.keyCode === 37){
        deltaX-=5;
        console.log(deltaX)
    
        drawShip()

    }
    else if (e.keyCode === 39){
        deltaX+=5;
        console.log(deltaX)
            drawShip()
        
    }}


    let intervalID = setInterval(drawAlien(), 1000)


    drawShip();


