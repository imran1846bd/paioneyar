const loginBtn=document.getElementById("login");
loginBtn.addEventListener("click", function(){
    loginBtn.style.display = "none"
    const transactionArea=document.getElementById("transaction-area");
    transactionArea.style.display="block";
});
//deposit button event handler
const deposit = document.getElementById("addDeposit");
deposit.addEventListener("click",function(){
    const depositAmount=document.getElementById("depositAmount").value;
    const depositNumber=parseFloat(depositAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit  = depositNumber +currentDepositNumber;
    console.log(totalDeposit);
    document.getElementById("currentDeposit").innerText = totalDeposit;
    
    const balance=document.getElementById("balance").innerText;
    const balanceNumber=parseFloat(balance)
    const totalBalance = balanceNumber + depositNumber;
    document.getElementById("balance").innerText = totalBalance ;

    document.getElementById("depositAmount").value = " "; 
});
//withdraw
const withdraw = document.getElementById("withdraw");
withdraw.addEventListener("click",function(){
    const withdrawAmount=document.getElementById("withdrawAmount").value;
    const withdrawNumber=parseFloat(withdrawAmount);
    const currentwithdraw = document.getElementById("currentwithdraw").innerText;
    const currentwithdrawtNumber = parseFloat(currentwithdraw);
    const totalwithdraw  = withdrawNumber + currentwithdrawtNumber;
    console.log(totalwithdraw);
    document.getElementById("currentwithdraw").innerText = totalwithdraw;

    const balance=document.getElementById("balance").innerText;
    const balanceNumber=parseFloat(balance)
    const totalBalance = balanceNumber - withdrawNumber ;
    document.getElementById("balance").innerText = totalBalance ;

    document.getElementById("withdrawAmount").value = " "; 
});
    