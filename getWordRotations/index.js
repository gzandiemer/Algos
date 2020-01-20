function getWordRotations(word) {
    const lettersArray = word.split("");
    
    //let's populate the container with the original word
    const combinationsContainer = [word];
    
    //we are going to rotate every letter of the word
    
    for (let i = 0; i < lettersArray.length; i++) {
       const lastCombination = combinationsContainer[0];
       
       const firstLetter = lastCombination.substring(0,1);
       const restOfTheWord = lastCombination.substring(1);
       
       const currentCombination = restOfTheWord + firstLetter;
       
       combinationContainer .unshift(currentCombination);
       
    }
    
    return;
    
 }
 
 //more elegant way of above
 
 const getWordRotations = word =>
   [...word].reduce(
     acc => [acc[0].subsstring(1) + acc[0].substring(0,1), ...act],
       [word]
   );
   
  const groupCitiesByRotatedNames = cities =>
    cities.reduce((acc, city) => {
      const cityGroup = acc.find(item =>
        getWordRotations(city.toLowerCase()).includes(item[0].toLowerCase())
        );
        
        
      cityGroup
        ? acc.splice(acc.indexOf(cityGroup), 1, [...cityGroup, city])
        : acc.push([city]);
        
       return acc;
    }, []);
       
