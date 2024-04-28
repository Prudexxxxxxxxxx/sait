document.querySelector('body').addEventListener('click', function(e){
if(e.target.className != 'close')return
 let sectionn =  document.querySelectorAll('.section')
 for(let item of sectionn){
    item.style.display = 'none'
 }
 if( e.target.id == 'menu1'){
    let menu1 = document.getElementById('section1')
    menu1.style.display = 'block'
 }
 if( e.target.id == 'menu2'){
    let menu2 = document.getElementById('section2')
    menu2.style.display = 'block'
 }

 if( e.target.id == 'menu3'){
    let menu3 = document.getElementById('section3')
    menu3.style.display = 'block'
 }

 if( e.target.id == 'menu4'){
    let menu4 = document.getElementById('section4')
    menu4.style.display = 'block'
 }

 if( e.target.id == 'menu5'){
    let menu5 = document.getElementById('section5')
    menu5.style.display = 'block'
 }



})