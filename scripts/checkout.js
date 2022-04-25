// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
// function addwallet(){
//     let a=document.getElementById("amount").value;
//     let amountArr=localStorage.getItem("amount")||0;
    
    
//     let total=Number(amountArr)+Number(a);
//     localStorage.setItem("amount",JSON.stringify(total));
    
//     document.getElementById("wallet").innerText=total
//     }
let data = JSON.parse(localStorage.getItem("movies"));
console.log(data)
let total=localStorage.getItem("amount");
document.getElementById("wallet").innerText=total;
if(total<100){
    alert("Insufficient Balance")
}else{
    //data.map
}
