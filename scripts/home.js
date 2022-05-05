const userName = document.getElementById('username');
const userAmount = document.getElementById('useramount');
const userCurrency = document.getElementById('usercurrency');

// fetching data from localstorage
function getData(){
    var storedName = localStorage.getItem('name');
    var storedAmount = localStorage.getItem('amount');
    var storedCurrency = localStorage.getItem('currency');

    console.log(storedName, storedAmount, storedCurrency);

    userName.innerText = storedName;
    userAmount.innerText = storedAmount;
    userCurrency.innerText = storedCurrency;
};

getData();

// check if localstorage does not exists
function checkLocalStorage(){
    if(localStorage.getItem('name') === null && localStorage.getItem('amount') === null && localStorage.getItem('currency') === null){
        window.location.href = `index.htm`;
    };
};