const second = 1000;

var canvas;
var canvasContext;

var posX = 0;
var posY = 30;
var changeX = 15;
var changeY = 0;
var objectWidth = 15;
var objectHeight = 15;
window.onload = function(){
    canvas = document.getElementById('game_canvas');
    canvasContext = canvas.getContext('2d');
    drawMaze();
    var fps = 15;
    setInterval(drawMovement, second/fps);
}

function drawMaze() {
     canvasContext.fillStyle = "black";
     canvasContext.fillRect(0,0,canvas.width, canvas.height);
     canvasContext.fillRect(0,0,canvas.width, 25);
     canvasContext.fillRect(0,100, canvas.width/2, 25)
     canvasContext.fillRect(canvas.width/2 + 100,100, canvas.width/2, 25)
}

function restart() {
    posX = 15;
    posY = 30;
    changeX = 15;
    changeY = 0;  
}

function drawMovement() {
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(0,0,canvas.width, canvas.height);
    levelOne();
    canvasContext.fillStyle = "lightblue";
    canvasContext.fillRect(posX, posY, objectWidth, objectHeight);
    posX += changeX;
    posY += changeY
    if (posY >= canvas.height - 90 && posY <= canvas.height - 30) {
        if (posX > canvas.width) {
            alert("You win");
            restart();
        }
    }
    else if (posX < 15 || posX > canvas.width - 30 || posY < 15 || posY > canvas.height - 30) {
        restart();
    }
    canvasContext.fillStyle = "blue";
    canvasContext.fillRect(posX, posY, objectWidth, objectHeight);
}

function levelOne() {
    canvasContext.fillStyle = "lightgrey";
    canvasContext.fillRect(0,0, canvas.width, 15);
    canvasContext.fillRect(0,60, 15, canvas.height-60);
    canvasContext.fillRect(0, canvas.height-15, canvas.width, 15);
    canvasContext.fillRect(canvas.width-15, 0, 15, canvas.height-60);  
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37){
        changeX = -15;
        changeY = 0;
    }
    if(event.keyCode == 38){
        changeX = 0;
        changeY = -15;
    }
    if(event.keyCode == 39){
        changeX = 15;
        changeY = 0;
    }
    if(event.keyCode == 40){
        changeX = 0;
        changeY = 15;
    }   
});                         
