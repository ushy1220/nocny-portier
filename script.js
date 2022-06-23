'use strict'

let hookers = document.querySelectorAll('.hooker');
let tables = document.querySelectorAll('.table');
let zmiana = document.querySelectorAll('.btn');

const downstairs = document.querySelectorAll('.downstairs');

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

document.getElementById('btn').addEventListener("click", function() {
    console.log("button was clicked");
    if(document.querySelector('.downstairs').style.display == "none"){
        document.querySelector('.downstairs').style.display = "flex";
        document.querySelector('.first-floor').style.display = "none";
    } else {
        document.querySelector('.downstairs').style.display = "none";
        document.querySelector('.first-floor').style.display = "flex";
    }
});
