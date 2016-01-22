'use strict';

// Create a function that counts all the letters in a string,
// and returns an object that has the letters as keys and the counts as values.

function countLetters(word) {
	var output = {letters: "", counts: 0};
	for (var i =0; i < word.length; i++) {
		if (word[i] === "") {
			output.letters++;
		} else {
			output.counts++;
		}
		return output;
	}
}



console.log(countLetters('appletree')); // {a: 1, p: 2, l: 1, e: 3, t: 1, r: 1}
