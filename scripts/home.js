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

// navigation system
const dashboard = document.getElementById('dashboard');
const report = document.getElementsByClassName('report');
const settings = document.getElementById('settings');

// dashboard onclick
dashboard.addEventListener('click', () => {
    window.location.href('../home/home.htm');
});

// report onclick
report.addEventListener('click', () => {
    window.location.href('../report/report.htm');
    alert('report clicked');
});

alert(`Welcome dumbass ${username.value}. You have ${userAmount.value} poor fuck`);