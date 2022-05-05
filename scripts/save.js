// console.log('hi');

const userName = document.getElementById('account_name');
const userAmount = document.getElementById('amount');
const confirmBtn = document.getElementById('confirm');
const select = document.getElementById('currency');

function storeData(){

    var username = userName.value;
    var useramount = userAmount.value;
    var usercurrency = select.options[select.selectedIndex].text;

    localStorage.setItem('name', username);
    localStorage.setItem('amount', useramount);
    localStorage.setItem('currency', usercurrency)

    // redirect();
};

function redirect(){
    window.location.href = 'home/home.htm';
};

function checkForm(){
    var username = userName.value;
    var useramount = userAmount.value;
    var usercurrency = select.options[select.selectedIndex].text;

    if(username === '' && useramount === ''){
        console.log('empty');
        alert(`try again`);
        // window.location.href = `index.htm`;
    } else{
        storeData();
        redirect();
        // console.log('else state');
        username = '';
        useramount = '';
    };
};

function checkLocalStorage(){
    if(localStorage.getItem('name') !== null && localStorage.getItem('amount') !== null && localStorage.getItem('currency') !== null){
        window.location.href = `home/home.htm`;
    }
};

// checkLocalStorage();

confirmBtn.addEventListener('click', checkForm);