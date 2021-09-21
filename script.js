const form = document.getElementById("calc");
const display = document.getElementById("display");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

const hist = document.createElement("div");
const hist2 = document.createElement("div");
const history = document.getElementById("history")

// display.addEventListener("input",()=>{
//     hist2.innerHTML+= display.value+"<br>";

//     form.appendChild(hist2)
//     console.log(display.value);
// })
equals.addEventListener("click",()=>{
    hist2.innerHTML = "<h4>Previous Answers</h4>";
    hist.innerHTML+= display.value+"<br>";
    hist.style.innerHTML = 
    hist.style.backgroundColor = "#fff";
    hist.style.padding = "10px";
    hist.style.fontSize ="18px";
    form.appendChild(hist2);
    hist2.appendChild(hist);
    console.log(display.value);
});
clear.addEventListener("click",()=>{
    hist2.innerHTML="";
})
console.log(calc.display.value);

// function addToHistory(value) {
//     history += value;
//     document.getElementById('history').innerText = history;
// }