const currentTime = () => {
  const time = document.querySelector('h1')

  let date = new Date()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()

  // Updating hour, minute, and second
  // if they are less than 10
  h = update(h);
  m = update(m);
  s = update(s);

  time.innerHTML = h + " : " + m + " : " + s
}
currentTime()
setInterval(currentTime, 1000)

function update(t) {
  if (t < 10) {
    return "0" + t;
  }
  else {
    return t;
  }
}