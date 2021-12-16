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
let styleToggle = true;
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
    if (withBtb && questions.length > answers.length) {
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