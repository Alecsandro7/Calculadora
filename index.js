const displayCount = document.getElementById("displayCount");
const input = document.getElementById("input");
const charKey = document.querySelectorAll(".charKey");
const resultInput = document.getElementById("result");
const allowedKeys = [
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

charKey.forEach((charKeyBtn) => {
  charKeyBtn.addEventListener("click", (evt) => {
    const value = charKeyBtn.dataset.value;
    displayCount.value += value;
  });
});

document.getElementById("clear").addEventListener("click", (e) => {
  displayCount.value = "";
  resultInput.value = "";
  displayCount.focus();
});

displayCount.addEventListener("keydown", (event) => {
  event.preventDefault();

  if (allowedKeys.includes(event.key)) {
    displayCount.value += event.key;
    return;
  }

  if (event.key === "Backspace") {
    displayCount.value = displayCount.value.slice(0, -1);
  }

  if (event.key === "Enter") {
    calculate();
  }
});

document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(displayCount.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}

// ChangeTheme

const root = document.documentElement;
const chk = document.getElementById("chk"); // input
const body = document.querySelector("body");
const cinza = document.querySelectorAll(".cinza");
const blue = document.querySelectorAll(".blue");
const label = document.querySelector(".label");
console.log(label);
console.log(cinza);
console.log(blue);

chk.addEventListener("change", () => {
  const isChecked = chk.checked;

  isChecked ? lightTheme() : darkTheme();
});

function darkTheme() {
  body.style.background = "#17171c";
  displayCount.style.color = '#fff';
 resultInput.style.color = '#fff'
  label.style.background = "#2e2f38";
  body.style.transition= 'all 1s';

  
 
  charKey.forEach((e) => {
    e.style.background = "#2e2f38";
    e.style.color = "#fff";
    e.style.transition= 'all 1s';
  });
  blue.forEach((e) => {
    e.style.background = "#4b5efc";
    e.style.color = "#fff";
    e.style.transition= 'all 1s';
  });

  cinza.forEach((e)=>{
     e.style.background = "#4e505f";
     e.style.transition= 'all 1s';
  })
}

function lightTheme() {
  body.style.background = "#f1f2f3";
  label.style.background = "#FFF";
  displayCount.style.color = '#000'
   resultInput.style.color = '#000'
   body.style.transition= 'all 1s';


  charKey.forEach((e) => {
    e.style.background = "#FFF";
    e.style.color = "#000";
    e.style.transition= 'all 1s';
  });
  blue.forEach((e) => {
    e.style.background = "#4b5efc";
    e.style.color = "#fff";
    e.style.transition= 'all 1s';
  });

  cinza.forEach((e)=>{
     e.style.background = "#d2d3da";
     e.style.transition= 'all 1s';
  })
}
