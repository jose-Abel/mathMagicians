function aVeryBigSum(ar) {
  // Write your code here
  let counter = 0;
  for(let i = 0; i < ar.length; i++) {
      counter += ar[i];   
  }
  return counter;
}