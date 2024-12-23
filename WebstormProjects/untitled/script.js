const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const p = document.querySelector('p');
let count = 0;


increase.addEventListener('click' ,function(){
  console.log("btn was clicked")
    count++;
  p.textContent = count

})
decrease.addEventListener('click' ,function(){
  console.log("btn was clicked")
    count--;
  p.textContent = count

})