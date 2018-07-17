function maxStockProfit(priceArr){
    var maxProfit = -1;
    var buyPrice = 0;
    var sellPrice = 0;

    var changeBuyPrice = true;

    for (var i = 0; i<priceArr.length; i++){
        if(changeBuyPrice) buyPrice = priceArr[i];
        sellPrice = priceArr[i+1];

        if(sellPrice < buyPrice){
            changeBuyPrice = true;
        }else{
            var TempProfit = sellPrice - buyPrice;
            if(TempProfit) maxProfit = TempProfit;
            changeBuyPrice = false;

        }
        
    }

    return maxProfit;
}

console.log(maxStockProfit([12,78,19,34,45,67,99]));