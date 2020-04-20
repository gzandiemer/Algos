var countDeafRats = function(town) {
  // Get rid of empty spaces 
  const newTown = town.split(' ').join('')
  const pIndex = newTown.indexOf("P");
  let deafRats = 0;
  //get number of deaf rats on the left of P
  for(let i = 0; i < pIndex; i+=2){
    if(newTown[i] == "O") deafRats++;        
  }
  //get number of deaf rats on the right of P
  for(let i = pIndex+1; i < newTown.length; i+=2){
     if(newTown[i] == "~") deafRats++;        
  }

  return deafRats;
}


module.exports = countDeafRats;

// var countDeafRats = function(town) {
//   // Your code here
//   const townArr = town.split(' ').join('').split('')
//   console.log("townArr " + town)
//   const pIndex = townArr.indexOf("P");
//   console.log("pIndex " + pIndex)
//   let deafRats = 0;
//   let tailLeft = false;
//   let headLeft = false;
//   //get number of rats that go left
//   for(let i=0; i<pIndex; i+=2){
//     console.log("new char: " + townArr[i])
//      if(townArr[i]=="O"){
//         if(!tailLeft){
//            deafRats++; 
//            console.log("deafrats : " + deafRats)
//         }else {
//            tailLeft = false; 
//         }
//      } else if(townArr[i]=="~"){
//           tailLeft = true;
//      }
//   }
//   //get number of rats that go right
//   let tildaRight = false;
//   for(let i=pIndex+1; i<townArr.length; i++){
//     console.log("new char: " + townArr[i])
//      if(townArr[i]=="~"){
//         if(!headLeft){
//            deafRats++; 
//            console.log("deafrats : " + deafRats)
//         } {
//            headLeft = false;
//         }
        
//      } else if(townArr[i]=="O"){
//         headLeft = true; 
//      }
//   } 
  
//   return deafRats;
// }