"use strict";

window.onload = function(){
    var search_button = document.getElementsByTagName("button")[0];

    search_button.addEventListener("click", function(e){

        const charac = document.getElementsByTagName("input")[0];
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
             if (this.readyState == 4 && this.status == 200) {
               document.getElementById("result").innerHTML = this.responseText;
             }
        };
        xhttp.open("POST", "superheroes.php");
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("query=" + String(charac.value));
    });
}