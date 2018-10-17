function sumOfTwoNum(array,target){
  let storeMap = {};

  for(let arr of array){
    
    if(storeMap[arr]){
      return true;
    }
    storeMap[target - arr] = arr;
  }
  return false;
}

console.log(sumOfTwoNum([10,15,3,7],19));
