res = document.querySelector('.menu');
pare=document.getElementById('section');
img=document.querySelector('.menu');

// pare = document.querySelector('.p');
res.onclick = function(){
    nav = document.querySelector('.nav')
    pare.classList.toggle('activee')
    nav.classList.toggle('active')
    img.classList.toggle('active')
  


    

}

