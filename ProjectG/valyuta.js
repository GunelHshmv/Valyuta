let values1 = document.querySelectorAll(".firstblok .group1 label");
let values2 = document.querySelectorAll(".secondblok .group2 label");
let moneyinput = document.getElementById("num");
let moneyinputsecond = document.getElementById("numm");
let textfrom = document.querySelector(".textfrom");
let textto = document.querySelector(".textto");
let group1 = document.getElementById("eur").value;
let group2 = document.getElementById("usdd").value;

function call() {
  moneyinputsecond.addEventListener("keyup", checkmoneyinputsecon);
  moneyinput.addEventListener("keyup", checkMoneyInput);
}
call();
values1.forEach((select) => {
  select.addEventListener("click", (e) => {
    group1 = target.innerText;
    console.log(group1);
    checkMoneyInput();
  });
});
values2.forEach((select) => {
  select.addEventListener("click", (e) => {
    group2 = target.innerText;
    console.log(group2);
    checkmoneyinputsecon();
  });
});

async function checkmoneyinputsecon() {
  const res = await fetch(
    `https://api.exchangerate.host/latest?base=${group1}&symbols=${group2}`
  );
  const data = await res.json();
  moneyinput.value = (
    Object.values(data.rates)[0] * moneyinputsecond.value
  ).toFixed(2);
  if (group1 && group2) {
    textfrom.innerHTML = `1 ${data.base} = ${Object.values(
      data.rates
    )[0].toFixed(5)} ${Object.keys(data.rates)}`;
    textto.innerHTML = `1 ${Object.keys(data.rates)} = ${(
      1 / Object.values(data.rates)[0]
    ).toFixed(5)} ${data.base}`;
  }
}
async function checkMoneyInput() {
  const res = await fetch(
    `https://api.exchangerate.host/latest?base=${group1}&symbols=${group2}`
  );
  const data = await res.json();
  moneyinputsecond.value = (
    moneyinput.value / Object.values(data.rates)[0]
  ).toFixed(4);
}
