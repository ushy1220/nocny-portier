'use strict'

let hooker = document.querySelector('.hooker1');
var table = document.getElementById('table7');

hooker.addEventListener("click", function(){
    document.getElementById('hooker1').className.add("hooker1-red");
})

table = addEventListener('click', function(){
    document.getElementById('table7').className = "table7-red";
})