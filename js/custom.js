

function draw() {
  var elem = document.getElementById("myAnimation");

  var jumbotron = document.getElementById("jumbotron");
  var canvas = document.createElement("canvas");
  canvas.id = "mycanvas";
  document.body.appendChild(canvas);
  var ctx = canvas.getContext("2d");
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = 200;
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
  var paddleWidth = 100;
  var x = 10;
  var y = 10;

  var paddlehit = false;
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

  function collision(){

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    else if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
       if (x < pos - 25 && x > pos + 25){
          paddlehit = false;
      }
    }
    else if (x >= paddleX && x < paddleX + paddleWidth  && x != 0 && y != 0 && dy > 0) {
      if (y = 100) {
        dy = -dy;
        paddlehit = true;
  
      }
    }


    if (paddlehit == true){
        jumbotron.style.background = "#337ab7";

    }


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
    

    //ball stuff
    collision();


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
  setInterval(frame,10);

}
