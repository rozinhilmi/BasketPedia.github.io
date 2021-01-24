var slide1 = document.getElementById("slide1")
var slide2 = document.getElementById("slide2")
var slide3 = document.getElementById("slide3")
var slide4 = document.getElementById("slide4")
var slide5 = document.getElementById("slide5")
var slide6 = document.getElementById("slide6")
var slide6 = document.getElementById("slide6")
var slide7 = "none";
var slide0 = document.getElementById("slide1")

slide1.style.display = "block"
slide2.style.display = "none"
slide3.style.display = "none"
slide4.style.display = "none"
slide5.style.display = "none"
slide6.style.display = "none"
var slides = [slide0,slide1,slide2,slide3,slide4,slide5,slide6,slide7];

nowSlide = slide1

function leftButton(){
    if (nowSlide == slide1){
        nowSlide = slide7;
    }
    for (var i=1;i<slides.length;i++){
        
        if (nowSlide == slides[i]){
            slides[i-1].style.display = "block";
            nowSlide = slides[i-1];
            slides[i].style.display = "none";
        }else{
            slides[i].style.display = "none";
        }
    }
}

function rightButton(){
    if (nowSlide == slide6){
        nowSlide = slides[1]
        
    }
    for (var i=6;i>0;i--){
        
        if (nowSlide == slides[i]){
            slides[i].style.display = "none";
            slides[i+1].style.display = "block"
            nowSlide = slides[i+1]
        }
        else{
            slides[i].style.display = "none";
        }
        
    }
}