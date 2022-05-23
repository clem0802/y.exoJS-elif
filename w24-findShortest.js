// STARTER code (elif)
// find shortest word length
const sentence = "Flash photography is best used in full sunlight";
function findShortestWordLength(sentence) {
	// TODO: return the number
}
findShortestWordLength(sentence);


/*------------(shortest WORD LENGTH, in a phrase)------------*/ (OK-elif)
const sentence = "Flash photography is best used in full sunlight";
function findShortestWordLength(sentence) {
	// TODO: return the number
	const wordsArray = sentence.split(" ")
	let shortest = wordsArray[0].length // no matter which index, doesn't matter
	wordsArray.forEach((item)=>{
		if(item.length < shortest){
			shortest = item.length
		}
	})
    return shortest;
}
findShortestWordLength(sentence);


/*------------(shortest WORD LENGTH, in a phrase)------------*/ (OK-1)
const sentence = "Flash photography is best used in full sunlight";
function findShortestWordLength(sentence) {
	let stringArray = sentence.split(" ");
	let orderedArray = stringArray.sort((a,b)=>{
		return a.length - b.length
	})
	return orderedArray[0].length;
}
console.log(findShortestWordLength(sentence)); // 2


/*------------(shortest WORD LENGTH, in a PHRASE)------------*/ (OK-2)
const sentence = "Flash photography is best used in full sunlight";
function findShortestWordLength(sentence) {
	return Math.min(...sentence.split(" ").map(word => word.length));
}
console.log(findShortestWordLength(sentence)); // 2


/*------------(the shortest WORD, in a PHRASE)------------*/ (OK-3)
function findShortestWord(sentence) {
	let words = sentence.split(" ");
	let shortest = words.reduce((shortestWord, currentWord) => {
		return currentWord.length < shortestWord.length ? currentWord : shortestWord;
	}, words[0]);
	return shortest;
}
console.log(findShortestWord("Flash photography is best used in a full sunlight")); // a


/*------------(the length of each word, in a PHRASE)------------*/
const sentence = "Flash photography is best used in a full sunlight";
function findWordLength(sentence) {
	return sentence.split(" ").map(word => word.length);
}
console.log(findWordLength(sentence)); // (9) [5, 11, 2, 4, 4, 2, 1, 4, 8]


/*------------(shortest word, in an ARRAY)------------*/
words = ["isaac", "pierre", "ana", "soksann", "yoshi", "hans"];
function getShortestWord(wordsArray) {
	return wordsArray.sort((a, b) => a.length - b.length)[0];
}
console.log(getShortestWord(words)); // ana


/*------------(smallest number, of an ARRAY)------------*/
const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
const min = Math.min(...arr)
console.log(min) // 4