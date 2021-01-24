function filter(arg,arg2){
    const fish = document.getElementsByClassName('box-item');

    const arr = ['a.ctg-all','a.ctg-bluefish','a.ctg-redfish','a.ctg-redandbluefish','a.ctg-yellowfish'];
    for(var i=0; i<arr.length; i++){
        if (arr[i] == arg2){
            document.querySelector(arr[i]).style.backgroundColor = "rgb(255, 178, 34)";
            document.querySelector(arr[i]).style.color = "white";
            document.querySelector(arr[i]).style.borderRadius = "20px";
            document.querySelector(arr[i]).style.userSelect = "none";
        }
        else{
            
            document.querySelector(arr[i]).style.backgroundColor = "white";
            document.querySelector(arr[i]).style.color = "rgb(44, 44, 44)";
            document.querySelector(arr[i]).style.borderRadius = "20px";
            document.querySelector(arr[i]).style.userSelect = "none";
            // document.querySelector(arr[i]).onmousehover = function(){
            //     this.style.backgroundColor = "grey";
            //     this.style.color = "white";
            //     this.style.borderRadius = "20px";
            // }
        }
    }
    if (arg != 'all') {
        document.querySelector('.container').style.height = "1200px";
        for(var i=0; i<fish.length; i++){
            if(fish[i].classList[1] != arg){
                fish[i].style.display = 'none';
            }
            else{
                fish[i].style.display = 'block';
            }
        }
    }
    else{
        document.querySelector('.container').style.height = "auto";
        for(var i=0; i<fish.length; i++){
            fish[i].style.display = 'block';
        }
    }
}
const li = document.querySelector('section.kategori ul li')
