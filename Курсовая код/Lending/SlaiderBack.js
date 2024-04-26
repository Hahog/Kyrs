
const backroundArray = ["foto/fon1.png","foto/fon5.png","foto/fon6.png"],
      elipsArray = ['elips1','elips2','elips3' ];

let counter = 0,
   section = document.getElementsByClassName("main_section_one")[0];

section.style.background = "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(foto/fon1.png) ";
document.getElementById('elips1').style.backgroundColor = "#2D0FF2"

setInterval(() => {
  if(counter > 2) {
    document.getElementById(elipsArray[counter - 1 ]).style.backgroundColor = "white"
    counter = 0;
  }
  if(counter > 0 && counter <= 2 ) {
    document.getElementById(elipsArray[counter-1]).style.backgroundColor = "white"
  }
  document.getElementById(elipsArray[counter]).style.backgroundColor = "#2D0FF2"
  section.style.background = `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${backroundArray[counter]}) `;
  counter++;

}, 10000)






let gamesImg = ['foto/games1.png','foto/games2.png','foto/games3.png','foto/games4.png','foto/games5.png','foto/games6.png','foto/games7.png','foto/games8.png','foto/games9.png','foto/games10.png','foto/games11.png','foto/games12.png', ]
let c = 0,
    num = [2,7,4,1,8,3,9,11,5,0,10,6]

document.getElementById('games1').src = gamesImg[0]
document.getElementById('games2').src = gamesImg[1]
document.getElementById('games3').src = gamesImg[2]
document.getElementById('games4').src = gamesImg[3]

setInterval(()=>{
  let randomNumber1 =  Math.floor(Math.random() * 12),
  randomNumber2 =  Math.floor(Math.random() * 12),
  randomNumber3 =  Math.floor(Math.random() * 12),
  randomNumber4 =  Math.floor(Math.random() * 12); 

  document.getElementById('games1').src = gamesImg[randomNumber1]
  document.getElementById('games2').src = gamesImg[randomNumber2]
  document.getElementById('games3').src = gamesImg[randomNumber3]
  document.getElementById('games4').src = gamesImg[randomNumber4]
},5000)


