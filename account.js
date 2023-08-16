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
    const currentValue = depositShow.innerText;
    const sz = currentValue.length;
    let currentMoney = currentValue.slice(1, sz);
    const depositInput = deposit.value;
    currentMoney = parseInt(currentMoney) + parseInt(depositInput);
    depositShow.innerText = '$' + currentMoney;

    // Balance showing code
    const currentBalance = balanceShow.innerText;
    console.log(currentBalance);
    const len = currentBalance.length;
    let currentBalanceMoney = currentBalance.slice(1, len);
    currentBalanceMoney = parseInt(currentBalanceMoney) + parseInt(depositInput);
    balanceShow.innerText = '$' + currentBalanceMoney;
    deposit.value = '';
})

// withdraw calculation logic
withdrawBtn.addEventListener('click', function () {
    // Withdraw showing code
    const currentValue = withdrawShow.innerText;
    const sz = currentValue.length;
    let currentMoney = currentValue.slice(1, sz);
    const withdrawInput = withdraw.value;
    currentMoney = parseInt(currentMoney) + parseInt(withdrawInput);
    withdrawShow.innerText = '$' + currentMoney;

    // Balance showing code
    const currentBalance = balanceShow.innerText;
    const len = currentBalance.length;
    let currentBalanceMoney = currentBalance.slice(1, len);
    currentBalanceMoney = parseInt(currentBalanceMoney) - parseInt(withdrawInput);
    balanceShow.innerText = '$' + currentBalanceMoney;
    withdraw.value = '';
})