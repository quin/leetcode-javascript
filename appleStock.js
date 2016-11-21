var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
function getMaxProfit(stockPricesYesterday) {
  if (stockPricesYesterday.length < 2) {
    throw error('not enougth stocks yo')
  }

  var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];
  var lowestNumber = stockPricesYesterday[0];

  for (var i = 1; i < stockPricesYesterday.length; i++) {
    var current = stockPricesYesterday[i];
    var profit = current - lowestNumber;

    maxProfit = Math.max(maxProfit, profit);
    lowestNumber = Math.min(current, lowestNumber);

  }

  return maxProfit;
}

getMaxProfit(stockPricesYesterday)
