const main = document.querySelector("#main"),
  data = [
    {
      isDisplay: true,
      tags: ["free", "origin"],
      src: "foto/Games1.png",
      id:0,
      show: "active"
    },
    {
      isDisplay: true,
      tags: ["rtx", "steam"],
      src: "foto/Games2.png",
      id:1,
      show: "active"
    },
    {
      isDisplay: true,
      tags: ["voiceover", "gog"],
      src: "foto/Games3.png",
      id:2,
      show: "active"
    },
  ];


function show(data) {
  const a = document.createElement("a");
    a.href = "../GamePages/GamePages.html"
    a.id = data.id
  main.insertAdjacentElement("beforeend", a);
  const img = document.createElement("img");
    img.classList.add("imgGames");
    img.dataset.tags = data.tags.join(" ");
    img.id = data.id
    img.src = data.src;
  document.getElementById(`${data.id}`).insertAdjacentElement("beforeend", img)
}

function active(data) {
  let num = data.length
  data.map((el) => {
    if(el.isDisplay) {
      num --
    }
  })
  if(num === data.length) {
    data.map(el => show(el))
  }
  
}



data.map((item) => {
  show(item);
});



const checkedInput = () => [...document.forms.categories.getElementsByTagName("input")].filter(el => el.checked === true).map(el => el.value);
[...document.querySelectorAll(".imgGames")].map(el => {
  el.addEventListener("click", () => {
    data.map((element) => {
      if(el.id == element.id) {
        localStorage.setItem("Game", JSON.stringify(el.id))
      }
    })
  })
});


[...document.forms.categories.getElementsByTagName("input")].map((el) => {
    el.addEventListener('change', () => {
        const tags = checkedInput();

        main.innerHTML = "";
        data.map( el => {el.isDisplay = false; el.show = "none"})

        data.map((el) => {
            for (let tag of tags) {
                if (el.tags.includes(tag)) {
                    el.isDisplay = true;
                    el.show = "active"
                    show(el)
                }           
            }
        })
        active(data);
        [...document.querySelectorAll(".imgGames")].map(el => {
          el.addEventListener("click", () => {
            data.map((element) => {
              if(el.id == element.id) {
                localStorage.setItem("Game", JSON.stringify(el.id))
              }
            })
          })
        });
    });
    
});

