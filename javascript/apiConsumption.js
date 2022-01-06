const getINFO = async(url, company) => {
    if(company) {
        let info = await fetch(url + "&" + "symbol=" + company);
        let parsed = await info.json();
        console.log(parsed);
        return parsed;
    } else {
        let info = await fetch(url);
        let parsed = await info.json();
        console.log(parsed);
        return parsed;
    }
    
}

'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=SUWP475WHCI9C7Y5'
'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&symbol=IBM&apikey=SUWP475WHCI9C7Y5'

'MSFT'
'IBM'
'AMZN'
'CSCO'
'TSLA'
'NFLX'
'JPM'
'CRM'

export { getINFO };
