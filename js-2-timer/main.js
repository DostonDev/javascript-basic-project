let timerValue = document.getElementById('timer')
let stopBtn = document.getElementById('stop')
let startBtn = document.getElementById('start')
let resetBtn = document.getElementById('reset')

let timer = null
let hour = 0
let min = 0
let second = 0

function watch(){
  second++
  if(second == 60){
    second = 0
    min++
    if(min == 60){
      min = 0
      hour++
    }
  }
  let h = hour<10 ? ("0" + hour):hour
  let m = min<10 ? ("0" + min):min
  let s = second<10 ? ("0" + second):second
  timerValue.innerHTML = h + ":" + m + ":" + s
}

startBtn.addEventListener('click',function(){
  if(timer!=null){
    clearInterval(timer)
  }
  timer = setInterval(watch,1000)
})

stopBtn.addEventListener('click',function(){
  clearInterval(timer)
})

resetBtn.addEventListener('click',function(){
  clearInterval(timer)
  hour = 0
  min = 0
  second = 0
  timerValue.innerHTML = "00:00:00"
})