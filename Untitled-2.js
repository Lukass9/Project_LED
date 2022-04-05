$(document).ready(function () {
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
   
          class AllShapesCanvas {
              static setSizeCanva(element) {
                  element.width = btnWrap[0].offsetWidth
                  element.height = btnWrap[0].offsetWidth * 0.8;
              }
              static paintLine(ctx, canv) {
                  ctx.beginPath();
                  ctx.lineWidth = 3
                  ctx.lineTo(canv.width / 4, canv.height / 2);
                  ctx.lineTo(canv.width / 1.30, canv.height / 2);
                  ctx.stroke();
              }
              static paintL(ctx, canv) {
                  ctx.beginPath();
                  ctx.lineWidth = 3
                  ctx.lineTo(canv.width / 4, canv.height / 4);
                  ctx.lineTo(canv.width / 4, canv.height / 1.25);
                  ctx.lineTo(canv.width / 1.25, canv.height / 1.25);
                  ctx.stroke();
              }
              static paintU(ctx, canv) {
                  ctx.beginPath();
                  ctx.lineWidth = 3
                  ctx.lineTo(canv.width / 4, canv.height / 4);
                  ctx.lineTo(canv.width / 4, canv.height / 1.25);
                  ctx.lineTo(canv.width / 1.25, canv.height / 1.25);
                  ctx.lineTo(canv.width / 1.25, canv.height / 4);
                  ctx.stroke();
              }
              static paintX(ctx, canv) {
                  ctx.beginPath()
                  ctx.lineWidth = 3
                  ctx.lineTo(canv.width / 2, canv.height / 5);
                  ctx.lineTo(canv.width / 2, canv.height / 1.25);
   
                  ctx.moveTo(canv.width / 1.3, canv.height / 2);
                  ctx.lineTo(canv.width / 4, canv.height / 2);
                  ctx.stroke()
              }
              static paintXHelpLine(ctx, canv) {
                  ctx.beginPath()
                  ctx.lineWidth = 1
                  ctx.setLineDash([5, 1])
                  ctx.strokeStyle = "gray"
                  ctx.moveTo(canv.width / 2.1, canv.height / 5);
                  ctx.lineTo(canv.width / 2.1, canv.height / 2.1);
   
                  ctx.moveTo(canv.width / 1.9, canv.height / 1.9);
                  ctx.lineTo(canv.width / 1.9, canv.height / 1.25);
   
                  ctx.moveTo(canv.width / 1.31, canv.height / 2.2);
                  ctx.lineTo(canv.width / 1.9, canv.height / 2.2);
   
                  ctx.moveTo(canv.width / 4, canv.height / 1.8);
                  ctx.lineTo(canv.width / 2.1, canv.height / 1.8);
   
                  ctx.stroke()
              }
              static paintT(ctx, canv) {
                  ctx.beginPath()
                  ctx.lineWidth = 3
                  ctx.lineTo(canv.width / 2, canv.height / 5);
                  ctx.lineTo(canv.width / 2, canv.height / 1.25);
   
                  ctx.moveTo(canv.width / 1.3, canv.height / 5);
                  ctx.lineTo(canv.width / 4, canv.height / 5);
                  ctx.stroke()
              }
              static paintTHelpLine(ctx, canv) {
                  ctx.beginPath()
                  ctx.lineWidth = 1
                  ctx.setLineDash([5, 1])
                  ctx.strokeStyle = "gray"
   
                  ctx.moveTo(canv.width / 2.1, canv.height / 5);
                  ctx.lineTo(canv.width / 2.1, canv.height / 1.25);
   
                  ctx.moveTo(canv.width / 1.31, canv.height / 6.3);
                  ctx.lineTo(canv.width / 1.9, canv.height / 6.3);
   
                  ctx.moveTo(canv.width / 4, canv.height / 6.3);
                  ctx.lineTo(canv.width / 2.1, canv.height / 6.3);
   
                  ctx.stroke()
              }
              static paintSquare(ctx, canv) {
                  ctx.beginPath();
                  ctx.lineWidth = 3
                  ctx.rect(canv.width / 4, canv.height / 4, canv.width / 2, canv.height / 2);
                  ctx.stroke();
              }
              static paintMark(ctx, canv) {
                  ctx.font = "italic bold 18px Arial";
                  ctx.fillText("A", canv.width / 5, canv.height / 1.8);
                  ctx.fillText("B", canv.width / 2, canv.height / 1.09);
              }
              static paintMarkU(ctx, canv) {
                  this.paintMark(ctx, canv)
                  ctx.fillText("C", canv.width / 1.24, canv.height / 1.8);
              }
              static paintMarkX(ctx, canv) {
                  ctx.font = "italic bold 18px Arial";
                  ctx.fillText("A", canv.width / 4, canv.height / 1.5);
                  ctx.fillText("B", canv.width / 1.88, canv.height / 1.2);
                  ctx.fillText("C", canv.width / 1.4, canv.height / 2.3);
                  ctx.fillText("D", canv.width / 2.4, canv.height / 4);
              }
              static paintMarkT(ctx, canv) {
                  ctx.font = "italic bold 18px Arial";
                  ctx.fillText("A", canv.width / 3, canv.height / 7);
                  ctx.fillText("B", canv.width / 1.6, canv.height / 7);
                  ctx.fillText("C", canv.width / 2.5, canv.height / 1.9);
              }
   
              static drawAllShapes() {
                  const app = document.querySelector(".app")
                  const btnWrap = app.querySelectorAll('.btn_wrapp_photo')
                  btnWrap.forEach((btn, i) => {
                      const canv = btn.querySelector(".canv")
                      const ctx = canv.getContext("2d");
                      AllShapesCanvas.setSizeCanva(canv)
                      switch (i) {
                          case 0: AllShapesCanvas.paintLine(ctx, canv)
                              break;
                          case 1: AllShapesCanvas.paintT(ctx, canv)
                              break;
                          case 2: AllShapesCanvas.paintX(ctx, canv)
                              break;
                          case 3: AllShapesCanvas.paintL(ctx, canv)
                              break;
                          case 4: AllShapesCanvas.paintU(ctx, canv)
                              break;
                          case 5: AllShapesCanvas.paintSquare(ctx, canv)
                              break;
                      }
                  })
              }
          }
       function changeScene() {
           const title = ["Wybierz rodzaj zasilania", "Wybierz źródło światła", "Wybierz  kolor", "", "Schemat ułożenia", "", "Wybierz Lampę", "Podsumowanie"]
           const productTitle = [["Oświetlenie 1-fazowe","Oświetlenie 3-fazowe"],["Reflektor na żarówkę", "Zintegrowane źródło światła"], ["Biała", "Czarna"], ["Kreator automatyczny", "Kreator manualny"], ["Linia prosta", "Litera T", "Litera X", "Litera L", "Litera U", "Czworokąt"]]
           let input = []
           
          switch (counterTitle) {
                  case 0:
                    resetStruct(buildBasicStructWitchButton())
                    addTextToStep()
                    addInformation()
                    addTextToInformation([
                        "Oświetlenia tego użyjesz, gdy chcesz aby wszystkie reflektory zapalały się od jednego przełącznika",
                        "Dzięki temu podłączeniu możesz oświetlać 3 strefy za pomocą trzech różnych przełączników"])
                    addFirstButton(productTitle[0])
                    deleteBackButton()
                    break;   
                  case 1:
                    resetStruct(buildBasicStructWitchButton())
                    addTextToStep() 
                    addInformation()
                    addTextToInformation([
                        "Dzięki wymiennym żarówkom, masz możliwość zmiany barwy lub mocy żarówek w każdej chwili",
                        "Jest to mocne, puntkowe światło które doskonale doświetli wszystkie elementy"])
                    changeButton()
                    addBackButton()
                    break;
                  case 2:
                    resetStruct(buildBasicStructWitchButton())
                    addTextToStep()
                    changeButton()
                    addBackButton()
                    break;
                  case 3:
                    resetStruct(buildBasicStructWitchButton())
                    addTextToStep()
                    styleToggle = true;
                    changeStyles(styleToggle)
                    
                    changeButton()
                    addBackButton()
                    counterTitle++
                    answerNumber.push(0)
                 //    break;
                  case 4:
                    // console.log("counterTitle ==" ,counterTitle)
                    //  styleToggle = false;
                    // changeStyles(styleToggle)

                    resetStruct( buildCanvaStructur() )
                    // insertStruct( buildCanvaStructur() )
                    changeSizePhotoWrappForCanva()
                    activeButton()
                    addFunctionNextPageToButton()
                    addTextToStep()
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
                    resetNextButton()
                    addBackButton()
                    break;
                  case 5:
                    resetStruct(buildCanvaStructur())
                    addTextToStep()
                    const answer = answerNumber[answerNumber.length-1]
                    deleteScene()
                    const wrapp = document.querySelector(".app .wrapp_chose")
                    createCalculationScene(wrapp, answer)
                    styleToggle = true;
                    changeStyles(styleToggle)
                    const canv = document.querySelector(".app .wrapp_chose_v2 .canv")
                    const ctx = canv.getContext("2d");
                    addBackButton()
                    validation()
                    const inp = document.querySelectorAll('.app input')
                    inp.forEach((el,i)=>{
                        el.addEventListener("keyup", validation)
                        el.addEventListener("change", ()=>{ // setInputValue
                            input[i] =  +el.value
                            console.log(input[i])
                        })
                    })
                    switch (answer) {
                        case '0':
                            AllShapesCanvas.paintLine(ctx, canv)
                            break;
                        case '1':
                            AllShapesCanvas.paintT(ctx, canv)
                            AllShapesCanvas.paintTHelpLine(ctx, canv)
                            AllShapesCanvas.paintMarkT(ctx, canv)
                            break;
                        case '2':
                            AllShapesCanvas.paintX(ctx, canv)
                            AllShapesCanvas.paintXHelpLine(ctx, canv)
                            AllShapesCanvas.paintMarkX(ctx, canv)
                            break;
                        case '3':
                            AllShapesCanvas.paintL(ctx, canv)
                            AllShapesCanvas.paintMark(ctx, canv)
                            break;
                        case '4':
                            AllShapesCanvas.paintU(ctx, canv)
                            AllShapesCanvas.paintMark(ctx, canv)
                            AllShapesCanvas.paintMarkU(ctx, canv)
                            break;
                        case '5':
                            AllShapesCanvas.paintSquare(ctx, canv)
                            AllShapesCanvas.paintMark(ctx, canv)
                            break;
                        default:
                            alert("coś poszło nie tak")
                            break;
                    }
    
                    document.querySelector("#box_slider_41 > div > main > div > div.wrapp_chose_v2 > div.wrapp_lamps") ? 
                        document.querySelector("#box_slider_41 > div > main > div > div.wrapp_chose_v2 > div.wrapp_lamps").remove() : null
                   
                    break;
                  case 6:
                    const lamps = getChoseProducts(...answers)
                    resetStruct(buildChoseStructApp(lamps))
                    addTextToStep()                      
                    addBackButton()
                    break;
                  case 7:
                      const scene2 = document.querySelector(".app .wrapp_chose")
                      scene2.remove()
                      let calc = [];
                      let connL = 0;
                      let connX = 0;
                      let connT = 0;
                      const prevAnswer = answerNumber[answerNumber.length-3]
                      const railInp = answerNumber[answerNumber.length-2]
   
                   for (let i = 0; i < railInp.length - 1; i++) {
                       let x = 0
                       let buff = []
                       switch (prevAnswer) {
                           case '0':
                               calc = calculation(railInp[i], +answerNumber[0])
                               break;
                           case '1':
                               x = i ? 1 : 0
                               calc[x] = calculation(railInp[i], +answerNumber[0])
                               connT = 1
                               buff = []
                               if (i > 0) {
                                   calc[0].forEach((el, j) => {
                                       buff.push(el + (calc[1][j]))
                                   })
                                   calc.unshift(buff)
                                   calc.pop()
                               }
                               if (i == railInp.length - 2) {
                                   calc = buff
                               }
                               break;
                           case '2':
                               x = i ? 1 : 0
                               calc[x] = calculation(railInp[i], +answerNumber[0])
                               connX = 1
                               buff = []
                               if (i > 0) {
                                   calc[0].forEach((el, j) => {
                                       buff.push(el + (calc[1][j]))
                                   })
                                   calc.unshift(buff)
                                   calc.pop()
                               }
                               if (i == railInp.length - 2) {
                                   calc = buff
                               }
                               break;
                           case '3':
                               calc[i] = calculation(railInp[i], +answerNumber[0])
                               connL = 1
                               if (i > 0) {
                                   const buff = []
                                   calc[0].forEach((el, j) => {
                                       buff.push(el + (calc[1][j]))
                                   })
                                   calc = buff
                               }
                               break;
                           case '4':
                               x = i ? 1 : 0
                               calc[x] = calculation(railInp[i], +answerNumber[0])
                               connL = 2
                               buff = []
                               if (i > 0) {
                                   calc[0].forEach((el, j) => {
                                       buff.push(el + (calc[1][j]))
                                   })
                                   calc.unshift(buff)
                                   calc.pop()
                               }
                               if (i == railInp.length - 2) {
                                   calc = buff
                               }
                               break;
                           case '5':
                               // calc[i] = calculation(railInp[i]*2)
                               const calcBufor = calculation(railInp[i], +answerNumber[0])
                               calc[i] = calcBufor.map(el => el * 2)
                               if (i > 0) {
                                   const buff = []
                                   calc[0].forEach((el, j) => {
                                       buff.push(el + (calc[1][j]))
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
                   calc.push(connX)
                   calc.push(connT)
                      const RailsAndConecctors = [{name: "1m", value: 0},{name: "1,5m",value: 0}, 
                      {name: "2m", value: 0}, {name: "reszta", value: 0}, {name: "prosty", value: 0}, 
                      {name: "narożny", value: 0}, {name: "krzyżowy", value: 0}, {name: "trójnik", value: 0}]
                         calc.forEach((el,i)=>{
                             RailsAndConecctors[i].value = el
                         })
                         console.log(RailsAndConecctors)
                         // calc1.forEach(e=> calc.push(e))
                         console.log("CALC!!!!!", typeof calc, calc)
                         console.log("answerNumber[0]", answerNumber[0])
                         const phase = answerNumber[0]=="0" ? 63 : 275
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
                                   if(product.name.includes(color.substring(0, color.length-1) ) && product.name.includes(railOrConecctor.name) && !selectedProducts.some(el => el.name.includes(railOrConecctor.name)) ){
                                            product.package = railOrConecctor.value
                                            selectedProducts.push(product)
                                        }
                                 }
                             })
                         })
                         const product = frontAPI.getProduct({id: answerNumber[answerNumber.length-1]})
                         
                         //consoloe.log("product.package = answers[5][answers[5].length-1]", answers[5])
                         product.package = answerNumber[5][answerNumber[5].length-1]
                         
                         //console.log("product", product)
                         //console.log("answerNumber[answerNumber.length-1]", answerNumber[answerNumber.length-1])
                         selectedProducts.unshift(product)
                         
                         resetStruct(buildChoseStructApp(selectedProducts))
                         addTextToStep()
                         addBackButton()   
                         changeToFinallStruct()
                         loadValue(selectedProducts)
                         const finalPrice = calculatePrice(selectedProducts)
                         console.log("finalPrice", finalPrice)
                         document.querySelector(".app .wrapp .wrapp_button .wrapp_sum .value").innerText = finalPrice.toFixed(2) + " zł"
                         document.querySelector(".app .wrapp .wrapp_button .btn:nth-child(2)").addEventListener("click", ()=>{
                           if(selectedProducts.every(el => el.can_buy)){
                                   activeShopButton(selectedProducts)
                                    location.href = 'https://sklep563687.shoparena.pl/pl/basket'
                           }
                            else {
                               document.querySelector(".app .wrapp_chose").remove()
                               document.querySelector(".app .wrapp .wrapp_button .wrapp_sum").remove()
                               const wrapp_chose_v2 = document.createElement("div")
                               wrapp_chose_v2.classList.add("wrapp_chose_v2")
                                   const h1 = document.createElement("h1")
                                   h1.innerText = "Uwaga!"
                                   h1.style.color = "red";
   
                                   const h2a = document.createElement("h5")
                                   h2a.innerText = 'nie wszystkie pozycje znajdują się w naszych stanach magazynowych, dodając pozycję do koszyka, przedmioty ze stanem "brak towaru" nie zostaną dodane.'
   
                                   const br = document.createElement("br")
   
                                   const h2b = document.createElement("h5")
                                   h2b.innerText = 'wyślij e-mail ze swoim zamówieniem a nasz handlowiec zaproponuje alternatywną ofertę lub poinformuje o zbliżającej się dostawie'
   
                               wrapp_chose_v2.appendChild(h1)
                               wrapp_chose_v2.appendChild(h2a)
                               wrapp_chose_v2.appendChild(br)
                               wrapp_chose_v2.appendChild(h2b)
   
                               const div = document.createElement("div")
                                   const sendEmail = document.createElement("button")
                                   sendEmail.classList.add("btn")
                                   sendEmail.innerText = "Wyślij email"
                               div.appendChild(sendEmail)
   
                               const btn = document.querySelector(".app .wrapp .wrapp_button")
                               btn.prepend(div)
                               document.querySelector(".app .wrapp").insertBefore(wrapp_chose_v2, btn)
   
                               const btns = document.querySelectorAll(".app .wrapp .wrapp_button .btn")
                               btns[0].addEventListener("click", ()=>{
                                   let email = "" 
                                   btns[0].remove()
                                   div.appendChild(createFormFieldForSendEmail())
                                   
                                   if(!validateEmail(email)){
                                       const send = document.querySelector(".app .wrapp .wrapp_button form .btn")
                                       send.style.background = "grey"
                                       send.disabled = true;
                                       const cloneSend = send.cloneNode(true);
                                       send.parentNode.replaceChild(cloneSend, send)
                                   }
                                   let isCorrect;
                                   document.querySelector(".app .wrapp .wrapp_button div .emailInput").addEventListener("keyup", element=>{
                                       const newSend = document.querySelector(".main .wrapp_button .btn")
                                       email = element.target.value
                                        if(validateEmail(email) && !isCorrect){
                                           isCorrect = true
                                           newSend.style.background = "#ff7e00"
                                           newSend.addEventListener('click', ()=>{
                                               let messageText = "Email: " + email + '\n'
                                               selectedProducts.forEach(el=>{
                                                   messageText += el.package + " x " + el.code + " " + el.availability.name + '\n'
                                               })
                                               document.getElementById('sendEmail').addEventListener('submit', function(event) {
                                                    event.preventDefault()
                                                    
                                                    selectedProducts.forEach(el=>{
                                                        this.message.value += el.package + " x " + el.code + " " + el.availability.name + '\r\n'
                                                    })
                                                    //this.message.value = messageText
                                                    emailjs.sendForm('service_5t64g8c', 'contact_form', this)
                                                        .then(function() {
                                                            location.href = 'https://sklep563687.shoparena.pl'
                                                        }, function(error) {
                                                            console.log('FAILED...', error)
                                                        })
                                            })
                                               
                                           } )
                                           newSend.myParam = selectedProducts
                                           newSend.disabled = false;
                                       }
                                       else if(!validateEmail(email)){
                                           isCorrect = false;
                                           newSend.style.background = "grey"
                                           newSend.disabled = true;
                                           const cloneSend = newSend.cloneNode(true);
                                           newSend.parentNode.replaceChild(cloneSend, newSend)
                                       }
                                   })
                               })
                               btns[2].addEventListener("click", ()=>{
                                   activeShopButton(selectedProducts)
                                   location.href = 'https://sklep563687.shoparena.pl/pl/basket'
                               })
                           }
                         })
              //addBackButton()
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
         function sendEmailWithTheOrder(selectedProducts){
               let messageText = "Email: " + email + "<br>"
               selectedProducts.forEach(el=>{
                   messageText += el.package + " x " + el.code + " " + el.availability.name + "<br>"
               })
               Email.send({
                    Host : "poczta.interia.pl",
                    Username : "onledtest@interia.pl",
                    Password : "onledtest123",
                    To : 'lukasz.pisarek@onled.pl',
                    From : "onledtest@interia.pl",
                    Subject : "Oferta ",
                    Body : messageText
               })
              }
   
              function validateEmail(email) {
               const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
               if(!reg.test(email))
                   return false
               else
                   return true
               }
         
         	 function createFormFieldForSendEmail(){
                const form = document.createElement("form")
                form.id = "sendEmail"
                form.style.margin = "0px"
                    const inpEmail = document.createElement("input")
                    inpEmail.type = "email"
                    inpEmail.placeholder ="Podaj swój adres email"
                    inpEmail.classList.add("emailInput")
                    inpEmail.required = "true"
                    inpEmail.name = "user_email"
                    inpEmail.style.margin = "0px 0px 30px 0px"
                    inpEmail.style.height = "40px"

                    const message = document.createElement("input")
                    message.name = "message"
                    message.type = "hidden"
                    
                    const send = document.createElement("input")
                    send.classList.add("btn")
                    send.value = "Wyślij"
                    send.type = "submit"
                    send.style.margin = "0px 0px 30px 0px"
                form.appendChild(send)
                form.appendChild(inpEmail)
                form.appendChild(message)
                return form
             }
             function createBackButton(){
                   const backButton = document.createElement("button")
                   backButton.classList.add("btn")
                   backButton.innerText = "Powrót"
                   backButton.addEventListener("click", ()=>{
                   if(counterTitle <= 2) answers.pop()
                   if(counterTitle == 5) {
                       counterTitle--
                       answerNumber.pop()
                   }
                       counterTitle-=2
                       answerNumber.pop()
                       changeScene()
                   })
                   return backButton
              }
              function createNextButton(){
               const nextButton = document.createElement("button")
               nextButton.classList.add("btn")
               nextButton.innerText = "Dalej"
               nextButton.addEventListener("click", nextPage)
               return nextButton
          }
              function resetNextButton(){
               deleteNextButton()
               const wrapp_btn = document.querySelector(".app .wrapp .wrapp_button")
               wrapp_btn.appendChild( createNextButton() )
              }
              function addBackButton(){
                deleteBackButton()
                const wrapp_btn = document.querySelector(".app .wrapp .wrapp_button div")
                const btnNext = wrapp_btn.querySelector(".btn")
                wrapp_btn.insertBefore(createBackButton(), btnNext)
               }
              function deleteNextButton(){
               const wrapp_btn = document.querySelector(".app .wrapp .wrapp_button")
               const btn = wrapp_btn.querySelectorAll(".btn")
               if(btn.length>1){
                   btn[1].remove()
               }
          }
              function deleteBackButton(){
                   const wrapp_btn = document.querySelector(".app .wrapp .wrapp_button")
                   const btn = wrapp_btn.querySelectorAll(".btn")
                   if(btn.length>1){
                       btn[0].remove()
                   }
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
                  const sub = document.querySelectorAll('.app .wrapp_button .btn')
                  let counter = 0
                  inp.forEach(el=>{
                  if(el.validity.valid) counter++
                  })
                  if(counter === inp.length){
                  sub[1].style.background = "#ff7e00"
                  sub[1].addEventListener('click', nextPage)
                  sub[1].disabled = false;
                  withBtb = input
                  }
                  else {
                      sub[1].style.background = "grey"
                      sub[1].removeEventListener("click", nextPage)
                      sub[1].disabled = true}
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
               const text5 = createFormField("Długość odcinka D w metrach", "0.1" , "0.1")
               const text3 = createFormField("Ilość punktów świetlnych:", "1" , "0")
   
               wrapp.appendChild(canvas)
               if(answer === '0'){
                   wrapp.appendChild(text0)
               }
               else{
                   wrapp.appendChild(text1)
                   wrapp.appendChild(text2)
               }
               if(answer === '1' || answer === '2' || answer === '4'){ // 1,2,4
                   wrapp.appendChild(text4)
               }
               if(answer === '2') wrapp.appendChild(text5)
   
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

        function addTextToStep(){
        const step = document.querySelector(".app .step");
        step.innerText = title[counterTitle] ? title[counterTitle] : ''
        }
        function addFirstButton(lampsTitle){
            const photoWrapp = document.querySelectorAll(".app .btn_wrapp_photo")
            const lampsPhotos = ["https://onled.pl/public/assets/onled/wy%C5%82%C4%85cznik_pojedynczy.png","https://onled.pl/public/assets/onled/wy%C5%82%C4%85cznik_potr%C3%B3jny.png"]
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
           function changeSize(x) {
            if (x.matches) { // If media query matches
                btn_wrapp_photo.forEach(el=>{
                    el.style.height = "20vw"
                    el.style.width = "20vw"
                    el.style.margin = "5px 5px"
                })
            } else {
                btn_wrapp_photo.forEach(el=>{
                    el.style.height = "9vw"
                    el.style.width = "9vw"
                    el.style.margin = "5px 5px"
                })
            }
          }
            let x = window.matchMedia("(max-width: 860px)")
            changeSize(x) // Call listener function at run time
            x.addEventListener("change", changeSize) // Attach listener function on state changes
       }
       function clearScene(){
        
        document.querySelector(".app  .wrapp").remove()


        // if(document.querySelector(".app .wrapp_chose_v2") ){
        //  document.querySelector(".app .wrapp_chose_v2").remove()
        //  // styleToggle = !styleToggle
        // }
        // else if(document.querySelector(".app .wrapp_chose") ){
        //  document.querySelector(".app .wrapp_chose").remove()
        // }
        // else null
        //  // document.querySelector(".app .wrapp_chose")? document.querySelector(".app .wrapp_chose").remove() : document.querySelector(".app .wrapp_chose_v2").remove()
    }
   

       function insertStruct(struct){
           const btn = document.querySelector(".app .wrapp .wrapp_button")
           document.querySelector(".app .wrapp").insertBefore(struct, btn)
       }
       function resetStruct( buildStruct ){
        clearScene()
        document.querySelector(".app").appendChild( buildStruct )
        // insertStruct( buildBasicStruct() )
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
           	const btnSub = document.querySelectorAll('.app .wrapp .wrapp_button .btn')  
            btnSub[1].addEventListener('click', nextPage)
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
   function activeShopButton(selectedProducts) {
     selectedProducts.forEach(product => {
       let addInfo = frontAPI.addToBasket({
         data: {
           stock_id: product.stockId,
           quantity: product.package,
         }
       });
     })
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
        const btn = document.querySelectorAll(".app .wrapp .wrapp_button .btn")
        const div = document.querySelector(".app .wrapp .wrapp_button div")
        btn[1].innerText = "Zamawiam"
        document.querySelector(".app .wrapp .wrapp_button").insertBefore(sum, div)
        
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
    const wrapp = buildBasicStruct()
       function changeAvaiilabilityColor(avaiblityHTML, productName){
           if(productName.includes("Brak") || productName.includes("wyczerpaniu") ){
               avaiblityHTML.style.color = "red"
           }
           else if(productName.includes("średnia")){
               avaiblityHTML.style.color = "orange"
           }
       }

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
                          changeAvaiilabilityColor(avaiblity, el.availability.name)
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
    wrapp.childNodes[1].appendChild(wrapp_lamps)
    return wrapp
    }
    function addTextToInformation(text){
        document.querySelectorAll(".wrapp_chose .btn_wrapp_photo").forEach((el,i)=>{
            el.querySelector(".information").addEventListener("mouseover", (e)=>{
            e.target.setAttribute('data-after', text[i] )
            })
        })
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
    function buildWrappStruct(){
        const wrapp = document.createElement("div")
        wrapp.classList.add("wrapp")
        return wrapp
    }
    function buildWrappTitleStruct(){
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
        return wrapp_title
    }
    function buildWrappChoseStruct(){
        const wrapp_chose = document.createElement("div")
        wrapp_chose.classList.add("wrapp_chose")
        return wrapp_chose
    }
    function buildbtn_wrapp_photoStruct(index) {
        const btn_wrapp_photo = document.createElement("button")
        btn_wrapp_photo.classList.add("btn_wrapp_photo")
        btn_wrapp_photo.id = index;
        const photo_title = document.createElement("h3")
        photo_title.classList.add("photo_title")
        // photo_title1.innerText = "Oświetlenie 1-fazowe"
        const img = document.createElement("img")
        img.classList.add("image")
        // img1.src = "https://onled.pl/environment/cache/images/400_400_productGfx_3827/2872.png"
        btn_wrapp_photo.appendChild(photo_title)
        btn_wrapp_photo.appendChild(img)
        return btn_wrapp_photo
    }
    function buildWrapp_buttonStruct(){
    const wrapp_button = document.createElement("div")
        wrapp_button.classList.add("wrapp_button")
            const div = document.createElement("div")
                const btn = document.createElement("button")
                    btn.classList.add("btn")
                    btn.innerText = "Dalej"
                const backButton = document.createElement("button")
                    backButton.classList.add("btn")
                    backButton.innerText = "Powrót"
            div.appendChild(backButton)
            div.appendChild(btn)
        wrapp_button.appendChild(div)
    return wrapp_button
    }
    function buildBasicStructWitchButton(){
        const wrapp = buildWrappStruct()
                const wrapp_title = buildWrappTitleStruct()
                const wrapp_chose = buildWrappChoseStruct()
                    const btn_wrapp_photo = buildbtn_wrapp_photoStruct("0")
                    const btn_wrapp_photo2 = buildbtn_wrapp_photoStruct("1")
                wrapp_chose.appendChild(btn_wrapp_photo)
                wrapp_chose.appendChild(btn_wrapp_photo2)
                const wrapp_button = buildWrapp_buttonStruct()
            wrapp.appendChild(wrapp_title)
            wrapp.appendChild(wrapp_chose)
            wrapp.appendChild(wrapp_button)
        return wrapp
    }
    function buildBasicStruct(){
        const wrapp = buildWrappStruct()
                const wrapp_title = buildWrappTitleStruct()
                const wrapp_chose = buildWrappChoseStruct()
                const wrapp_button = buildWrapp_buttonStruct()
            wrapp.appendChild(wrapp_title)
            wrapp.appendChild(wrapp_chose)
            wrapp.appendChild(wrapp_button) 
        return wrapp
    }
    function buildCanvaStructur(){
        const wrapp = buildBasicStruct()
        const wrapp_chose_v2 = wrapp.childNodes[1]
        wrapp_chose_v2.classList.remove("wrapp_chose")
        wrapp_chose_v2.classList.add("wrapp_chose_v2")
            const wrapp_chose1 = buildWrapp_choseForCanva(["0","1","2"])
            const wrapp_chose2 = buildWrapp_choseForCanva(["3","4","5"])
        wrapp_chose_v2.appendChild(wrapp_chose1)
        wrapp_chose_v2.appendChild(wrapp_chose2)
        // wrapp.appendChild(wrapp_chose_v2)
        return wrapp
    }
    function buildWrapp_choseForCanva(id){
        const wrapp_chose = document.createElement("div")
                wrapp_chose.classList.add("wrapp_chose")
                    for(let i = 0; i < id.length; i++){
                        const btn_wrapp_photo = document.createElement("button")
                        btn_wrapp_photo.classList.add("btn_wrapp_photo")
                        btn_wrapp_photo.id = id[i];
                            const photo_title1 = document.createElement("h3")
                            photo_title1.classList.add("photo_title")
                            const canv1 = document.createElement("canvas")
                            canv1.classList.add("canv")
                        btn_wrapp_photo.appendChild(photo_title1)
                        btn_wrapp_photo.appendChild(canv1)
                        wrapp_chose.appendChild(btn_wrapp_photo)
                    }
        return wrapp_chose
    }
    function buildStartStructApplication(){
        const main = document.createElement("main")
        main.classList.add("app")
            const wrapp = buildBasicStructWitchButton()
        main.appendChild(wrapp)

        document.querySelector(".centercol .box .row").appendChild(main)
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
   
   location.href == 'https://sklep563687.shoparena.pl/'? app() : null
})
