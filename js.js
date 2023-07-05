var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
debugger
var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",

    "method": "GET",
    "headers": {}
}
// $.ajax(liveprice).done(function(response){
//     btc.innerHTML=response.bitcoin.inr;
//     ethereum.innerHTML=response.ethereum.inr;
//     dogecoin.innerHTML=response.dogecoin.inr;
// })

$.ajax(liveprice).done(function(response){
    btc.innerHTML=response.bitcoin.inr;
        ethereum.innerHTML=response.ethereum.inr;
        dogecoin.innerHTML=response.dogecoin.inr;
});