function reserverWords(string){
    var wordsArr = string.split(' ');
    var reverseWordArr = [];

    wordsArr.forEach(word => {
      var reverseWord = '';
      for (var i =word.length -1; i>=0; i--){
          reverseWord += word[i];
      }  
      reverseWordArr.push(reverseWord);
    });
     return reverseWordArr.join(' ');
}
console.log(reserverWords('this is a string of words'));