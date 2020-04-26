const app = require('./index.js');

describe('Learner Activity Challenge', () => {
  it('returns an array containing 3 values', () => {
    const res = app.runChallenge([]);
    expect(res.length).toEqual(3); 
  });

  it('returns N completed lessons', () => {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
    const randomInt = getRandomInt(20);
    const nLessonsArray = [0, 0, 0, 0];
    for(let i = 0; i < randomInt; i++) {
      nLessonsArray.push(1);
    }
    const res = app.getNumberOfCompletedLessons(nLessonsArray);
    expect(res).toEqual(randomInt); 
  });

  it('returns the number of days as first element of the array', () => {
    const threeCompletedLessons = [1, 1, 1];
    const numberCompletedLessons = app.getNumberOfCompletedLessons(threeCompletedLessons);
    const res = app.runChallenge(threeCompletedLessons);
    expect(res[0]).toEqual(3);
  })

  it('returns Slow Starter', () => {
    const slowStarterArray = [0, 0, 0, 0, 0, 0, 1];
    const res = app.getStatus(slowStarterArray);
    expect(res).toEqual('Slow starter');
    const anotherSlowStarterArray = [0, 0, 0, 0, 0, 1, 1];
    const anotherRes = app.getStatus(slowStarterArray);
    expect(res).toEqual('Slow starter');
  });

  it('returns Getting there', () => {
    const gettingThereArray = [0, 0, 0, 0, 1, 1, 1];
    const res = app.getStatus(gettingThereArray);
    expect(res).toEqual('Getting there');
  });

  it('returns Super user', () => {
    const superUserArray = [1, 1, 1, 1, 1, 1, 1];
    const res = app.getStatus(superUserArray);
    expect(res).toEqual('Super user');
  });

  it('returns the status as third element of the array', () => {
    const superUserArray = [1, 1, 1, 1, 1, 1, 1];
    const res = app.runChallenge(superUserArray);
    expect(res[2]).toEqual('Super user');
  })

  it('returns 5 as longest streak', () => {
    const fiveStreak = [0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1];
    const res = app.runChallenge(fiveStreak);
    expect(res[1]).toEqual(5);
  })

  it('returns 6 as longest streak', () => {
    const sixStreak = [0, 1, 1, 1, 1, 1, 1, 0, 0, 1];
    const res = app.runChallenge(sixStreak);
    expect(res[1]).toEqual(6);
  })

  it('returns 7 as longest streak', () => {
    const sevenStreak = [0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0];
    const res = app.runChallenge(sevenStreak);
    expect(res[1]).toEqual(7);
  })

  it('shows error message (wrong type)', () => {
    const res = app.runChallenge(10);
    expect(res).toEqual('Sorry, wrong type.');
  })

  it('returns 4 as longest streak', () => {
    const res = app.getLongest([0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0]);
    expect(res).toEqual(4);
  })

  it('returns 0 as longest streak', () => {
    const res = app.getLongest([0,0,0,0,0,0,0]);
    expect(res).toEqual(0);
  })

  it('returns 1 as longest streak', () => {
    const res = app.getLongest([1]);
    expect(res).toEqual(1);
  })
});