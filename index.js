const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const slide3 = document.getElementById('slide3');

slide2.style.display = 'none';
slide3.style.display = 'none';

// var slide = [slide1,slide2,slide3];
// for(var i=0;i<slide.length; i++){
//     console.log(slide[i])
// }
var count = slide3;

function backslide(){
    
    slide1.style.display = 'none';
    slide2.style.display = 'none';
    slide3.style.display = 'none';
    count.style.display = 'block';
    if(count == slide3){
        count = slide2;
    }
    else if (count == slide2) {
        count = slide1;        
    }
    else if (count == slide1) {
        count = slide3;        
    }

}

var count2 = slide2;

function forwardslide(){
    
    slide1.style.display = 'none';
    slide2.style.display = 'none';
    slide3.style.display = 'none';
    count2.style.display = 'block';
    if(count2 == slide3){
        count2 = slide1;
    }
    else if (count2 == slide2) {
        count2 = slide3;        
    }
    else if (count2 == slide1) {
        count2 = slide2;        
    }

}
