

function draw() {
  var elem = document.getElementById("myAnimation");
  var canvas = document.createElement("canvas");
  canvas.id = "mycanvas";
  document.body.appendChild(canvas);
  var ctx = canvas.getContext("2d");
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  document.getElementById('myContainer').removeAttribute("onclick");

  document.addEventListener("mousedown", mousedownHandler);
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
  var rightPressed = false;
  var leftPressed = false;
  var mouseisDown = false;
  var paddleX = (canvas.width-75)/2;
  var mouseX = 0;
  var ballRadius = 10;

  var dx = 2;
var dy = -2;

  function mousedownHandler(e){

    mouseisDown = true;
    mouseX = e.clientX;
  

  }

  function keyDownHandler(e) {
      if(e.key == "Right" || e.key == "ArrowRight") {
          rightPressed = true;
      }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
          leftPressed = true;
      }
  }

  function keyUpHandler(e) {
      if(e.key == "Right" || e.key == "ArrowRight") {
          rightPressed = false;
      }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
          leftPressed = false;
      }
  }


  var pos = 0;
  var direction = true;

  var x = canvas.width/2;
  var y = 0 + ballRadius;
  function drawPaddle() {
      //ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.rect(paddleX, 100, 75, 10);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
  }

  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#009533";
    ctx.fill();
    ctx.closePath();
  }


  function frame() {

    document.getElementById("clicktxt").innerHTML = "click to move the paddle!";

      //paddle stuff
    if (mouseisDown){
        paddleX = mouseX;
    }

    if(rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - 75;
        }
    }
    else if(leftPressed) {
        paddleX -= 7;
        if (paddleX < 0){
            paddleX = 0;
        }
    }
ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy < ballRadius) {
    dy = -dy;
  }
  else if(y + dy > canvas.height) {
    if(x > paddleX && x < paddleX + 20) {
      dy = -dy;
    }
  
      else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 3;
        dy = -3;
  
    }
  }
    y += dy;
    x += dx;
    

    //square stuff      
    if (pos < (screen.width - 50) && direction == true){

        pos ++;


        elem.style.left = pos + 'px';
      }
        else{
          pos --;
          direction = false;
          elem.style.left = pos + 'px';


        }

      if (pos == 0 & direction == false){
        direction = true;
      }





  }
  setInterval(frame,3);

}
