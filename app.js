/* 
1-fazowe id
lampy 62
szyny i łączniki 63

3-fazowe id
lampy 264
szyny i łączniki 275
*/
function app(){
    const answers = []
    const chose = []
    let withBtb;
    let counterTitle = 0;
    const questions = [[62, 264], ["GU10", "COB"], ["biała", "czarna"]]
    let styleToggle = true;

    class AllShapesCanvas{
        static setSizeCanva(element){
            const app = document.querySelector(".app")
            const btnWrap = app.querySelectorAll('.btn_wrapp_photo')
        element.width=btnWrap[0].offsetWidth
        element.height = btnWrap[0].offsetWidth * 0.8;
        }
        static paintLine(ctx, canv){
        ctx.beginPath();
        ctx.lineTo(canv.width/4, canv.height/2);
        ctx.lineTo(canv.width/1.30, canv.height/2);
        ctx.stroke();
        }
        static paintL(ctx, canv){
        ctx.beginPath();
        ctx.lineTo(canv.width/4, canv.height/4);
        ctx.lineTo(canv.width/4, canv.height/1.25);
        ctx.lineTo(canv.width/1.25, canv.height/1.25);
        ctx.stroke();
        }
        static paintSquare(ctx, canv){
        ctx.beginPath();
        ctx.rect(canv.width/4, canv.height/4, canv.width/2, canv.height/2);
        ctx.stroke();
        }
        static paintMark(ctx,canv){
            ctx.font = "italic bold 18px Arial";
            ctx.fillText("A", canv.width/5, canv.height/1.8);
            ctx.fillText("B", canv.width/2, canv.height/1.09);
        }
        
        static drawAllShapes(){
            const app = document.querySelector(".app")
            const btnWrap = app.querySelectorAll('.btn_wrapp_photo')
            btnWrap.forEach((btn, i)=>{
                const canv = btn.querySelector(".canv")
                const ctx = canv.getContext("2d");
                AllShapesCanvas.setSizeCanva(canv)
                switch(i){
                case 0: AllShapesCanvas.paintLine(ctx, canv)
                    break;
                case 1: AllShapesCanvas.paintL(ctx, canv)
                    break;
                case 2: AllShapesCanvas.paintSquare(ctx, canv)
                    break;
                }
            })
        }
    }

    function changeScene() {
        const title = ["Wybierz źródło światła", "Wybierz  kolor", "", "Schemat ułożenia", "", "Podsumowanie"]
        const productTitle = [["Reflektor na żarówkę", "Zintegrowane źródło światła"], ["Biała", "Czarna"], ["Kreator automatyczny", "Kreator manualny"], ["Linia prosta", "Litera L", "Czworokąt"]]
        const step = document.querySelector(".app .step");
        let photoWrap = document.querySelectorAll(".app .btn_wrapp_photo")
        let input = []
        
        switch (counterTitle) {
            case 0:
                step.innerText = title[counterTitle] ? title[counterTitle] : ''
                changeButton()
                break;
            case 1:
                step.innerText = title[counterTitle] ? title[counterTitle] : ''
                changeButton()
                break;
            case 2:
                step.innerText = title[counterTitle] ? title[counterTitle] : ''
                changeStyles(styleToggle)
                styleToggle = !styleToggle 
                changeButton()
                yourChose(answers)
                break;
            case 3:
                step.innerText = title[counterTitle] ? title[counterTitle] : ''
                changeStyles(styleToggle)
                styleToggle = !styleToggle 

                const wrapBtn = document.querySelectorAll(".app .btn_wrapp_photo")
                const img = wrapBtn[0].querySelector(".image") 
                replaceToCanvas(img)

                addButton(counterTitle)
                photoWrap = document.querySelectorAll(".app .btn_wrapp_photo")
                changeButton()
                AllShapesCanvas.drawAllShapes()
                addEventListener("resize", (e)=>{
                    AllShapesCanvas.drawAllShapes()
                })
                
                activeButton()
                //yourChose(answers)
                break;
            case 4:
                step.innerText = title[counterTitle] ? title[counterTitle] : ''
                const answer = answers[answers.length-1]
                deleteScene()
                const wrapp = document.querySelector(".app .wrapp_chose")
                createCalculationScene(wrapp, answer)
                changeStyles(styleToggle)
                styleToggle = !styleToggle
                const canv = document.querySelector(".app .wrapp_chose_v2 .canv")
                const ctx = canv.getContext("2d");

                validation()
                const inp = document.querySelectorAll('.app input')
                inp.forEach((el,i)=>{
                    el.addEventListener("change", validation)
                    el.addEventListener("change", ()=>{ // setInputValue
                        input[i] =  +el.value
                    })
                })
                switch (answer) {
                    case '0':
                        AllShapesCanvas.paintLine(ctx, canv)
                        break;
                    case '1':
                        AllShapesCanvas.paintL(ctx, canv)
                        AllShapesCanvas.paintMark(ctx,canv)
                        break;
                    case '2':
                        AllShapesCanvas.paintSquare(ctx, canv)
                        AllShapesCanvas.paintMark(ctx,canv)
                        break;
                    default:
                        alert("coś poszło nie tak")
                        break;
                }
                break;
            case 5:
                step.innerText = title[counterTitle] ? title[counterTitle] : ''
                const scene = document.querySelector(".app .wrapp_chose_v2")
                scene.remove()
                let calc = [];
                let connL = 0;
                const prevAnswer = answers[answers.length-2]
                const railInp = answers[answers.length-1]

                for(let i = 0; i < railInp.length-1; i++){
                    switch (prevAnswer) {
                        case '0':
                            calc = calculation(railInp[i], +answers[0])
                            break;
                        case '1':
                            calc[i] = calculation(railInp[i], +answers[0])
                            connL = 1
                            if(i>0){
                                const buff =[]
                                calc[0].forEach((el, j)=>{
                                    buff.push( el + (calc[1][j]) )
                                })
                                calc = buff
                            }
                            break;
                        case '2':
                            // calc[i] = calculation(railInp[i]*2)
                            const calcBufor = calculation(railInp[i], +answers[0])
                            calc[i] = calcBufor.map(el=>el*2)
                            if(i>0){
                                const buff =[]
                                calc[0].forEach((el, j)=>{
                                    buff.push( el + (calc[1][j]) )
                                })
                                calc = buff
                            }
                            connL = 3
                            break;
                        default:
                            alert("coś poszło nie tak")
                            break;
                    }
                }
                // calc1.forEach(e=> calc.push(e))
                console.log(typeof calc, calc)

                    const txt = document.createElement('p')
                    const p1 = document.createElement('p')
                    const p2 = document.createElement('p')
                    const p3 = document.createElement('p')
                    const p4 = document.createElement('p')
                    const connector = document.createElement('p')
                    const connectorL = document.createElement('p')
                    const elWrapp = document.createElement('div')
                    elWrapp.className = "wrapp_chose_v2"
                    
                    txt.innerText = "Twój zestaw szynowy"
                    p1.innerText = "Listwa szynowa 1m: " + calc[0]   
                    p2.innerText = "Listwa szynowa 1.5m: " + calc[1]
                    p3.innerText = "Listwa szynowa 2m: " + calc[2]
                    p4.innerText = "Zostaje Ci reszty: " + calc[3].toFixed(2) 
                    connector.innerText = "łączników prostych: " + calc[4]
                    connectorL.innerText = "łączników kątowych: " + connL
                    
                    elWrapp.appendChild(txt)
                    elWrapp.appendChild(p1)
                    elWrapp.appendChild(p2)
                    elWrapp.appendChild(p3)
                    elWrapp.appendChild(p4)
                    elWrapp.appendChild(connector)

                    document.querySelector(".app .wrapp_title").after(elWrapp)

                break;
            default:
                // changeStyles(styleToggle)
                // styleToggle = !styleToggle 
                // counterTitle = -1;
                // answers.length = 0
                // chose.length = 0
                break;
        }

        function calculation(inp, is3Phase){
            let railStrip2m = Math.floor(inp / 2);
            const rest = inp % 2;
            
            let railStrip1_5m = 0;
            let railStrip1m = 0;
            
            if(is3Phase){
                if(rest<=1 && rest>0) railStrip1m++;
                else if(rest>1) railStrip2m++;
            }
            else{
                if(rest<=1 && rest>0) railStrip1m++;
                else if(rest>1 && rest<=1.5) railStrip1_5m++;
                else if(rest>1.5) railStrip2m++;
            }
            
            const piece = ((railStrip2m*2)+(railStrip1_5m*1.5)+railStrip1m - inp ).toFixed(2) 
            const connector = railStrip2m + railStrip1_5m + railStrip1m - 1

            const rail = [railStrip1m, railStrip1_5m, railStrip2m, +piece, connector]
            return rail
        }

        function validation(){
            const inp = document.querySelectorAll('.app input')
            const sub = document.querySelector('.app .wrapp_button .btn')
            let counter = 0
            inp.forEach(el=>{
            if(el.validity.valid) counter++
            })
            if(counter === inp.length){
            sub.style.background = "#ff7e00"
            sub.addEventListener('click', nextPage)
            sub.disabled = false;
            withBtb = input
            }
            else {
                sub.style.background = "grey"
                sub.removeEventListener("click", nextPage)
                sub.disabled = true}
        }

        function deleteScene(){
            const btn = document.querySelectorAll(".app .wrapp_chose button")
                btn.forEach(e=>{
                    e.remove()
                })
        }

        function createCalculationScene(wrapp, answer){
            const canvas = createCanva()

            const text0 = createFormField("Długość odcinka w metrach", "0.1" , "0.1")
            const text1 = createFormField("Długość odcinka A w metrach", "0.1" , "0.1")
            const text2 = createFormField("Długość odcinka B w metrach", "0.1" , "0.1")
            const text3 = createFormField("Ilość punktów świetlnych:", "1" , "0")

            wrapp.appendChild(canvas)
            if(answer === '0'){
                wrapp.appendChild(text0)
            }
            else{
                wrapp.appendChild(text1)
                wrapp.appendChild(text2)
            }
            wrapp.appendChild(text3)
        }

        function createCanva(){
            const canvas = document.createElement("canvas")
            canvas.classList.add("canv")
            return canvas
        }

        function createFormField(text, step, min){
            const wrapp = document.createElement("div")
            wrapp.classList.add("wrapp_chose")

            const p = document.createElement("p")
            p.innerText = text

            const input = document.createElement("input")
            input.classList.add("inp")
            input.type = "number"
            input.step = step
            input.min = min
            input.required = true

            wrapp.appendChild(p)
            wrapp.appendChild(input)

            return wrapp
        }

        function replaceToCanvas(replaceElement){
            const canvas = createCanva()
            replaceElement.replaceWith(canvas)
        // wrapBtn.replaceChild(canvas, img)
        }
        
        function addButton(id){
            const wrapp = document.querySelector(".app .wrapp_chose")
            const wrapBtn = wrapp.querySelectorAll(".btn_wrapp_photo")
            //const wrapBtnEl = wrapp.getElementsByClassName("btn_wrapp_photo")
            productTitle[id].forEach((btn, i)=>{
                const cloneBtn = wrapBtn[0].cloneNode(true)
                cloneBtn.id = i;
                if(wrapBtn[i]){
                    // console.log("cloneBtn", cloneBtn)
                    // console.log("wrapBtn", wrapBtn[0])
                    // console.log("wrapp", wrapp)
                    wrapp.replaceChild(cloneBtn, wrapBtn[i])
                }
                else wrapp.appendChild(cloneBtn)
            })
            
        }
        function changeButton(){
            let counterProductTitle = 0
            photoWrap.forEach(el => {
                //console.dir(el.attributes.class.value)
                //console.log(productTitle[productTitle.length-1].length)
                const title = el.querySelector("h3")
                const img = el.querySelector("img")
                if( productTitle.length -1 >= counterTitle){
                    title.innerText = productTitle[counterTitle][counterProductTitle]
                    if(img) img.src = ""
                    counterProductTitle++
                }
            })
        }
        counterTitle++
    }

    function changeStyles(toggle) {
        console.log( "toggle " ,toggle)
        if(toggle){
            const wrapp = document.querySelector(".app .wrapp_chose")
            const photoWrap = wrapp.querySelectorAll(".btn_wrapp_photo")
            wrapp.attributes.class.value = "wrapp_chose_v2";
            photoWrap.forEach(el => {
                el.attributes.class.value = "btn_wrapp_title";
            })
        }
        else{
            const wrapp = document.querySelector(".app .wrapp_chose_v2")
            const photoWrap = wrapp.querySelectorAll(".btn_wrapp_title")
            wrapp.attributes.class.value = "wrapp_chose";
            photoWrap.forEach(el => {
                el.attributes.class.value = "btn_wrapp_photo";
            })
        }
    }
    function yourChose(answers) {
        answers.forEach((el, i) => {
            chose.push(questions[i][el])
        })
        console.log("chose", chose)
    }

    function activeButton(){
        btnWrap = document.querySelectorAll('.btn_wrapp_photo')
        btnWrap.forEach(btn => {
            btn.addEventListener('focus', (e) => {
                withBtb = btn.id
            })
        })
    }
    activeButton()

    function nextPage(e){
        e.stopPropagation();
        if (withBtb) {
            console.log(withBtb)
            answers.push(withBtb);
            changeScene()
        }
        console.log("answers", answers.length)
        console.log("counter", counterTitle)

        withBtb = null
    }

    function addFunctionNextPageToButton(){
        btnSub = document.querySelector('.btn')  
        btnSub.addEventListener('click', nextPage)
    }
    addFunctionNextPageToButton()


    function getChoseProducts() {
        let allProductFromCategory = {}
        const allProductFromCategoryId = [];
        const searchedProducts = [];
        
        function assignId(){
            allProductFromCategory.list.forEach(el => {
                allProductFromCategoryId.push(el.id)
            })
        }
        function findPhrase(arr, phrase, search, phrase2, search2) {
            allProductFromCategoryId.forEach(el => {
                frontAPI.getProduct(function (product) {
                // console.log(product)
                    let counter = 0;
                    product.attributes.forEach((e) => {
                        if (e.name.includes(phrase) && e.value.includes(search)){// "Rodzaj"
                            counter++
                        }
                        else if (e.name.includes(phrase2) && e.value.includes(search2)){
                            counter++
                        }
                        //console.log(counter)
                    })
                    if(counter>=2) arr.push(product) //searchedProducts.push(el)
                }, {
                    id: el
                });
            })
            console.log(searchedProducts);
        }
        frontAPI.getProductsFromCategory(function (products) {
            allProductFromCategory = { ...products }
            assignId()
            findPhrase(searchedProducts, "Rodzaj", "COB" ,"Kolor", "biały")
        }, {
            id: 62, // chose[0] //62
            urlParams: '?limit=50'
        })
    } 




    // let url = 'https://onled.pl//webapi/rest/auth';
    // // let username = 'lukass9';
    // // let password = 'Lp@19920719';

    // let headers = new Headers();

    // headers.set('Authorization', 'Basic bHVrYXNzOTpMcEAxOTkyMDcxOQ==')
    // //console.log(btoa(username + ":" + password))
    // fetch(url, {
    //     method: 'POST',
    //     headers: headers,
    // })
    //     .then(response => response.json())
    //     .then(json => console.log(json))
}


function buildStartStructApplication(){
    const main = document.createElement("main")
    main.classList.add("app")
        const wrapp = document.createElement("div")
        wrapp.classList.add("wrapp")
            const wrapp_title = document.createElement("div")
            wrapp_title.classList.add("wrapp_title")
                const title = document.createElement("h1")
                title.classList.add("title")
                title.innerText = "Zbuduj swój zestaw szynowy!"
                
                const step = document.createElement("h2")
                step.classList.add("step")
                step.innerText = "Wybierz rodzaj zasilania"
            wrapp_title.appendChild(title)
            wrapp_title.appendChild(step)

            const wrapp_chose = document.createElement("div")
            wrapp_chose.classList.add("wrapp_chose")
                const btn_wrapp_photo1 = document.createElement("button")
                btn_wrapp_photo1.classList.add("btn_wrapp_photo")
                btn_wrapp_photo1.id = "0";
                    const photo_title1 = document.createElement("h3")
                    photo_title1.classList.add("photo_title1")
                    photo_title1.innerText = "Oświetlenie 1-fazowe"
                    const img1 = document.createElement("img")
                    img1.classList.add("image")
                    img1.src = "https://onled.pl/environment/cache/images/400_400_productGfx_3827/2872.png"
                btn_wrapp_photo1.appendChild(photo_title1)
                btn_wrapp_photo1.appendChild(img1)
                
                const btn_wrapp_photo2 = document.createElement("button")
                btn_wrapp_photo2.classList.add("btn_wrapp_photo")
                btn_wrapp_photo1.id = "1";
                const photo_title2 = document.createElement("h3")
                photo_title2.classList.add("photo_title1")
                photo_title2.innerText = "Oświetlenie 3-fazowe"
                    const img2 = document.createElement("img")
                    img2.classList.add("image")
                    img2.src = "https://onled.pl/environment/cache/images/400_400_productGfx_3067/5x-Lampa-3-fazowa-25W---szyna-allegro-zestaw-czarna.jpg"
                btn_wrapp_photo2.appendChild(photo_title2)
                btn_wrapp_photo2.appendChild(img2)
            wrapp_chose.appendChild(btn_wrapp_photo1)
            wrapp_chose.appendChild(btn_wrapp_photo2)

            const wrapp_button = document.createElement("div")
            wrapp_button.classList.add("wrapp_button")
                const btn = document.createElement("btn")
                btn.classList.add("btn")
                btn.innerText = "Dalej"
            wrapp_button.appendChild(btn)

        wrapp.appendChild(wrapp_title)
        wrapp.appendChild(wrapp_chose)
        wrapp.appendChild(wrapp_button)
    main.appendChild(wrapp)

    document.querySelector("body").appendChild(main)
}
buildStartStructApplication()
app()