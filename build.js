 function BuildCreatorLight(){
    const wrapp_chose_v2 = document.createElement("div")
    wrapp_chose_v2.classList.add("wrapp_chose_v2")
        const wrappForPhoto = document.createElement("div")
        wrappForPhoto.classList.add("wrappForPhoto")
            const temperature = document.createElement("div")
            temperature.classList.add("temperature")
            const brightness = document.createElement("img")
            brightness.classList.add("brightness")
            brightness.src = "https://onled.pl/userdata/public/gfx/2210/Lampa-ECO-czarna-wizualizacja.jpg"
        wrappForPhoto.appendChild(temperature)  
        wrappForPhoto.appendChild(brightness)  

        const range1 = document.createElement("div")
        range1.classList.add("range")
            const p1 = document.createElement("p")
            p1.innerText = "CIEPŁA"
            const p2 = document.createElement("p")
            p2.innerText = "NEUTRALNA"
            const p3 = document.createElement("p")
            p3.innerText = "ZIMNA"
        range1.appendChild(p1)
        range1.appendChild(p2)
        range1.appendChild(p3)

        const inp1 = document.createElement("input")
        inp1.type = "range"
        inp1.min = "-0.050"
        inp1.max = "0.050"
        inp1.step = "0.001"
        inp1.value ="0"
        inp1.classList.add("rangeInp")

        const label1 = document.createElement("label")
        label1.innerText = "Barwa Światła"

        const range2 = document.createElement("div")
        range2.classList.add("range")
            const pa1 = document.createElement("p")
            pa1.innerText = "SŁABA"
            const pa2 = document.createElement("p")
            pa2.innerText = "MOCNA"
        range2.appendChild(pa1)
        range2.appendChild(pa2)

        const inp2 = document.createElement("input")
        inp2.type = "range"
        inp2.min = "80"
        inp2.max = "120"
        inp2.step = "1"
        inp2.value ="100"
        inp2.classList.add("rangeInp")

        const label2 = document.createElement("label")
        label2.innerText = "Jasność"
    wrapp_chose_v2.appendChild(wrappForPhoto)
    wrapp_chose_v2.appendChild(range1)
    wrapp_chose_v2.appendChild(inp1)
    wrapp_chose_v2.appendChild(label1)
    wrapp_chose_v2.appendChild(range2)
    wrapp_chose_v2.appendChild(inp2)
    wrapp_chose_v2.appendChild(label2)

    return wrapp_chose_v2
}

 function buildDecide(){
    const wrappDecide = document.createElement("div")
    wrappDecide.classList.add("wrappDecide")
        const p = document.createElement("p")
        p.innerText="Czy chcesz dodać żarówki do zestawu?"
        const but1 = document.createElement("button")
        but1.classList.add("btn")
        but1.innerText = "TAK"
        const but2 = document.createElement("button")
        but2.classList.add("btn")
        but2.innerText = "NIE"
    wrappDecide.appendChild(p)
    wrappDecide.appendChild(but1)
    wrappDecide.appendChild(but2)
    return wrappDecide
}

 function askAboutBulbs(){
    clearScene()
    const decide = buildDecide()
    const btn = decide.querySelectorAll("button")
    btn[0].addEventListener("click", bubleCreator)
    btn[1].addEventListener("click", nextPage)
    document.querySelector(".app").appendChild( buildWrappStruct() )
    document.querySelector(".app .wrapp").appendChild( decide )
}

 function bubleCreator(){
    resetStruct(buildBasicStruct())
    const wrapp = document.querySelector(".app .wrapp")
    const chose = wrapp.querySelector(".wrapp_chose")
    wrapp.replaceChild(chose, BuildCreatorLight())
}