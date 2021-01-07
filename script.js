const endPromoDate = '29 Jan 2021'
const daysLeft = document.getElementById('days')
const hoursLeft = document.getElementById('hours')
const minsLeft = document.getElementById('mins')
const secsLeft = document.getElementById('secs')

function countdown(){
  const currentDate = new Date()
  const totalSeconds= Math.floor((new Date(endPromoDate) - currentDate) /1000)

  const days = Math.floor(totalSeconds/(3600*24))
  const hours = Math.floor(totalSeconds/3600%24)
  const mins = Math.floor(totalSeconds/60) %60
  const secs = Math.floor(totalSeconds %60) 
    

    daysLeft.innerHTML = days
    hoursLeft.innerHTML = formatTime(hours)
    minsLeft.innerHTML = formatTime(mins)
    secsLeft.innerHTML = formatTime(secs)
    
    console.log(days,hours,mins,secs)
}

function formatTime(time){
    return  time <10 ?  `0${time}` :time
}

countdown()
setInterval(countdown,1000)


