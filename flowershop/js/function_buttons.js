function items(meniu) {
    var i;
    var x = document.getElementsByClassName("meniu");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    document.getElementById(meniu).style.display = "block";  
}