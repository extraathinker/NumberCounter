var increasebtn = document.getElementById('increasebtn');
var decreasebtn = document.getElementById('decreasebtn');
var resetbtn = document.getElementById('resetbtn');
var counter = document.getElementById('counter');

increasebtn.addEventListener('click',function(){
    counter.innerHTML++;
})
decreasebtn.addEventListener('click',function(){
    counter.innerHTML--;
})
resetbtn.addEventListener('click',function(){
    counter.innerHTML = 0;
})