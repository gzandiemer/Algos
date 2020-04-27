const bubbleSort = require('./index.js'); 

describe('bubble sort', () => {
  it('sorts 2 nums', () => {
    expect(bubbleSort([2,6,4])).toEqual([2,4,6]);
  })

  it('sorts 6 nums', () => {
    expect(bubbleSort([3,5,2,7,8,4])).toEqual([2,3,4,5,7,8]);
  })

  it('randomizes sorting', () => {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
    const arr = [getRandomInt(50),getRandomInt(50),getRandomInt(50),getRandomInt(50),getRandomInt(50),getRandomInt(50)];
    const result = bubbleSort(arr);
    expect(result).toEqual(arr.sort());
  })
})