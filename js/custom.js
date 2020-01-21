

function myMove() {
  var elem = document.getElementById("myAnimation");
  document.getElementById('myContainer').removeAttribute("onclick");
  var pos = 0;
  var id = setInterval(frame, 5);
  var direction = true;
  function frame() {
      
      if (pos < 333 && direction == true){

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
}
