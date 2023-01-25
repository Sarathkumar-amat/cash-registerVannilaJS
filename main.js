var checkButton = document.querySelector("#CheckButton");
const billAmount=document.querySelector("#BillAmount");
const cashGiven=document.querySelector("#CashGiven");
var outputCoins=document.querySelectorAll(".output");
var message=document.querySelector("#errorMessage");

const coinArr=[2000,500,100,20,10,5,1];
checkButton.addEventListener("click",function checkFunction()
{
   if(billAmount.value>0)
   {
        if(cashGiven.value<billAmount.value)
        {
            showMessage("Insufficient for your bill");
        }
        else{
            var remainingVal=cashGiven.value-billAmount.value;
            coinFunction(remainingVal);
        }
   } 
   else{
        showMessage("Invalid Bill Amount");
   }
});
function coinFunction(remainingVal)
{
    //var remainingVal=cashGiven.value-billAmount.value;
    console.log(remainingVal);
    for(var i=0;i<coinArr.length;i++)
    {  
        const coin=Math.trunc(remainingVal/coinArr[i]);
        remainingVal=remainingVal%coinArr[i];
        console.log(coin);
        outputCoins[i].innerHTML=coin;
    }
}
function showMessage(msg)
{
    message.style.display="block";
    message.innerText=msg;
}