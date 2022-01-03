/**
 * 'OHLC' stands for Open-High-Low-Close and is used in finance to help illustrate the movement of time-series data, typically the trading price of financial instruments. Whilst we will only loosely be using the concept in this Kata, for a more complete explanation please see:
 *
 * https://en.wikipedia.org/wiki/Open-high-low-close_chart
 * For this Kata you are given the task of creating a function called 'generateOHTC' that takes an array of prices as its only argument and returns an object containing 5 arrays: 'Date', 'Open', 'High', 'Low' and 'Close'.
 *
 * The 'Date', 'Open', 'High', 'Low' and 'Close' calculations will be based on a TRAILING PERIOD OF 3 UNITS. For the sake of simplicity, the 'Date' array only needs to be populated with the index of the original prices array. However, it can only begin when there is enough data to compute the trailing period calculations. Therefore if the input array has a length of 8, the OHLC and Date arrays will have a length of 5. To hopefully make things much clearer...
 *
 *
 * Best
 * function generateOHTC(array) {
 *   let res = {"Date":array.slice(3).map((_,i)=>i+3),"Open":[],"High":[],"Low":[],"Close":[]};
 *   res.Date.forEach( date => {
 *     dates = array.slice(date-3,date);
 *     res.Open.push(dates[0]);
 *     res.High.push(Math.max(...dates));
 *     res.Low.push(Math.min(...dates));
 *     res.Close.push(dates[2]);
 *   } )
 *   return res
 * }
 */

const generateOHTC = (array) => {
  const OHTC = array.reduce(
    (acc, cur, index, arr) => {
      if (index < arr.length - 3) {
        const units = arr.slice(index, index + 3);
        acc.Date[index] = index + 3;
        acc.Open[index] = arr[index];
        acc.High[index] = Math.max(...units);
        acc.Low[index] = Math.min(...units);
        acc.Close[index] = units[2];
        return acc;
      } else {
        return acc;
      }
    },
    {
      Date: [],
      Open: [],
      High: [],
      Low: [],
      Close: [],
    }
  );

  return OHTC;
};

export { generateOHTC };
