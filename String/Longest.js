function siLongest(sent) {
	let words=sent.split(" ");
	let longestWord="";

	for (let word of words) {
		if (word.length > longestWord.length) {
			longestWord=word;
		}
	}
	return longestWord;
}

console.log(siLongest(`The quick brown fox jumprs over the lazy dog`))