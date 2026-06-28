class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let mProfit = 0;
        let buy = prices[0];

        for (let i = 1; i < prices.length; i++) {
            let sell = prices[i] - buy;
            mProfit = Math.max(mProfit, sell);

            if (prices[i] < buy) {
                buy = prices[i];
            }
        }
        return mProfit;
    }
}
