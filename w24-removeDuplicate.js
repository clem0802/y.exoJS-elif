// STARTER code (elif)
// Removes duplicates characters from a string
function removeDuplicates(str) {
	// TODO
}

// make this true
console.log(removeDuplicates("stubbornness") === "stuborne");


/*-------------------------------------------------*/ (OK-elif)
function removeDuplicates(str) {
	const lettersArray = str.split("");
	const result = [];
	lettersArray.filter(item => {
		if(result.indexOf(item) === -1){ // if the result index doesn't exist
			result.push(item)
		}
	})
	// return result; // (6) ['m', 'o', 'n', 'd', 'a', 'y']
	return result.join("") // monday
} 
console.log(removeDuplicates("mmondday")); // (8) ['m', 'm', 'o', 'n', 'd', 'd', 'a', 'y']
console.log(removeDuplicates("mmondday") === "monday"); // true


https://www.codegrepper.com/code-examples/javascript/how+to+remove+duplicate+characters+from+string+in+javascript
/*-------------------------------------------------*/ (OK-1)
function removeDuplicates(str) {
	return str
	.split('')
	.filter(function(value, index, current){
		return current.indexOf(value) === index;
	})
	.join('');
}
console.log(removeDuplicates("stubbornness")); // stuborne
console.log(removeDuplicates("stubbornness") === "stuborne"); // true


/*-------------------------------------------------*/ (OK-2)
const str = "stubbornness";
const useSpread = [...str];
const duplicateRemove = [...new Set(useSpread)];
const string = duplicateRemove.join('')
console.log(string); // stuborne


const str = "aaadddxxxyyyooopppjhfupzw";
const useSpread = [...str];
const duplicateRemove = [...new Set(useSpread)];
const string = duplicateRemove.join('')
console.log(string); // adxyopjhfuzw


/*-------------------------------------------------*/ (OK-3, hard === elif's solution)
function removeDuplicates(chaîne) {
	let string1 = chaîne.split('');
	let string2 = [];
	for (var i in string1)
		if(string2.indexOf(string1[i]) == -1) string2.push(string1[i])
		return string2.join('');
}
console.log(removeDuplicates("stubbornness")); // stuborne
console.log(removeDuplicates("stubbornness") === "stuborne"); // true


/*-------------------------------------------------*/ (?)
function removeDups(str) {
	let charArray = str.split('');
		for (let i=0; i<charArray.length; i++){
			for (let j=i+1; j<charArray.length; i++)
			if(charArray[i] == charArray[j]){
				charArray.splice(j,1); // [1] is the end parameter of all that is deleted
				j--;
			}
		}
		return charArray.join('')
}
console.log(removeDups("stubbornness")); 
console.log(removeDups("stubbornness") === "stuborne"); 


