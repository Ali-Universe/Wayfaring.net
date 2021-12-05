"use strict";
setTimeout( () => {
   document.getElementById('preloder').style.display = 'none';
   document.getElementById('preloder').style.transition = 'all 0.5s';
   document.getElementById('preloder').style.transitionDuration = '1s';
 }, 5000
 )

   document.getElementById('main-page').style.display = 'none'
   document.getElementById('main-page').style.transition = 'all 0.5s'
   document.getElementById('main-page').style.transitionDuration = '1s'

 setTimeout( () => {
   document.getElementById('main-page').style.display = 'block';
   document.getElementById('main-page').style.transition = 'all 0.5s';
   document.getElementById('main-page').style.transitionDuration = '1s';
 }, 5000
 )
 let btn = document.getElementById('button')
 btn.addEventListener('click', () =>{
   document.getElementById('preloder').style.display = 'none';
   document.getElementById('main-page').style.display = 'block';
 })