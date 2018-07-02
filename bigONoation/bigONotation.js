
// Constant runtime 
function out(array){   //Big O Notation: "0 (1)"
console.log(array[0]);
console.log(array[1]);

}

out([1, 2, 3, 4]);
out([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



// Linear runtime
function logAll(array){   // Big O Notation "O (N)"
    for (var i = 0; i<array.length; i++){
        console.log(array[i]);
    }
}

logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7]);


//Exponential runtime
function addAndLog(array){   // Big O Notation: "O(n^2)"
    for (var i = 0; i<array.length; i++){
        for (var j = 0; j<array.length; j++){
        console.log(array[i] + array[j]);
    } 
  }
}

addAndLog(['A', 'B', 'C']); //9 pairs lgged out
addAndLog(['A', 'B', 'C', 'D']); //16 pairs logged out
addAndLog(['A', 'B', 'C', 'D', 'E']); //25 pairs logged out


//Logarithmic runtime
function binarySearch(array, key){ //Big O Notation: O (log n)
var low = 0;
var high = array.length -1 ;
var mid;
var element;
while(low<=high){
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if(element<key){
        low = mid +1 ;
    } else if (element > key){
        high = mid -1 ;
    }else {
        return mid;
    }
}
return -1;
}