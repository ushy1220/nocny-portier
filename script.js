'use strict'

var hooker = document.querySelector('.hooker');
var table = document.getElementsByClassName('table');

hooker.addEventListener("click", function(){
    document.querySelector('.hooker').className = "red"
})