var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
 
var b = sentence.join(' ');
var explamationPointCount = 0

 
var NewSentence = [];
// Create an array that contains the words in the sentence
// The addExcitement function should accept the array as the sole argument
function addExcitement (b) {
	for (var i = 0; i < b.length; i++) {
		NewSentence.push(b[i]);
		var brandNew = NewSentence.join(" ");

		var remainderCount = (i + 1) % 3;
		if (i > 1 && remainderCount == 0){
			explamationPointCount += 1;
			if (explamationPointCount == 1) { 
			console.log(brandNew + "!") 
		} else if (explamationPointCount == 2) {
			console.log(brandNew + "!!") 
		} else if (explamationPointCount == 3) 
		{ console.log( brandNew + "!!!")
	}    else  console.log(brandNew);
		}
		 
	}
		}
		// console.log(i);

		// console.log(remainderCount);

			 
		 
		
	
		 
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */

addExcitement(sentence);

// Invoke the function and pass in the array