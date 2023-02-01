const checkButton = document.querySelector("#CheckButton");
const billAmount=document.querySelector("#BillAmount");
const cashGiven=document.querySelector("#CashGiven");
const outputCoins=document.querySelectorAll(".output");
const message=document.querySelector("#errorMessage");

const coinArr=[2000,500,100,20,10,5,1];

checkButton.addEventListener("click", function checkFunction()
{
    hideMessage();
    var bill=Number(billAmount.value);
    var cash=Number(cashGiven.value);
    console.log(bill);
   if(bill>0)
   {
        if(cash >= bill)
        {
            const remainingVal=cash-bill;
            coinFunction(remainingVal);
        }
        else{
            // console.log(cashGiven.value-billAmount.value);
            // console.log("insuff"+cashGiven.value+" "+billAmount.value);
            showMessage("Insufficient for your bill");
        }
   } 
   else{
        showMessage("Invalid Bill Amount");
   }
});
function coinFunction(remainingVal)
{
    //var remainingVal=cashGiven.value-billAmount.value;
    //console.log(remainingVal);
    for(var i=0;i<coinArr.length;i++)
    {  
        const coin=Math.trunc(remainingVal/coinArr[i]);
        remainingVal=remainingVal%coinArr[i];
        //console.log(coin);
        outputCoins[i].innerHTML=coin;
    }
}
function hideMessage() {
    message.style.display = "none";
}
function showMessage(msg)
{
    message.style.display="block";
    message.innerText=msg;
}