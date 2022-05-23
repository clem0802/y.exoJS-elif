// STARTER code (elif)
const sports = ["volleyball", "tennis", "cycling"];
const sport = "skiing";

function checkPresence(sports, sport) {
	// TODO
	// true or false
}

checkPresence(sports, sport);


/*----------------(.INCLUDES)----------------*/
/*----------------(Check if "skiing" is inside the "sports" ARRAY)----------------*/
const sports = ["volleyball", "tennis", "cycling"];
const sport = "skiing";

function checkPresence(sports, sport) {
	return sports.includes(sport)
}
console.log(checkPresence(sports, sport)); // false