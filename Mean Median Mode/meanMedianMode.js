function meanMedianMode(arr){
    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr)
    };
}

function getMean(arr){
var mean = 0;
for (var i = 0; i<arr.length; i ++){
    mean +=arr[i];
}
var result = mean/arr.length;

return result;
}


function getMedian(arr){
arr.sort(function(a,b){return a -b });
var median;

if (arr.length % 2 !== 0){
    median = arr[Math.floor(arr.length / 2)];
}else{
    var mid1 = arr[(arr.length / 2) - 1];
    var mid2 = arr[arr.length / 2];
    median = (mid1 + mid2) / 2;
}

return median;
}



function getMode(arr){

   var modeObj = {};
   
   arr.forEach(num => {
       if (!modeObj[num])
       modeObj[num] = 0;
       modeObj[num]++;

   });

   var maxFrequency = 0;
   var modes = [];
   for (var num in modeObj){
    if(modeObj[num] > maxFrequency){
        modes = [num];
        maxFrequency = modeObj[num];
    }   else if (modeObj[num] === maxFrequency)
         modes.push(num); 
   
   }
   if (modes.length === Object.keys(modeObj).length)
       modes = [];

       
     return modes; 
}

//console.log(getMode([9, 9, 4, 4, 7, 7]));
//console.log(getMean([23, 29, 20, 32, 23, 21, 33, 25]));
//console.log(getMedian([23, 29, 20, 32, 23, 21, 33, 25]));

console.log(meanMedianMode([9, 9, 4, 4, 7, 7,70,90]));