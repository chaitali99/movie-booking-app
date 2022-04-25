// Store the wallet amount to your local storage with key "amount"

function addwallet(){
let a=document.getElementById("amount").value;
let amountArr=localStorage.getItem("amount")||0;


let total=Number(amountArr)+Number(a);
localStorage.setItem("amount",JSON.stringify(total));

document.getElementById("wallet").innerText=total
}
