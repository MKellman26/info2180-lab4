"use strict";

window.onload = function(){
    var search_button = document.getElementsByTagName("button")[0];

    search_button.addEventListener("click", function(e){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
             if (this.readyState == 4 && this.status == 200) {
               alert(this.responseText);
             }
        };
        xhttp.open("GET", "superheroes.php", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send();
    });
}