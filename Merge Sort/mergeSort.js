function mergeSort(arr){
    if(arr.length<2) return arr;
    var middleIndex = Math.floor(arr.length/2);
    var firstHalf = arr.slice(0, middleIndex);
    var secondHalf = arr.slice(middleIndex);
   
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2){
var result = [];
while(array1.length && array2.length){
    var minElm;
    if(array1[0] < array2[0]) minElm = array1.shift();
    else minElm = array2.shift();
    result.push(minElm);
}

if(array1.length)result = result.concat(array1);
else result= result.concat(array2);
return result;
}

console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 764, 2, 9, 1]));