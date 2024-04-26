const data = [
    {
        logoText: "The Wild Eight",
        imgLogo: "foto/imgLogo.jpg",
        logoP: "The Wild Eight (Зе Вилд Еигхт) — новая игра в жанре РПГ, где тебе предстоит выживать в максимально опасных условиях. Ты перенесется в дикие места Аляски, где и будешь делать все возможное, чтобы сохранить себе жизнь. Вокруг холод и мороз пробирает до дрожи, а это говорит о том, что твоим главным врагом будет сама природа. Но холод и голод — это не самое страшное, мир приготовил для тебя кое-что поинтереснее. Ты попадешь в заброшенные лаборатории и бункеры, которые таят в себе множество жутких тайн и кровожадный созданий, способных в два счета лишить тебя жизни. История расскажет тебе о команде исследователей, самолёт которых потерпел крушение в лесах Аляски. Вокруг никого, а вам нужно найти способ обратится за помощью. Создай своего главного героя и отправляйся в опасное путешествие. Не забывай запастись оружием, ведь оно может тебе пригодится в очередной схватке с яростным противником.",
        videoTriler: "https://www.youtube.com/watch?v=REpXw679XsI",
        imgFoto: ["foto/foto1.jpeg","foto/foto2.jpg","foto/foto3.jpg","foto/foto4.jpg","foto/foto5.jpg","foto/foto6.jpg","foto/foto7.jpg"],
        sistemRequirements: [`ОС *: Windows 7 or higher 64bit

        
        Процессор: Intel Core i5-2400 @ 3.1 GHz or AMD FX-6300 @ 3.5 GHz or equivalent


        Оперативная память: 6 GB ОЗУ


        Видеокарта: NVIDIA GeForce GTX 670 or analogue with 2GB VRAM


        Место на диске: 2 GB`,""]
    },
    {
        logoText: "",
        imgLogo: "",
        videoTriler: "",
        imgFoto: "",
        sistemRequirements: ["",""]
    },
    {
        logoText: "",
        imgLogo: "",
        videoTriler: "",
        imgFoto: "",
        sistemRequirements: ["",""]
    },
]

const id = JSON.parse(localStorage.getItem("Game"))
document.addEventListener("DOMContentLoaded", () => {
    let dataObject = data[id]
    document.getElementById("h1").innerText = dataObject.logoText
    document.getElementById("logoImg").src = dataObject.imgLogo
    document.getElementById("logoText").innerText = dataObject.logoP
    document.getElementById("trebPMin").innerText = dataObject.sistemRequirements[0]
    if(dataObject.sistemRequirements[1]){
        document.getElementById("trebPMax").innerText = dataObject.sistemRequirements[1]
    } else {
        document.getElementById("trebPMax").innerText = "Не уточняется"
    }
    document.getElementById("Triler").href = dataObject.videoTriler
    document.getElementById("img1").src = dataObject.imgFoto[0]
    document.getElementById("img2").src = dataObject.imgFoto[1]
    document.getElementById("img3").src = dataObject.imgFoto[2]
    document.getElementById("img4").src = dataObject.imgFoto[3]
    document.getElementById("img5").src = dataObject.imgFoto[4]
    document.getElementById("img6").src = dataObject.imgFoto[5]
    document.getElementById("img7").src = dataObject.imgFoto[6]
})


let  a = 1,
     b = 2;
let imgOnePosition = 700;
let imgTwoPosition = 1000;
window.addEventListener("scroll", () => {
    const scrollPosition =  document.documentElement.scrollTop
    
        if(scrollPosition > imgOnePosition && scrollPosition < imgTwoPosition) {
            document.getElementById(`img${a}`).style.animationName = `img${a}`
            imgOnePosition += 600
            if(document.getElementById(`img${a}`).style.animationName == `img${a}`) {
                a += 2
            }
        } 
        
         if(scrollPosition < imgOnePosition && scrollPosition > imgTwoPosition) {
            document.getElementById(`img${b}`).style.animationName = `img${b}`
            imgTwoPosition += 600
            if(document.getElementById(`img${b}`).style.animationName == `img${b}`) {
                b += 2
            } 
        } 
});

let imgArray = []
imgArray.push(...document.querySelectorAll(".img1"));
imgArray.push(...document.querySelectorAll(".img2"));
console.log(imgArray);
[...imgArray].map((el) => {
    el.addEventListener("click", (event) => {
        event.preventDefault();
        if(document.getElementById("imgDialog")) {
            document.getElementById("imgDialog").remove()
        }
        document.getElementById("img").insertAdjacentHTML("beforeend", `<dialog id = "imgDialog"></dialog>`)
        document.getElementById("imgDialog").style.backgroundImage = `url(${el.src})`
        document.getElementById("imgDialog").toggleAttribute("open")
        document.body.style.height = "100vh"
        document.body.style.overflowY = "hidden"
    })
    document.addEventListener("keydown", (event) => {
        if(event.key == "Escape") {
            document.getElementById("imgDialog").remove()
            document.body.style.overflowY = "scroll"
        }
    })
})