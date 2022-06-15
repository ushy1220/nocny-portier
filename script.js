'use strict'

let hookers = document.querySelectorAll('.hooker');
let tables = document.querySelectorAll('.table');

hookers.forEach((item) => 
    item.addEventListener("click", function(){
        if(this.className == "hooker1-red"){
            this.className = "hooker";
        } else {
            this.className = "hooker1-red";
        }
        
    }));

tables.forEach((item) =>
    item.addEventListener("click", function(){
        if(this.style.backgroundColor == "red"){
            this.style.backgroundColor = "green";
        } else {
            this.style.backgroundColor = "red";
        }
    }));