const STATUS = [
  'Slow starter',
  'Getting there',
  'Super user',
];

const getNumberOfCompletedLessons = (arr) => arr.filter(e => e === 1).length;

const getStatus = (arr) => {
  const completedLessons = getNumberOfCompletedLessons(arr.slice(-7));
  if(completedLessons > 4) {
    return STATUS[2];
  } else if(completedLessons > 2) {
    return STATUS[1];
  } 
  return STATUS[0];
}

const getLongest = (arr) => {
  let longestStreak = 0;
  let tempStreak = 0;
  let i = 0;
  while(i<arr.length){
    if(arr[i] == 0) {
      longestStreak = Math.max(longestStreak, tempStreak)
      tempStreak = 0;
    } else {
      tempStreak++;
    }
    i++;
  }
  longestStreak = Math.max(longestStreak, tempStreak); 
  return longestStreak; 
};

const runChallenge = (arr) => typeof arr == "object" ? [
  getNumberOfCompletedLessons(arr),
  getLongest(arr),
  getStatus(arr),
] : "Sorry, wrong type.";

module.exports = {
  runChallenge,
  getNumberOfCompletedLessons,
  getStatus,
  getLongest
};