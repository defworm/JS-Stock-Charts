async function main() {
    
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

   


    const response = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=4h&apikey=40c1a9bcc08148c2b1bcd400e7457014')
    const responseText = await response.json();
    console.log(responseText);

    const { GME, MSFT, DIS, BNTX } = mockData; //result;

    const stocks = [GME, MSFT, DIS, BNTX];
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels:stocks[0].values.map( value => value.datetime),
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 
                    'rgba(255, 99, 132, 0.2)',
                   
                
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                    

                ],
               
            }]
        }
    });
    console.log(stocks[0].values)
    
}
                                                  


main()