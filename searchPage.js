async function searchItems(){
    const searchItem  = window.location.href
    const urlObj = new URL(searchItem)
    const parameter = new URLSearchParams(urlObj.search)
    
    if (!parameter.has('q')){
        return //if query does not have q then return to avoid crash of program
    }

    // //if it has q then sent the value to text box (to avoid value disappear)
    document.getElementsByClassName('text')[0].value = parameter.get('q')

    var coinListUrl = 'https://api.coingecko.com/api/v3/search?query='+parameter.get('q')
    var coinList = await fetch(coinListUrl)
    var coinList = await coinList.json();
    var coinListData = coinList.coins;

    var i = 0;
    coinListData.forEach(element => {
        var coinid = "./details.html?id="+element.id
        console.log(coinid)
        var dataToBeInserted =
        `
        <div class="oneCard">
        <h2>${++i}</h2>
        <img src="${element.large}" width="40">
        <h2>${element.name}</h2>
        <h2>${element.symbol}</h2>
        <button><a href="${coinid}">More Info</a></button>
        </div>
        `

        document.getElementById('allCards').innerHTML += dataToBeInserted;
    });

}

window.onload = function begin(){
    searchItems();
}
