async function main() {
    
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    const response = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=15min&apikey=40c1a9bcc08148c2b1bcd400e7457014')
    const responseText = await response.text();
    console.log(responseText);
}

main()