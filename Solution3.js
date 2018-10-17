var ascendingOrder = function(a,b){
  return a - b;
},
BinarySearch = function(array,value){

let start = 0;
let stop = array.length - 1;
let middle = Math.floor((start + stop)/2);

while(array[middle] !== value && start < stop){

  if(value < array[middle]){
    stop = middle - 1;
  }else {
    start = middle + 1;
  }

  middle = ((start + stop)/2);
}

return array[middle] === value ? middle : -1;
};



function sumOfTwoNum(array,target){

array.sort(ascendingOrder);

for(let index = 0 ; index < array.length; index++){

    let isExist = BinarySearch(array.slice(index), target - array[index]);

    if(isExist !== index && isExist > -1){
      return true;
    }
  }
  return false;
};

console.log(sumOfTwoNum([10,15,3,3],6));
