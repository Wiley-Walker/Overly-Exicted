var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
var NewSentence = [];
// Create an array that contains the words in the sentence
// The addExcitement function should accept the array as the sole argument
function addExcitement (Sentence) {
	for (var i = 0; i < sentence.length; i++) {
		NewSentence.push(sentence[i]);

		console.log(NewSentence);
		
	}
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
}
addExcitement(sentence)

// Invoke the function and pass in the array