function binarySearch(numArray, key){
numArray.sort(function(a,b){return a -b });
var middeIndex = Math.floor(numArray.length / 2);
var middleElm = numArray[middeIndex];
//console.log(middleElm);
if(middleElm === key){
 return true;
}else if(middleElm < key && numArray.length>1){
return binarySearch(numArray.splice(middeIndex, numArray.length), key);

}else if(middleElm > key && numArray.length>1){
return binarySearch(numArray.splice(0, middeIndex), key);
}

return false;

}

console.log(binarySearch([12, 23, 45, 76, 88, 55, 67, 49], 55));