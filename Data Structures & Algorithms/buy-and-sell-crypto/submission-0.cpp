class Solution {
public:
    int maxProfit(vector<int>& prices) {
       int minimum = INT_MAX;
       int profit = 0;

       for(int i = 0; i<prices.size() ; i++){
            minimum = min(minimum , prices[i]);
            int difference = prices[i] - minimum;
            if(difference > 0){
                profit = max(difference , profit);
            }
       }
       return profit;
    }
};
