fetch('https://wt-e9c9a7a436fcd9273a7f8890849dae65-0.run.webtask.io/currency-exchange?pairs=USDNPR,EURNPR,INRNPR')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        console.log(data.rates[0]);
        console.log(data.rates[1]);
        console.log(data.rates[2]);
    })