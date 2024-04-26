document.addEventListener("DOMContentLoaded", () => {
  let num = 0
  if(localStorage.getItem('visits')) {
    num = localStorage.getItem('visits')
    delete localStorage.visits
  }
  num++;
  localStorage.setItem("visits", num)
})