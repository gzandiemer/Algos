// Best Time To Buy And Sell Stocks

// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

//  @param {number[]} prices
//  @return {number}

// Source: LeetCode 30-Day-Challenge, day 5

// my solution
 

var maxProfit = function(prices) {
    let buyingPrice = 0;
    let sellingPrice = 0;
    let profit = 0; 
    let stocks = false; 
    for(let i = 0; i < prices.length; i++){
      if(stocks == false && prices[i]<prices[i+1]){
        buyingPrice = prices[i];
        stocks = true;
      } else if(stocks == true && prices[i]> prices[i+1]){
        sellingPrice = prices[i];
        profit += sellingPrice - buyingPrice;
        stocks = false;
      } else if(stocks == true && !prices[i+1] && prices[i] >= prices[i-1]){
        sellingPrice = prices[i];
        profit += sellingPrice - buyingPrice;
        stocks = false;
      }

    }
    return profit;
};

module.exports = maxProfit;