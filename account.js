const deposit = document.getElementById('deposit-input');
const withdraw = document.getElementById('withdraw-input');

const depositBtn = document.getElementById('btn-deposit');
const withdrawBtn = document.getElementById('btn-withdraw');

const depositShow = document.getElementById('show-deposit');
const withdrawShow = document.getElementById('show-withdraw');
const balanceShow = document.getElementById('show-balance');

// deposit calculation logic
depositBtn.addEventListener('click', function () {
    // Deposit showing code
    let currentMoney = depositShow.innerText;
    let depositInput = deposit.value;
    currentMoney = parseFloat(currentMoney) + parseFloat(depositInput);
    depositShow.innerText = currentMoney;

    // Balance showing code
    let currentBalanceMoney = balanceShow.innerText;
    currentBalanceMoney = parseFloat(currentBalanceMoney) + parseFloat(depositInput);
    balanceShow.innerText = currentBalanceMoney;
    deposit.value = '';
})

// withdraw calculation logic
withdrawBtn.addEventListener('click', function () {
    // Withdraw showing code
    let currentMoney = withdrawShow.innerText;
    let withdrawInput = withdraw.value;
    currentMoney = parseFloat(currentMoney) + parseFloat(withdrawInput);
    withdrawShow.innerText = currentMoney;

    // Balance showing code
    let currentBalanceMoney = balanceShow.innerText;
    currentBalanceMoney = parseFloat(currentBalanceMoney) - parseFloat(withdrawInput);
    balanceShow.innerText = currentBalanceMoney;
    withdraw.value = '';
})