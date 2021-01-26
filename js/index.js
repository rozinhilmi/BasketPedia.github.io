var slide = 1;
var isClick = false;

function leftButton(){
    var background = document.getElementById('slider');
    if (slide == 1){
        background.style.backgroundImage = "url('images/slide6.jpg')";
        slide=6;
    }
    else if (slide == 6){
        background.style.backgroundImage = "url('images/slide5.jpg')";
        slide--;
    }
    else if (slide == 5){
        background.style.backgroundImage = "url('images/slide4.jpg')";
        slide--;
    }
    else if (slide == 4){
        background.style.backgroundImage = "url('images/slide3.jpg')";
        slide--;
    }
    else if (slide == 3){
        background.style.backgroundImage = "url('images/slide2.jpg')";
        slide--;
    }
    else if (slide == 2){
        background.style.backgroundImage = "url('images/slide1.jpg')";
        slide--;
    }
}

function rightButton(){
    var background = document.getElementById('slider');
    if (slide == 6){
        background.style.backgroundImage = "url('images/slide1.jpg')";
        slide=1;
    }
    else if (slide == 1){
        background.style.backgroundImage = "url('images/slide2.jpg')";
        slide++;
    }
    else if (slide == 2){
        background.style.backgroundImage = "url('images/slide3.jpg')";
        slide++;
    }
    else if (slide == 3){
        background.style.backgroundImage = "url('images/slide4.jpg')";
        slide++;
    }
    else if (slide == 4){
        background.style.backgroundImage = "url('images/slide5.jpg')";
        slide++;
    }
    else if (slide == 5){
        background.style.backgroundImage = "url('images/slide6.jpg')";
        slide++;
    }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
