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
const styleToggle = true;
let withBtb;
const title = ["Wybierz źródło światła", "Wybierz  kolor"]
let counterTitle = 0;
const productTitle = [["Reflektor na żarówkę", "Zintegrowane źródło światła"], ["Biała", "Czarna"], ["Kreator automatyczny", "Kreator manualny"]]
const questions = [[62, 264], ["GU10", "COB"], ["biała", "czarna"]]

function changeScene(title, productTitle,) {
    const step = app.querySelector(".step");
    const photoWrap = app.querySelectorAll(".btn_wrapp_photo")
    step.innerHTML = title[counterTitle] ? title[counterTitle] : ''
    let counterProductTitle = 0
    photoWrap.forEach(el => {
        //console.dir(el.attributes.class.value)
        console.log(productTitle[productTitle.length-1].length)
        if( productTitle.length -1 >= counterTitle){
            el.innerHTML = productTitle[counterTitle][counterProductTitle]
            counterProductTitle++
        }
        
    })
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
        changeScene(title, productTitle)
    }
    console.log("answers", answers.length)
    console.log("counter", counterTitle)

    withBtb = null

    if (answers.length >= 3) {
        changeStyles(styleToggle)
        styleToggle = !styleToggle 
        yourChoice(answers)
        // console.log( "styleToggle " ,styleToggle)
    }
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