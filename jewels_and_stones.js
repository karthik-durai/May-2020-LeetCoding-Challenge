/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const numStones = S.length
  const numJewels = J.length
  
  let numJewelsInStones = 0

  for(let i = 0; i < numStones; i++) {
    for(let j = 0; j < numJewels; j++) {
      if(S[i] === J[j]) numJewelsInStones++
    }
  }
  return numJewelsInStones
};