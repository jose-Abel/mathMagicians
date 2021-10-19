function balancedBrackets(string) {
  // your code here
  let state = [];
  let top;
  let isBalanced = false;

  const stringArray = string.split('');

  for(let i = 0; i < stringArray.length; i++) {
    if(stringArray[i] === '(' || stringArray[i] === '[' || stringArray[i] === '{') {
      state.unshift(stringArray[i]);
    }
    else {
      if(!state.length) {
        isBalanced = false;
     }
      if(state.length) {
        top = state.shift();
      }
      if(top === '[' && stringArray[i] === ']' || top === '(' && stringArray[i] === ')' || top === '{' && stringArray[i] === '}') {
        isBalanced = true;
      }
    }
  }

  return !state.length && isBalanced;
}

// console.log(balancedBrackets('(hello)[world]'))
// => true

// console.log(balancedBrackets('([)]'))
// => false

// console.log(balancedBrackets('[({}{}{})([])]'))
// => true

// console.log(balancedBrackets('(((hello)))'))


module.exports = balancedBrackets
