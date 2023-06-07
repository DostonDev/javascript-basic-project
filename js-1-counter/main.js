let countValue = document.getElementById('count')
let decBtn = document.getElementById('dec')
let incBt = document.getElementById('inc')
let resetBtn = document.getElementById('reset')

let counter = 0

incBt.addEventListener('click', function(){
  counter++
  countValue.innerHTML = counter
})

decBtn.addEventListener('click', function(){
  counter--
  countValue.innerHTML = counter
})

resetBtn.addEventListener('click', function(){
  counter = 0
  countValue.innerHTML = counter
})


