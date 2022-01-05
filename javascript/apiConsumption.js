const getINFO = async(url) => {
    let info = await fetch(url);
    let parsed = await info.json();
    console.log(parsed);
    return parsed;
}

'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=SUWP475WHCI9C7Y5'

export { getINFO };
