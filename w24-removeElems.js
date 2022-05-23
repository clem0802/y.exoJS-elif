// STARTER code (elif)
// remove array elements
const conversationTopics = ["holiday", "work", "news", "weather"];
const topic = "news";
function removeTopic(conversationTopics, topic) {
	// TODO
}
removeTopic(conversationTopics, topic);


/*-------------------------------------------------*/ (OK-elif)
const conversationTopics = ["holiday", "work", "news", "weather"];
const topic = "news";
function removeTopic(conversationTopics, topic) {
	if(conversationTopics.indexOf(topic) !== -1) {
		const newArray =  conversationTopics.filter(item =>{
			return item !== topic
		})
		return newArray
	}
}
removeTopic(conversationTopics, topic); // (3) ['holiday', 'work', 'weather']


const conversationTopics = ["holiday", "work", "news", "weather"];
const topic = "news";
function removeTopic(conversationTopics, topic) {
	if(conversationTopics.indexOf(topic) !== -1) {
		const newArray =  conversationTopics.filter(item => item !== topic);
		return newArray
	}
}
removeTopic(conversationTopics, topic); // (3) ['holiday', 'work', 'weather']


/*-------------------------------------------------*/ (OK-1)
const conversationTopics = ["holiday", "work", "news", "weather"];
const topic = "news";
newTopics = conversationTopics.filter(function(item){
	return item !== topic
})
console.log(newTopics); // (3) ['holiday', 'work', 'weather']


/*----------------------(ex internet)----------------------*/
var array = [1, 2, 3, 4, 5, 3]
var value = 3
arr = array.filter(function(item) {
    return item !== value
})
console.log(arr) // (4) [1, 2, 4, 5]


/*-------------------------------------------------*/
https://linuxhint.com/remove-elements-from-an-array-in-javascript/
// POP - removes from the End of an Array
// SHIFT - removes from the Beginning of an Array
// SPLICE - removes from a specific Array index
// FILTER - allows to programatically remove elements from an Array
/*-------------------------------------------------*/