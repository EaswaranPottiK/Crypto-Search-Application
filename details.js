
function printDetails(){
    const url = document.location.href
    const urlObj = new URL(url)
    const urlParams = new URLSearchParams(urlObj.search)

    if (!urlParams.has('id')){ return}

    console.log(urlObj)
    var searchURL = 'https://api.coingecko.com/api/v3/coins/'+urlParams.get('id')+'?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'
    console.log(searchURL)

}

window.onload = function(){
    printDetails();
}