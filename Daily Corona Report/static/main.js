const dateInput = document.getElementById('date-input')
const report = document.getElementById('daily-report')
const url = 'https://api.covid19india.org/data.json'

fetch(url).then(response => response.json()).then(jsonData => {
    data = jsonData['cases_time_series']
    dateInput.addEventListener('keyup', () => {
        for (let i=0; i<data.length; i++) {
            // console.log(data[i]['date'])
            if (dateInput.value == data[i]['date'].slice(0, data[i]['date'].length-1) || dateInput.value == data[i]['date']+"2020") {
                report.innerHTML = '<div class="container">'+
                '<div id="date" class="font-weight-bold text-left">'+data[i]['date']+"2020"+'</div>'+
                "<table class='table mt-3 text-white'><thead><th scope='col'>Total Confirmed</th><th scope='col'>New Confirmed</th><th scope='col'>Total Deaths</th><th scope='col'>New Deaths</th><th scope='col'>Total Recovered</th><th scope='col'>New Recovered</th></thead><tbody><tr><td class='lead'>"+data[i]['totalconfirmed']+"</td><td class='lead'>"+data[i]['dailyconfirmed']+"</td><td class='lead'>"+data[i]['totaldeceased']+"</td><td class='lead'>"+data[i]['dailydeceased']+"</td><td class='lead'>"+data[i]['totalrecovered']+"</td><td class='lead'>"+data[i]['dailyrecovered']+"</td></tr></tbody></table>"
                +"</div>"    
            }
        }
    })
})