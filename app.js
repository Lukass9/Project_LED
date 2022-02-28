 /* 
1-fazowe id
lampy 62
szyny i łączniki 63
3-fazowe id
lampy 264
szyny i łączniki 275
*/
function app(){
    const answerNumber = []
    const answers = []
    let withBtb;
    let counterTitle = 0;
    const questions = [[62, 264], ["GU10", "COB"], ["biały", "czarny"]]
    let styleToggle = true;
    
    buildStartStructApplication()
    changeScene()

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
        static paintU(ctx, canv){
            ctx.beginPath();
            ctx.lineTo(canv.width/4, canv.height/4);
            ctx.lineTo(canv.width/4, canv.height/1.25);
            ctx.lineTo(canv.width/1.25, canv.height/1.25);
            ctx.lineTo(canv.width/1.25, canv.height/4);
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

        static paintMarkU(ctx,canv){
            this.paintMark(ctx,canv)
            ctx.fillText("C", canv.width/1.24, canv.height/1.8);
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
                    case 2: AllShapesCanvas.paintU(ctx, canv)
                        break;
                    case 3: AllShapesCanvas.paintSquare(ctx, canv)
                        break;
                }
            })
        }
    }

    function changeScene() {
        const title = ["Wybierz rodzaj zasilania", "Wybierz źródło światła", "Wybierz  kolor", "", "Schemat ułożenia", "", "Wybierz Lampę", "Podsumowanie"]
        const productTitle = [["Oświetlenie 1-fazowe","Oświetlenie 3-fazowe"],["Reflektor na żarówkę", "Zintegrowane źródło światła"], ["Biała", "Czarna"], ["Kreator automatyczny", "Kreator manualny"], ["Linia prosta", "Litera L", "Litera U", "Czworokąt"]]
        const step = document.querySelector(".app .step");
        let photoWrap = document.querySelectorAll(".app .btn_wrapp_photo")
        let input = []
        
        switch (counterTitle) {
            case 0:
                resetStruct()
                step.innerText = title[counterTitle] ? title[counterTitle] : ''
                addInformation()
                addFirstButton(productTitle[0])
                break;
            case 1:
                resetStruct()
                step.innerText = title[counterTitle] ? title[counterTitle] : ''
                addInformation()
                changeButton()
                break;
            case 2:
                resetStruct()
                step.innerText = title[counterTitle] ? title[counterTitle] : ''
                changeButton()
                break;
            case 3:
                resetStruct()
                step.innerText = title[counterTitle] ? title[counterTitle] : ''
                changeStyles(styleToggle)
                styleToggle = !styleToggle 
                changeButton()
                break;
            case 4:
                changeStyles(styleToggle)
                styleToggle = !styleToggle 

                clearScene()
                insertStruct( buildCanvaStructur() )
                changeSizePhotoWrappForCanva()
                activeButton()
                addFunctionNextPageToButton()
                step.innerText = title[counterTitle] ? title[counterTitle] : ''
                // addCanvas()
                // resetStruct()
                
                // const wrapBtn = document.querySelectorAll(".app .btn_wrapp_photo")
                // const img = wrapBtn[0].querySelector(".image") 
                // replaceToCanvas(img)

                // addButton(counterTitle)
                // photoWrap = document.querySelectorAll(".app .btn_wrapp_photo")
                changeButton()
                AllShapesCanvas.drawAllShapes()
                addEventListener("resize", (e)=>{
                    AllShapesCanvas.drawAllShapes()
                })
                
                // activeButton()
                break;
            case 5:
                step.innerText = title[counterTitle] ? title[counterTitle] : ''
                const answer = answerNumber[answerNumber.length-1]
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
                        AllShapesCanvas.paintU(ctx, canv)
                        AllShapesCanvas.paintMark(ctx,canv)
                        AllShapesCanvas.paintMarkU(ctx,canv)
                        break;
                    case '3':
                        AllShapesCanvas.paintSquare(ctx, canv)
                        AllShapesCanvas.paintMark(ctx,canv)
                        break;
                    default:
                        alert("coś poszło nie tak")
                        break;
                }
                break;
            case 6:
                step.innerText = title[counterTitle] ? title[counterTitle] : ''
                document.querySelector(".app .wrapp_chose_v2").remove()
                // const scene = document.querySelector(".app .wrapp_chose_v2")
                // scene.remove()
            
                const lamps = getChoseProducts(...answers)
                // console.log(lamps)
                const lampsScene = buildChoseStructApp(lamps)
                const wrapp_chose = document.createElement("div")
                wrapp_chose.classList.add("wrapp_chose")
                wrapp_chose.appendChild(lampsScene)
                document.querySelector(".app .wrapp_title").after(wrapp_chose)
                activeButton()

                //const lampki2 = getChoseProducts(...answers)
                //console.log(lampki2[0])
                //loadLamp(lampki2[0])

                break;
            case 7:
                step.innerText = title[counterTitle] ? title[counterTitle] : ''
                document.querySelector(".app .wrapp_chose").remove()
                // const scene2 = document.querySelector(".app .wrapp_chose")
                // scene2.remove()
                let calc = [];
                let connL = 0;
                const prevAnswer = answerNumber[answerNumber.length-3]
                const railInp = answerNumber[answerNumber.length-2]

                for(let i = 0; i < railInp.length-1; i++){
                    switch (prevAnswer) {
                        case '0':
                            calc = calculation(railInp[i], +answerNumber[0])
                            break;
                        case '1':
                            calc[i] = calculation(railInp[i], +answerNumber[0])
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
                            calc[i] = calculation(railInp[i], +answerNumber[0])
                            connL = 2
                            if(i>0){
                                const buff =[]
                                calc[0].forEach((el, j)=>{
                                    buff.push( el + (calc[1][j]) )
                                })
                                calc = buff
                            }
                        break;
                        case '3':
                            // calc[i] = calculation(railInp[i]*2)
                            const calcBufor = calculation(railInp[i], +answerNumber[0])
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
                calc.push(connL)
                const RailsAndConecctors = [{name: "1m", value: 0},{name: "1,5m",value: 0}, 
                {name: "2m", value: 0}, {name: "reszta", value: 0}, {name: "prosty", value: 0}, 
                {name: "narożny", value: 0}]
                calc.forEach((el,i)=>{
                    RailsAndConecctors[i].value = el
                })
                // calc1.forEach(e=> calc.push(e))
                console.log("CALC!!!!!", typeof calc, calc)
                console.log("answerNumber[0]", answerNumber[0])
                const phase = answerNumber[0] ? 63 : 275
                console.log("phase", phase)
                const productsFromCategory = frontAPI.getProductsFromCategory({
                    id: phase, // 63 , 275
                    urlParams: '?limit=50'
                })

                const selectedProducts = []
                productsFromCategory.list.map(product => {
                    product.name = product.name.toLowerCase()
                    RailsAndConecctors.forEach(railOrConecctor=>{
                        if(railOrConecctor.value>0){
                          const color = answers[answers.length-1]
                          if(product.name.includes(color.substring(0, color.length-1) ) && product.name.includes(railOrConecctor.name)){
                                product.package = railOrConecctor.value
                                selectedProducts.push(product)
                            }
                        }
                    })
                })
                const product = frontAPI.getProduct({id: answerNumber[answerNumber.length-1]})
                selectedProducts.unshift(product)

                const categoryProduct = buildChoseStructApp(selectedProducts)
                const wrapp_chose2 = document.createElement("div")
                wrapp_chose2.classList.add("wrapp_chose")
                wrapp_chose2.appendChild(categoryProduct)
                document.querySelector(".app .wrapp_title").after(wrapp_chose2)

                changeToFinallStruct()
                loadValue(selectedProducts)
                const finalPrice = calculatePrice(selectedProducts)
                document.querySelector(".app .wrapp .wrapp_button .wrapp_sum .sum").innerText = finalPrice = "zł"

                  /*  const txt = document.createElement('p')
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

                    document.querySelector(".app .wrapp_title").after(elWrapp) */

                    //const lampki = getChoseProducts(...answers)
                    //console.log(lampki)
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
            const text4 = createFormField("Długość odcinka C w metrach", "0.1" , "0.1")
            const text3 = createFormField("Ilość punktów świetlnych:", "1" , "0")

            wrapp.appendChild(canvas)
            if(answer === '0'){
                wrapp.appendChild(text0)
            }
            else{
                wrapp.appendChild(text1)
                wrapp.appendChild(text2)
            }
            if(answer === '2'){
                wrapp.appendChild(text4)
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

        function addFirstButton(lampsTitle){
            const photoWrapp = document.querySelectorAll(".app .btn_wrapp_photo")
            const lampsPhotos = ["https://onled.pl/environment/cache/images/400_400_productGfx_3827/2872.png","https://onled.pl/environment/cache/images/400_400_productGfx_3067/5x-Lampa-3-fazowa-25W---szyna-allegro-zestaw-czarna.jpg"]
            photoWrapp.forEach((el,i) => {
                const title = el.querySelector("h3")
                const img = el.querySelector("img")
                title.innerText = lampsTitle[i]
                img.src = lampsPhotos[i]
            })
        }
        function changeButton(){
            let counterProductTitle = 0
            const photoWrapp = document.querySelectorAll(".app .btn_wrapp_photo").length ?
                document.querySelectorAll(".app .btn_wrapp_photo") : document.querySelectorAll(".app .btn_wrapp_title")
            photoWrapp.forEach((el,i) => {
                const title = el.querySelector("h3")
                const img = el.querySelector("img")
                if(productTitle.length -1 >= counterTitle){
                    title.innerText = productTitle[counterTitle][counterProductTitle]
                    if(img) ChangeIMG(img, i)
                    counterProductTitle++
                }
            })
        }
        counterTitle++
    }
    function changeSizePhotoWrappForCanva(){
        const btn_wrapp_photo = document.querySelectorAll(".app .btn_wrapp_photo")
        btn_wrapp_photo.forEach(el=>{
            el.style.width = "10vw"
            el.style.height = "10vw"
        })
    }
    function buildCanvaStructur(){
        const wrapp_chose_v2 = document.createElement("div")
        wrapp_chose_v2.classList.add("wrapp_chose_v2")
            const wrapp_chose1 = buildWrapp_choseForCanva(["0","1"])
            const wrapp_chose2 = buildWrapp_choseForCanva(["2","3"])
        wrapp_chose_v2.appendChild(wrapp_chose1)
        wrapp_chose_v2.appendChild(wrapp_chose2)
        return wrapp_chose_v2
    }
    function clearScene(){
        document.querySelector(".app .wrapp_chose").remove()
    }
    function buildWrapp_choseForCanva(id){
        const wrapp_chose = document.createElement("div")
                  wrapp_chose.classList.add("wrapp_chose")
                      const btn_wrapp_photo1 = document.createElement("button")
                      btn_wrapp_photo1.classList.add("btn_wrapp_photo")
                      btn_wrapp_photo1.id = id[0];
                          const photo_title1 = document.createElement("h3")
                          photo_title1.classList.add("photo_title")
                          const canv1 = document.createElement("canvas")
                          canv1.classList.add("canv")
                      btn_wrapp_photo1.appendChild(photo_title1)
                      btn_wrapp_photo1.appendChild(canv1)
                      
                      const btn_wrapp_photo2 = document.createElement("button")
                      btn_wrapp_photo2.classList.add("btn_wrapp_photo")
                      btn_wrapp_photo2.id = id[1];
                      const photo_title2 = document.createElement("h3")
                      photo_title2.classList.add("photo_title")
                          const canv2 = document.createElement("canvas")
                          canv2.classList.add("canv")
                      btn_wrapp_photo2.appendChild(photo_title2)
                      btn_wrapp_photo2.appendChild(canv2)
                  wrapp_chose.appendChild(btn_wrapp_photo1)
                  wrapp_chose.appendChild(btn_wrapp_photo2)
        return wrapp_chose
    }

    function buildBasicStruct(){
        const wrapp_chose = document.createElement("div")
                  wrapp_chose.classList.add("wrapp_chose")
                      const btn_wrapp_photo1 = document.createElement("button")
                      btn_wrapp_photo1.classList.add("btn_wrapp_photo")
                      btn_wrapp_photo1.id = "0";
                          const photo_title1 = document.createElement("h3")
                          photo_title1.classList.add("photo_title")
                          // photo_title1.innerText = "Oświetlenie 1-fazowe"
                          const img1 = document.createElement("img")
                          img1.classList.add("image")
                          // img1.src = "https://onled.pl/environment/cache/images/400_400_productGfx_3827/2872.png"
                      btn_wrapp_photo1.appendChild(photo_title1)
                      btn_wrapp_photo1.appendChild(img1)
                      
                      const btn_wrapp_photo2 = document.createElement("button")
                      btn_wrapp_photo2.classList.add("btn_wrapp_photo")
                      btn_wrapp_photo2.id = "1";
                      const photo_title2 = document.createElement("h3")
                      photo_title2.classList.add("photo_title")
                      // photo_title2.innerText = "Oświetlenie 3-fazowe"
                          const img2 = document.createElement("img")
                          img2.classList.add("image")
                          // img2.src = "https://onled.pl/environment/cache/images/400_400_productGfx_3067/5x-Lampa-3-fazowa-25W---szyna-allegro-zestaw-czarna.jpg"
                      btn_wrapp_photo2.appendChild(photo_title2)
                      btn_wrapp_photo2.appendChild(img2)
                  wrapp_chose.appendChild(btn_wrapp_photo1)
                  wrapp_chose.appendChild(btn_wrapp_photo2)
        return wrapp_chose
    }
    function insertStruct(struct){
        const btn = document.querySelector(".app .wrapp .wrapp_button")
        document.querySelector(".app .wrapp").insertBefore(struct, btn)
    }
    function resetStruct(){
        clearScene()
        insertStruct( buildBasicStruct() )
        activeButton()
        addFunctionNextPageToButton()
    }
    function ChangeIMG(img, numberOfPhoto){
        yourChoice(answerNumber)
        const urlIMG = 'https://onled.pl/userdata/public/gfx/'
        if(answers.length <= 2){
            const products = findPhraseLocal(lamps, ...answers, questions[answers.length][numberOfPhoto])
            img.src = urlIMG + products[0].main_image_filename
        }
        else img.src = ''
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
    function yourChoice(answerNumber) {
        answers.length = 0;

        if(answerNumber.length>0){
            answerNumber.forEach((el, i) => {
                answers.push(questions[i][el])
            })
        }
        else answers.push(questions[0][answerNumber])

        console.log("answers", answers)
        console.log("...answers", ...answers)
    }
    function activeButton(){
        btnWrap = document.querySelectorAll('.btn_wrapp_photo').length ? document.querySelectorAll('.btn_wrapp_photo') : document.querySelectorAll('.lamp') 
        console.log("activeButton", btnWrap)
        btnWrap.forEach(btn => {
            btn.addEventListener('focus', (e) => {
                withBtb = btn.id
            })
        })
    }
    function nextPage(e){
        e.stopPropagation();
        if (withBtb) {
            console.log(withBtb)
            answerNumber.push(withBtb);
            changeScene()
        }
        console.log("answerNumber.length", answerNumber.length)
        console.log("answerNumber", answerNumber)
        console.log("counter", counterTitle)

        withBtb = null
    }
    function addFunctionNextPageToButton(){
        btnSub = document.querySelector('.app .wrapp .wrapp_button .btn')  
        btnSub.addEventListener('click', nextPage)
    }
    function getChoseProducts(whichPhase = 62, kindOfLight = "COB", whichColor = "czarny" ) {
        let allProductFromCategory = {}
        const searchedProducts = []
        const products = frontAPI.getProductsFromCategory({
            id: whichPhase, // chose[0] //62 , 264
            urlParams: '?limit=50'
        })
            allProductFromCategory = { ...products }
            const allProductFromCategoryId = assignId(allProductFromCategory)
            findPhraseOnTheServer(allProductFromCategoryId, searchedProducts, "Rodzaj", kindOfLight ,"Kolor", whichColor)
        return searchedProducts
    }
    function assignId(allProductFromCategory){
        const allProductFromCategoryId = []
        allProductFromCategory.list.forEach(el => {
            allProductFromCategoryId.push(el.id)
        })
        return allProductFromCategoryId
    }
    function findPhraseLocal(products, id, search = "COB" , search2 = "czarny"){
        let phase
        if(id===62) phase = 0
        else phase = 1 
        const searchedLamps = [];
        products[phase].products.forEach(product=>{
            let counter = 0;
            product.attributes.forEach((e) => {
                if (e.name.includes("Rodzaj") && e.value.includes(search)){// "Rodzaj"
                    counter++
                     //console.log("e.name", e.name)
                }
                else if (e.name.includes("Kolor") && e.value.includes(search2)){
                    counter++
                }
                //console.log(counter)
            })
            if(counter>=2) searchedLamps.push(product) //searchedProducts.push(el)
        })  
        return searchedLamps
    }
    function findPhraseOnTheServer(allProductFromCategoryId, searchedLamps, phrase, search, phrase2, search2,) {
        allProductFromCategoryId.forEach(productID => {
            const product = frontAPI.getProduct({id: productID})
            // console.log(product)
                let counter = 0;
                product.attributes.forEach((e) => {
                    if (e.name.includes(phrase) && e.value.includes(search)){// "Rodzaj"
                        counter++
                        // console.log(e.name)
                    }
                    else if (e.name.includes(phrase2) && e.value.includes(search2)){
                        counter++
                    }
                    //console.log(counter)
                })
                if(counter>=2) searchedLamps.push(product) //searchedProducts.push(el)
           
        })
        return searchedLamps
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

function loadValue(product){
    const lamps = document.querySelectorAll(".app .wrapp_chose .wrapp_lamps .lamp")
    lamps.forEach((lamp, i)=>{
        const qty = lamp.querySelector(".qty")
        console.log(qty)
        qty.innerText = product[i].package + " szt."
    })
}
function changeToFinallStruct(){
    function createSum(){
        const wrapp_sum = document.createElement("div")
        wrapp_sum.classList.add("wrapp_sum")
            const sum = document.createElement("p")
            sum.classList.add("sum")
            sum.innerText = "Suma: "
            const value = document.createElement("p")
            value.classList.add("value")
        wrapp_sum.appendChild(sum)
        wrapp_sum.appendChild(value)
        return wrapp_sum
    }
    function createQuantity(){
        const qty = document.createElement("p")
        qty.classList.add("qty")
        return qty
    }
    function editeCurentlyStyle(){
        const wrapp_btn = document.querySelector(".app .wrapp .wrapp_button")
        wrapp_btn.style.justifyContent = "space-between"
        const lamps = document.querySelectorAll(".app .wrapp_chose .wrapp_lamps .lamp")
        lamps.forEach(lamp=>{
            lamp.style.position = "relative"
        })
    }
    const sum = createSum()
    const btn = document.querySelector(".app .wrapp .wrapp_button .btn")
    btn.innerText = "Zamawiam"
    document.querySelector(".app .wrapp .wrapp_button").insertBefore(sum, btn)
    
    const lamps = document.querySelectorAll(".app .wrapp_chose .wrapp_lamps .lamp")
    lamps.forEach((lamp,i)=>{
      	const quantity = createQuantity()
        lamp.appendChild(quantity)
    })
    editeCurentlyStyle()
}
function calculatePrice(products){
    let sum = 0
    products.forEach(prod=>{
        sum += +prod.package * +prod.price.gross.base_float
    })
    return sum
}
function loadLamp(lamp){
  	const urlIMG = 'https://onled.pl/userdata/public/gfx/'
    const lampImg = document.querySelector(".app .lamp .lampImg")
    lampImg.src = urlIMG + lamp.main_image_filename
    const title = document.querySelector(".app .lamp .justLeft p")
    title.innerText = lamp.name
    const avaiblity = document.querySelector(".app .lamp .textTogether .avaiblity")
    avaiblity.innerText = lamp.availability.name
    const price = document.querySelector(".app .lamp .price")
    price.innerText = lamp.price.gross.base  
}
function buildChoseStructApp(lamps){
    const wrapp_lamps = document.createElement("div")
    wrapp_lamps.classList.add("wrapp_lamps")
    const urlIMG = 'https://onled.pl/userdata/public/gfx/'
    lamps.forEach((el)=>{
        const lamp = document.createElement("button")
            lamp.classList.add("lamp")
            lamp.id = el.id
                const lampImg = document.createElement("img")
                lampImg.classList.add("lampImg")
                lampImg.src = urlIMG + el.main_image_filename
                const justLeft = document.createElement("div")
                justLeft.classList.add("justLeft")
                    const p = document.createElement("p")
                    p.innerText = el.name
                    const textTogether = document.createElement("div")
                    textTogether.classList.add("textTogether")
                        const p1 = document.createElement("p")
                        p1.innerText = "Dostępność: "
                        const avaiblity = document.createElement("p")
                        avaiblity.classList.add("avaiblity")
                        avaiblity.innerText = el.availability.name
                    textTogether.appendChild(p1)
                    textTogether.appendChild(avaiblity)
                    const price = document.createElement("p")
                    price.classList.add("price")
                    price.innerText = el.price.gross.base
                justLeft.appendChild(p)
                justLeft.appendChild(textTogether)
                justLeft.appendChild(price)
            lamp.appendChild(lampImg)
            lamp.appendChild(justLeft)
        wrapp_lamps.appendChild(lamp) 
        })

    return wrapp_lamps
}     
function addInformation(){
    function addInfoStruct(){
        const information = document.createElement("h2")
        information.classList.add("information")
        information.innerText = "i"
        return information
    }
    document.querySelectorAll(".app .wrapp .wrapp_chose .btn_wrapp_photo").forEach(el=>{
        el.appendChild( addInfoStruct() )
    })
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
                // step.innerText = "Wybierz rodzaj zasilania"
            wrapp_title.appendChild(title)
            wrapp_title.appendChild(step)

            const wrapp_chose = document.createElement("div")
            wrapp_chose.classList.add("wrapp_chose")
                const btn_wrapp_photo1 = document.createElement("button")
                btn_wrapp_photo1.classList.add("btn_wrapp_photo")
                btn_wrapp_photo1.id = "0";
                    const photo_title1 = document.createElement("h3")
                    photo_title1.classList.add("photo_title")
                    // photo_title1.innerText = "Oświetlenie 1-fazowe"
                    const img1 = document.createElement("img")
                    img1.classList.add("image")
                    // img1.src = "https://onled.pl/environment/cache/images/400_400_productGfx_3827/2872.png"
                btn_wrapp_photo1.appendChild(photo_title1)
                btn_wrapp_photo1.appendChild(img1)
                
                const btn_wrapp_photo2 = document.createElement("button")
                btn_wrapp_photo2.classList.add("btn_wrapp_photo")
                btn_wrapp_photo2.id = "1";
                const photo_title2 = document.createElement("h3")
                photo_title2.classList.add("photo_title")
                // photo_title2.innerText = "Oświetlenie 3-fazowe"
                    const img2 = document.createElement("img")
                    img2.classList.add("image")
                    // img2.src = "https://onled.pl/environment/cache/images/400_400_productGfx_3067/5x-Lampa-3-fazowa-25W---szyna-allegro-zestaw-czarna.jpg"
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
    addInformation()
    }   
const lamps = [
        {
            id: "62",
            products: [
                {
                    name: "Lampa szynowa LED PREMIUM 23W 3000K CIEPŁA BIAŁA JEDNOFAZOWA",
                    main_image_filename: "1191.jpg",
                    attributes:
                    [
                        {
                            name: "Kolor",
                            value: "biały"
                        },
    
                        {
                            name: "Rodzaj",
                            value: "COB"
                        }
                    ],
    
                },
    
                {
                    name: "Reflektor szynowy na żarówkę GU10 BIAŁY JEDNOFAZOWY",
                    main_image_filename: "1322.jpg",
                    attributes:
                    [
                        {
                            name: "Kolor",
                            value: "biały"
                        },
                        
                        {
                            name: "Rodzaj",
                            value: "GU10"
                        }
                    ],
    
                },
    
                {
                    name: "Lampa szynowa LED PREMIUM 23W 3000K CIEPŁA CZARNA JEDNOFAZOWA",
                    main_image_filename: "1175.jpg",
                    attributes:
                    [
                        {
                            name: "Kolor",
                            value: "czarny"
                        },
    
                        {
                            name: "Rodzaj",
                            value: "COB"
                        }
                    ],
    
                },
    
                {
                    name: "Reflektor szynowy na żarówkę GU10 CZARNY JEDNOFAZOWY",
                    main_image_filename: "1883.jpg",
                    attributes:
                    [
                        {
                            name: "Kolor",
                            value: "czarny"
                        },
                        
                        {
                            name: "Rodzaj",
                            value: "GU10"
                        }
                    ],
    
                },
            ]
        },
    
        {
            id: "264",
            products: [
                {
                    name: "Lampa szynowa LED 23W 4000K BIAŁA TRÓJFAZOWA",
                    main_image_filename: "3051.jpg",
                    attributes:
                    [
                        {
                            name: "Kolor",
                            value: "biały"
                        },
    
                        {
                            name: "Rodzaj",
                            value: "COB"
                        }
                    ],
    
                },
    
                {
                    name: "Reflektor szynowy na żarówkę GU10 LONG BIAŁY TRÓJFAZOWY",
                    main_image_filename: "1919.jpg",
                    attributes:
                    [
                        {
                            name: "Kolor",
                            value: "biały"
                        },
                        
                        {
                            name: "Rodzaj",
                            value: "GU10"
                        }
                    ],
    
                },
    
                {
                    name: "Lampa szynowa LED 23W 4000K CZARNA TRÓJFAZOWA",
                    main_image_filename: "3056.jpg",
                    attributes:
                    [
                        {
                            name: "Kolor",
                            value: "czarny"
                        },
    
                        {
                            name: "Rodzaj",
                            value: "COB"
                        }
                    ],
    
                },
    
                {
                    name: "Reflektor szynowy na żarówkę GU10 LONG CZARNY TRÓJFAZOWY",
                    main_image_filename: "1921.jpg",
                    attributes:
                    [
                        {
                            name: "Kolor",
                            value: "czarny"
                        },
                        
                        {
                            name: "Rodzaj",
                            value: "GU10"
                        }
                    ],
    
                },
            ]
        },
    ]

app()