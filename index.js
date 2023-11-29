
document.getElementById('search').addEventListener('click', function () {
    window.location.href ='./search.html'
})



window.onload = async function(){
    console.log('its working');
    var conversionRate  = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr')
    conversionRate = await conversionRate.json();
    const cr = conversionRate.bitcoin.inr
    console.log(cr)
    
    var trendingData = await fetch ('https://api.coingecko.com/api/v3/search/trending')
    trendingData = await trendingData.json();
    const td = trendingData.coins;

    const allCryptoCards = document.getElementById('allCryptoCards')
    
    td.forEach(element => {
        var item =  element.item;
        console.log(item)
        const price =item.price_btc*cr
        var htmlToBeInserted =
        `
        <div class="oneCard">
        <img src="${item.large}" class="secSectionImages">
        <div>
            <h2>${item.name}</h2>
            <p>₹ ${Math.ceil(price)}</p>
        </div>
        </div>
        `
        allCryptoCards.innerHTML += htmlToBeInserted
    });
}