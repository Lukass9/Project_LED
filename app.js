/* 
1-fazowe id
lampy 62
szyny i łączniki 63

3-fazowe id
lampy 264
szyny i łączniki 275
*/
const app = document.querySelector(".app")
//let btnWrap = document.querySelectorAll('.btn_wrapp_photo')
const answers = []
const chose = []
const btnSub = app.querySelector('.btn')
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
    const title = ["Wybierz źródło światła", "Wybierz  kolor", "", "Schemat ułożenia"]
    const productTitle = [["Reflektor na żarówkę", "Zintegrowane źródło światła"], ["Biała", "Czarna"], ["Kreator automatyczny", "Kreator manualny"], ["Linia prosta", "Litera L", "Czworokąt"]]
    const step = app.querySelector(".step");
    let photoWrap = app.querySelectorAll(".btn_wrapp_photo")
    
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

            const wrapBtn = app.querySelectorAll(".btn_wrapp_photo")
            const img = wrapBtn[0].querySelector(".image") 
            replaceToCanvas(img)

            addButton(counterTitle)
            photoWrap = app.querySelectorAll(".btn_wrapp_photo")
            changeButton()
            AllShapesCanvas.drawAllShapes()
            addEventListener("resize", (e)=>{
                AllShapesCanvas.drawAllShapes()
              })
              
            activeButton()
            //yourChose(answers)
            break;
        case 4:
            const btn = document.querySelectorAll(".app .wrapp_chose button")
            btn.forEach(e=>{
                e.remove()
            })
            const wrapp = document.querySelector(".app .wrapp_chose")
            createCalculationScene(wrapp)
            changeStyles(styleToggle)
            styleToggle = !styleToggle 
           
            console.log("tutaj")
            break;
        case 5:

            break;
        default:
            // changeStyles(styleToggle)
            // styleToggle = !styleToggle 
            // counterTitle = -1;
            // answers.length = 0
            // chose.length = 0
            break;
    }

    function createCalculationScene(wrapp){
        const canvas = createCanva()
        const text1 = createFormField("Długość odcinka A w metrach", "0.1" , "0.1")
        const text2 = createFormField("Długość odcinka B w metrach", "0.1" , "0.1")
        const text3 = createFormField("Ilość punktów świetlnych:", "1" , "1")

        wrapp.appendChild(canvas)
        wrapp.appendChild(text1)
        wrapp.appendChild(text2)
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
        const wrapp = app.querySelector(".wrapp_chose")
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
        const wrapp = app.querySelector(".wrapp_chose")
        const photoWrap = wrapp.querySelectorAll(".btn_wrapp_photo")
        wrapp.attributes.class.value = "wrapp_chose_v2";
        photoWrap.forEach(el => {
            el.attributes.class.value = "btn_wrapp_title";
        })
    }
    else{
        const wrapp = app.querySelector(".wrapp_chose_v2")
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


btnSub.addEventListener('click', (e) => {
    e.stopPropagation();
    if (withBtb) {
        answers.push(withBtb);
        changeScene()
    }
    console.log("answers", answers.length)
    console.log("counter", counterTitle)

    withBtb = null
})


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
