// Input  [10, 15, 3, 7], Target : 17
// if yes then return true else false.

// Brute force way.
//Solution 1:

function sumOfTwoNum(arr,target){

for(let i = 0 ; i < arr.length; i ++){
  for(let j = 0; j < arr.length; j++){
    if(i !== j && (arr[i] + arr[j]) === target){
        return true;
      }
    }
  }
  return false;
};

console.log(sumOfTwoNum([10,15,3,7],18));
