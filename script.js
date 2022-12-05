let button = document.getElementById("butt");
let words = document.getElementById("me");
let delve = document.getElementById("secondhalf");
let details = () =>{
    words.style.display ="block";
    button.style.display = "none";
    delve.style.display = "block";
    
}
button.onclick = details;



let photo = document.getElementById("akeem");
let round = () =>{
    photo.style.borderRadius = "50%";
    
};

let square = () =>{
    photo.style.borderRadius = "0";
    
};


photo.addEventListener("mouseover", round);
/*photo.addEventListener("mouseout", square);*/

var x = window.matchMedia(("(max-width = 1400px)"));

function myfunction(x){
    if (x.matches){
        delve.style.display = "none";
    }
    else{
        delve.style.display = "block";
    }
};

myfunction(x);
x.addListener( myfunction);