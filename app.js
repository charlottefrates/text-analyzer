
 // convert string to array
function strToArrayFunc(submittedText) {
     var arr = submittedText.toLowerCase().split('.').join('').split('?').join('').split('!').join('').split(' ');
     return arr;
 };

 // count word total by counting elements in array
function wordCountFunc(arr) {
     var wordTotal = arr.length
     return wordTotal;
};

// find unique words in the array using a loop
function findUniqueFunc(arr) {
     var uniqueArr = [ ];
     for (var i=0; i<arr.length; i++) {
          if (uniqueArr.indexOf(arr[i]) <= -1) {
               uniqueArr.push(arr[i]);
          }
  }
     return uniqueArr.length;
};

// find the average word length by dividing
// length of string by number of elements in array
//PLUS the spaces!
function wordAvgFunc(submittedText, arr) {
     var letterTotal = arr.join('').length;
     var wordTotal = arr.length;
     var wordAvg = letterTotal / wordTotal;
     return wordAvg;
};

//find the average sentence length by the number of
//elements in the array by the number of periods.
function sentenceAvgFunc (submittedText, arr) {
     //Conditional Ternary Expression condition ? expr1:expr2
     var periodCount = submittedText.replace(/[^.]/g, "") ? submittedText.replace(/[^.]/g, "").length : 1;
     var sentenceAvg =  arr.length / periodCount;
     return sentenceAvg;
}

//Display Results
function populateText(){

     // .trim() removes all the white space within the string
     var submittedText = $('#user-text').val().trim();

     var arr = strToArrayFunc(submittedText);

     // if you didnt have the wordcount as a length and just had array you can also add .length here
     var wordCount = wordCountFunc(arr);

     var uniqueCount = findUniqueFunc(arr);

     var wordAvg = wordAvgFunc(submittedText, arr);

     var sentenceAvg = sentenceAvgFunc(submittedText, arr);


     //traverses the DOM

  var textReport = $('.js-text-report');

     textReport.removeClass('hidden');

     textReport.find('.wordCount').text(wordCount);

     textReport.find('.uniqueCount').text(uniqueCount);

     textReport.find('.wordAvg').text(wordAvg);

     textReport.find('.sentenceAvg').text(sentenceAvg);


}

function formSubmit(){
    $('.js-text-form').submit(function(event){
     event.preventDefault();
     var submittedText = $('#user-text').val();
     populateText(submittedText);
     });
}


$(document).ready(function(){

 //event handle click must be within .ready before the page loads or it wont work
  formSubmit();

});
