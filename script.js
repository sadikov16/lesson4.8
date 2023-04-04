const clock24 = document.getElementById('clock24')

function concatZero(timeFrame) {
  return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame
}

function realTime() {
  let date = new Date()
  let sec = date.getSeconds()
  let mon = date.getMinutes()
  let hr = date.getHours()

  clock24.textContent = `${concatZero(hr)} : ${concatZero(mon)} : ${concatZero(sec)}`
}

setInterval(realTime, 1000) 
