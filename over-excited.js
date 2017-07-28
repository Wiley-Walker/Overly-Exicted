var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
 
var b = sentence.join(' ');

 
var NewSentence = [];
// Create an array that contains the words in the sentence
// The addExcitement function should accept the array as the sole argument
function addExcitement (b) {
	for (var i = 0; i < b.length; i++) {
		NewSentence.push(b[i]);
		var brandNew = NewSentence.join(" ");

		console.log(brandNew);
		
	}
		NewSentence.join(" - ");
	console.log(NewSentence);
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
}
addExcitement(sentence);

// Invoke the function and pass in the array