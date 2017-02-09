
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
  var uniqueArr = [];
  for (var i=0; i<arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) <== -1) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueCount;
};

// find the average word length by dividing
// length of string by number of elements in array
function wordAvgFunc(submittedText, arr) {
  var letterTotal = submittedText.length;
  var wordTotal = arr.length;
  var wordAvg = letterTotal / wordTotal;
  return wordAvg;
};

//find the average sentence length by the number of
//elements in the array by the number of periods.
function sentenceAvgFunc (submittedText, arr) {
       var periodCount = submittedText.replace(/[^.]/g, "").length;
       var sentenceAvg =  arr.length / periodCount;
       return sentenceAvg;
}

function populateText(){

     var submittedText = $('#user-text').val();
     var arr = strToArrayFunc(submittedText);
     var wordCount = wordCountFunc(arr);
     var uniqueCount = findUniqueFunc(arr);
     var wordAvg = wordAvgFunc(submittedText, arr);
     var sentenceAvg = sentenceAvgFunc(submittedText, arr);

     //traverses the DOM
     var textReport = $('.js-text-report');
     textReport.find('.text-report.hidden').removeClass(hidden);
     textReport.find('.wordCount').text(wordCount);
     textReport.find('.uniqueCount').text(uniqueCount);
     textReport.find('.wordAvg').text(wordAvg);
     textReport.find('.sentenceAvg').text(sentenceAvg);
     ;
}



$('.js-text-form').submit(function(event){
     event.preventDefault();
     var submittedText = $('#user-text').val();
     populateText();
     });


$(document).ready(function() {});

/*

// generate and display analytics on text

function reportOnText(text) {
  // tokenize our text then compute our data points

  var tokens = tokenizeText(text);
  var numDistinctWords = countDistinctWords(tokens);
  var numTotalWords = tokens.length;
  var averageWordLength = getAverageWordLength(tokens);
  var averageWordsPerSentence = getAverageWordsPerSentence(text);

  // take our data and display it in the dom
  var textReport = $('.js-text-report');
  textReport.find('.js-word-count').text(numTotalWords);
  textReport.find('.js-unique-word-count').text(numDistinctWords);
  textReport.find('.js-average-word-length').text(
    averageWordLength + " characters");
  textReport.find('.js-average-sentence-length').text(
    averageWordsPerSentence + " words");
  textReport.removeClass('hidden');
}

// Watch for and handle form submissions
function watchFormSubmission() {
  $('.js-text-form').submit(function(event) {
    event.preventDefault();
    // get the text the user submitted
    var userText = $(this).find('#user-text').val();
    reportOnText(removeReturns(userText));
  });
}

// populate the html
function renderHtml(value, selector) {
    $(selector).text(value);

    // Main Function
    // watch form submission
    function submitForm() {
        $('.js-text-form').submit(function (event) {
            event.preventDefault();
            var submittedText = $(this).find('#user-text').val();
            $("dl").removeClass("hidden");
            renderHtml(wordCountFunc(submittedText), '.wordCount');
            renderHtml(findUniqueFunc(submittedText), '.uniqueCount');
            renderHtml(wordAvgFunc(submittedText), '.wordAvg');
            renderHtml(sentenceAvgFunc(submittedText), '.sentenceAvg');
        });


function htmlVarInjector(txtvar, clas) {
  var htmlP = "<p>" + txtvar + "<p>"
  $(clas).append(htmlP);
  if ($('dl').hasClass("hidden")) {
    $('dl.text-report').removeClass('hidden');
  }
}

callback

htmlVarInjector(allText, '.js-raw-text');





// equivalent to `$(document).ready(function() {...})`
$(function() {
  watchFormSubmission();
});
