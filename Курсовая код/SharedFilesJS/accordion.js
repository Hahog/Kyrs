document.getElementById('inksContacts').addEventListener('click',() => {
    if(!document.getElementById("contactsSection")) {
      document.getElementById('inksContacts').style.color = "#2D0FF2"
      document.getElementById('inksContacts').style.textShadow = "#2D0FF2 0px 1px 1px"
      let section = document.createElement('section')
      section.id = "contactsSection"
      section.className = "contactsSection"
      section.style.animationName = "accordion"
      document.getElementById("contacts").insertAdjacentElement("beforeend", section)
      let p1 = document.createElement('p')
      let p2 = document.createElement('p')
      p1.textContent = "+7-996-769-8572"
      p2.textContent = "z_kiselyov@bk.ru"
      document.getElementById("contactsSection").insertAdjacentElement("beforeend", p1)
      document.getElementById("contactsSection").insertAdjacentElement("beforeend", p2)
    } else if(document.getElementById("contactsSection")) {
      document.getElementById("contactsSection").style.animationName = "removeAccordion"
      setTimeout(() => {
        document.getElementById("contactsSection").remove()
        document.getElementById('inksContacts').style.color = "#084259"
        document.getElementById('inksContacts').style.textShadow = "none"
      },1100)
      
    }
  })