function diagonalDifference(arr) {
    // Write your code here
    let firstSum = 0;
    let secondSum = 0;
    let k = arr.length - 1;
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === j) {
                firstSum += arr[i][j];
            }
            if (j === k) {
            secondSum += arr[i][j];
            }
            
        }
        k--;
        if (k < 0) {
            k = arr.length - 1;
        }
    }
    return Math.abs(firstSum - secondSum);

}