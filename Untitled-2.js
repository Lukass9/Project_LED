const btn = document.querySelector(".btn");
//const inp = document.querySelector(".inp");

const listwy2 = document.querySelector(".listwy2");
const listwy1_5 = document.querySelector(".listwy1_5");
const listwy1 = document.querySelector(".listwy1");
const lacznik = document.querySelector(".lacznik");

// inp.addEventListener("keydown", (e) => {
//   e.preventDefault();
//   if (+e.key || e.key === "0") {
//     inp.value += e.key;
//   } else if (e.key === "," || e.key === ".") {
//   if (!inp.value.includes(".")) inp.value += ".";
//   } else if (e.key === "Backspace") {
//     inp.value = inp.value.substring(0, inp.value.length - 1);
//   } else if (e.key === "Enter") {
//     btn.click();
//   }
// });
const inp = {
    value: '1.53',
}



//btn.addEventListener("click", () => {
  const railStrip2m = Math.floor(+inp.value / 2);
  railStrip2m
  
  const rest = +inp.value % 2;
  rest
  
  const railStrip1_5m = Math.floor((+inp.value - railStrip2m * 2) / 1.5);
  railStrip1_5m
  
  let railStrip1m = 0;
  if(!railStrip1_5m) railStrip1m = Math.floor((+inp.value - railStrip2m * 2) / 1);
  railStrip1m

  console.log( (+inp.value) - ((railStrip2m *2) + (railStrip1_5m * 1.5) + railStrip1m));

  console.log(+inp.value)
  railStrip2m
  railStrip1_5m
  railStrip1m

//   listwy2.innerHTML = railStrip2m + " listew 2m";
//   if (railStrip1_5m) listwy1_5.innerHTML = railStrip1_5m + " listwe 1,5m";
//   if (!railStrip1_5m) listwy1_5.innerHTML = railStrip1m + " listwe 1m";
  
//   lacznik.innerHTML = railStrip2m + railStrip1_5m + railStrip1m - 1 + " łącznik/ów"
  
//   inp.value = "";
//});
