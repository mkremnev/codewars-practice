import { generateOHTC } from '../src/js/generateOHTC';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const seriesGenerator = (length, variance) => {
  const price = [];
  price[0] = Math.random() * 100;
  for (let i = 1; i <= length; i++) {
    price[i] = price[i - 1] * (1 + Math.random() * variance);
  }
  return price;
};

const array = seriesGenerator(getRandomInt(6, 25), 0.03);

const generateOHTCtest = (array) => {
  const tp = 3;
  const OHTC = {};
  let trailArray;
  OHTC.Date = [];
  OHTC.Open = [];
  OHTC.High = [];
  OHTC.Low = [];
  OHTC.Close = [];
  for (let i = tp; i < array.length; i++) {
    trailArray = array.slice(i - tp, i);
    OHTC.Date[i - tp] = i;
    OHTC.Open[i - tp] = trailArray[0];
    OHTC.High[i - tp] = trailArray.reduce((a, b) => (a > b ? a : b));
    OHTC.Low[i - tp] = trailArray.reduce((a, b) => (a < b ? a : b));
    OHTC.Close[i - tp] = trailArray[tp - 1];
  }
  return OHTC;
};

describe('Testing the object construction/dimensions', function () {
  it('1) Returns an object containing 5 arrays', function () {
    expect(Object.keys(generateOHTC(array)).sort()).toEqual(Object.keys(generateOHTCtest(array)).sort());
  });
  it('2) Each array has the correct length', function () {
    expect(generateOHTC(array).Date.length).toBe(generateOHTCtest(array).Date.length);
    expect(generateOHTC(array).Open.length).toBe(generateOHTCtest(array).Open.length);
    expect(generateOHTC(array).High.length).toBe(generateOHTCtest(array).High.length);
    expect(generateOHTC(array).Low.length).toBe(generateOHTCtest(array).Low.length);
    expect(generateOHTC(array).Close.length).toBe(generateOHTCtest(array).Close.length);
  });
});
describe('Testing on a random array', function () {
  expect(generateOHTC(array).Date).toEqual(generateOHTCtest(array).Date);
  expect(generateOHTC(array).Open).toEqual(generateOHTCtest(array).Open);
  expect(generateOHTC(array).High).toEqual(generateOHTCtest(array).High);
  expect(generateOHTC(array).Low).toEqual(generateOHTCtest(array).Low);
  expect(generateOHTC(array).Close).toEqual(generateOHTCtest(array).Close);
});
