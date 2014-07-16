// regularPrint(content) – accepts a string content and prints it to the console
function regularPrint(content) {
  content = content || {};
  return content;
}


// loudPrint(content) – accepts a string content
//  and prints an upcased version
//  of it surrounded by stars (e.g. ***THIS VIDEO SUCKS***)

function loudPrint(content) {
  return ("******" + content + "********").toUpperCase();
}



 // – accepts a string content and an array of strings badWords,
 //  and returns a version of content
 //  with all instances of the strings in badWords removed


// DOESNT WORK
function omissionCensor(content, badWords) {
  var filteredString = '';
  for(var i = 0; i < content.length; i++) {
    if(badWords(content[i])) {
      filteredString += content[i];
    }
  }
  return filteredString;
}


var crap = ("there is a flower", ["flower"]);

omissionCensor(crap, function(word){
  word = word.delete;

});



// substitutionCensor(content, badWords) – accepts a string content and an array of strings badWords, and returns a version of content with all instances of the strings in badWords replaced with a random element from an array of "substitute" strings (internally defined in the function)




// publishComment(comment, badWords, censorFunction, printFunction) – accepts a string comment, an array of strings badWords, a function to censor the comment censorFunction, and a function to print the comment printFunction









