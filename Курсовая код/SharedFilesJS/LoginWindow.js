function scriptInclude() {
  const js = document.createElement("script");
  js.type = "text/javascript";
  js.src = "../SharedFilesJS/Register.js";
  document.body.appendChild(js);
}




[...document.querySelectorAll('button')].forEach((el)=> {
  el.addEventListener('click', (event) => {
    console.log("butt")
    event.preventDefault();
    
    document.body.insertAdjacentHTML("beforeend",` <section id="registerWindowSection" data-modal="reg"> 
    <h1>Войти</h1> <article class="artRegister"> <input id="registerLogo" type="text" minlength="5" placeholder="Ник"> <input id="registerPassword" type="password" minlength="6" placeholder="Пароль"> </article> <article class="artRegister2"> <button id="openButtonRegister"> Войти </button> <button id="registerButton"> Регестрироваться </button> <a class = "revers" href = "../Revers/ReversList.html">Забыл пароль</a> </article> <button id ="svg"> </button>  </section>`)
    
    
    document.body.insertAdjacentHTML("beforeend",`<section id = "overley"></section>`)
    
    document.body.style.height = "100vh"
    document.body.style.overflowY = "hidden"
    
    
    let section = document.getElementById("registerWindowSection")
    section.style.display = "block"
    
    let owerley = document.getElementById("overley")
    owerley.style.display = "block"
    
    let ext = document.getElementById("svg")

    scriptInclude()



    ext.addEventListener('click', () => {
      let section = document.getElementById("registerWindowSection")
    section.style.display = "none"
    
    let owerley = document.getElementById("overley")
    owerley.style.display = "none"
    
    document.body.style.height = "0"
    document.body.style.overflowY = "scroll"
    
    section.remove()
    owerley.remove()
    js.remove()
    
    })


    
    })
})
