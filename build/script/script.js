/*function for widget slider*/
var index = 1;
    viewSlide(index);

function firstPosition(n){
    viewSlide(index = n);
}

function addSlide(n){
    viewSlide(index += n);
}

function viewSlide(n){
    var i;
    var slides = document.getElementsByClassName("content");

    if (n > slides.length){
        index = 1
    }
    
    if (n < 1){
        index = slides.length
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[index-1].style.display = "block";
    }
}

/*menu navigation bar for mobile*/
function openNav() {
    document.getElementById("open").style.display = "none";
    console.log("open");
    document.getElementById("nav").style.width = "100%";
}

function closeNav() {
    document.getElementById("nav").style.width = "0";
    document.getElementById("open").style.display = "block";
}