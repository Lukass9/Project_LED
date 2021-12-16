/* 
1-fazowe id
lampy 62
szyny i łączniki 63

3-fazowe id
lampy 264
szyny i łączniki 275
*/
const app = document.querySelector(".app")

const answers = []
const chose = []
const btnSub = app.querySelector('.btn')
const btnWrap = app.querySelectorAll('.btn_wrapp_photo')
let withBtb;
let counterTitle = 0;
const questions = [[62, 264], ["GU10", "COB"], ["biała", "czarna"]]
let styleToggle = true;

function changeScene() {
    const title = ["Wybierz źródło światła", "Wybierz  kolor"]
    const productTitle = [["Reflektor na żarówkę", "Zintegrowane źródło światła"], ["Biała", "Czarna"], ["Kreator automatyczny", "Kreator manualny"]]
    const step = app.querySelector(".step");
    const photoWrap = app.querySelectorAll(".btn_wrapp_photo")
    
    switch (counterTitle) {
        case 0:
            step.innerHTML = title[counterTitle] ? title[counterTitle] : ''
            changeButton()
            break;
        case 1:
            step.innerHTML = title[counterTitle] ? title[counterTitle] : ''
            changeButton()
            break;
        case 2:
            step.innerHTML = title[counterTitle] ? title[counterTitle] : ''
            changeStyles(styleToggle)
            styleToggle = !styleToggle 
            changeButton()
            yourChoice(answers)
            break;
        default:
            changeStyles(styleToggle)
            styleToggle = !styleToggle 
            counterTitle = -1;
            answers.length = 0
            chose.length = 0
            break;
    }    

    function changeButton(){
        let counterProductTitle = 0
        photoWrap.forEach(el => {
            //console.dir(el.attributes.class.value)
            console.log(productTitle[productTitle.length-1].length)
            if( productTitle.length -1 >= counterTitle){
                el.innerHTML = productTitle[counterTitle][counterProductTitle]
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
function yourChoice(answers) {
    answers.forEach((el, i) => {
        chose.push(questions[i][el])
    })
    console.log("chose", chose)
}
btnWrap.forEach(btn => {
    btn.addEventListener('focus', (e) => {
        withBtb = btn.id
    })
})
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