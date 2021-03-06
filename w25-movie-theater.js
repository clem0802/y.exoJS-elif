// Write a function that checks whether a person can watch an MA15+ rated movie. 
// One of the following two conditions is required for admittance:
// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. 
// Return a boolean.

function acceptIntoMovie(age, isSupervised) {
	// Write your code here.
}
console.log(acceptIntoMovie(13,true)) // Try with different values also. 



/*-------------------------------------------------*/ (by clem / OK-1)
function acceptIntoMovie(age, isSupervised) {
	// Write your code here.
	if (age>=15 || isSupervised === true){
		return "Movie admittance accepted";
	}
	return "Movei admittance denied";
}
console.log(acceptIntoMovie(13,true)) // Movie admittance accepted

/*-------------------------------------------------*/ (by clem / OK-2)
function acceptIntoMovie(age, isSupervised) {
	// Write your code here.
	if (age >= 15 || isSupervised === true){
		return "Movie admittance accepted";
	} 
	return "Movei admittance denied";
}
console.log(acceptIntoMovie(10,false)) // Movie admittance denied

/*-------------------------------------------------*/ (OK-3)
function acceptIntoMovie(age, isSupervised){
	return age >= 15 || isSupervised ? "Movie allowed" : "Movie denied";
}
console.log(acceptIntoMovie(9, false)); // Movie denied

/*-------------------------------------------------*/ (OK-4)
function acceptIntoMovie(age, isSupervised){
	return age >= 15 || isSupervised;
}
console.log(acceptIntoMovie(9, false)); // false