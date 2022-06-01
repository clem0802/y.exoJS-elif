/*-------------------------------------------------*/
/*-------------------------------------------------*/
// (Exo given by Elif):
// Given an array of numbers
// create a function which returns the same array but with each element's index in the array added to itself. 
// This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...
// You'll only get numbers in the array.
const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [5, 4, 3, 2, 1];

function addIndex(array) {
	// Write your code here
} 

/*-------------------------------------------------*/ (by clem / OK-1)
const arrOne = [1, 2, 3, 4, 5];
arrOne[0] = 1+"[0]";
arrOne[1] = 2+"[1]";
arrOne[2] = 3+"[2]";
arrOne[3] = 4+"[3]";
arrOne[4] = 5+"[4]";
console.log(arrOne.join()); // 1[0],2[1],3[2],4[3],5[4] => the EXPECTED result
arrOne.splice(2, 0, "[w]"); 
console.log(arrOne); // (6) ['1[0]', '2[1]', '[w]', '3[2]', '4[3]', '5[4]']


const arrTwo = [5, 4, 3, 2, 1];
arrTwo[0] = 5+"[0]";
arrTwo[1] = 4+"[1]";
arrTwo[2] = 3+"[2]";
arrTwo[3] = 2+"[3]";
arrTwo[4] = 1+"[4]";
console.log(arrTwo.join()); // 5[0],4[1],3[2],2[3],1[4] => the EXPECTED result
arrTwo.splice(2, 0, "[w]"); 
console.log(arrTwo); // (6) ['5[0]', '4[1]', '[w]', '3[2]', '2[3]', '1[4]']

function addIndex(array) {
	// Write your code here
    let numbers = "";
    for(let i=0; i<array.length; i++){
        numbers = numbers + " and " + array[i]
    }
    return numbers;
} 
console.log(addIndex(arrTwo)); // and 5[0] and 4[1] and [w] and 3[2] and 2[3] and 1[4]


/*-------------------------------------------------*/ (by clem / OK-2)
const arrOne = [1, 2, 3, 4, 5];
var arr = arrOne.map((arrOne,i) => (arrOne + "[" + i + "]")).join(' ');
console.log(arr); // 1[0] 2[1] 3[2] 4[3] 5[4]

const arrOne = [1, 2, 3, 4, 5];
var arr = arrOne.map((arrOne,i) => (arrOne + "[" + i + "]"));
console.log(arr); // ['1[0]', '2[1]', '3[2]', '4[3]', '5[4]']

/*--------------*/
const arrTwo = [5, 4, 3, 2, 1];
var arr = arrTwo.map((arrTwo,i) => (arrTwo + "[" + i + "]")).join(' ');
console.log(arr); // 5[0] 4[1] 3[2] 2[3] 1[4]

const arrTwo = [5, 4, 3, 2, 1];
var arr = arrTwo.map((arrTwo,i) => (arrTwo + "[" + i + "]"));
console.log(arr); // ['5[0]', '4[1]', '3[2]', '2[3]', '1[4]']
/*--------------*/
const arrOne = [1, 2, 3, 4, 5];
for (var i = 0; i < arrOne.length; i++){
    console.log("[" + i + "] " + arrOne[i])
}
// [0] 1
// [1] 2
// [2] 3
// [3] 4
// [4] 5
/*--------------*/
const arrOne = [1, 2, 3, 4, 5];
for (var i = 0; i < arrOne.length; i++){
    console.log(arrOne[i] + i)
}
// 1
// 3
// 5
// 7
// 9


/*-------------------------------------------------*/ (by Elif / OK) (2022.05.12) (FOR)
const arrayOne = [1, 2, 3, 4, 5]
const arrayTwo = [5, 4, 3, 2, 1]
function addIndex(array){
    // (expected answer) [1,3,5,7,9]
    for(let i=0; i<array.length; i++){
        array[i] += i // (array[i] => elem) (i => elem's index)
    }
    return array;
}
console.log(addIndex(arrayOne)); // [1, 3, 5, 7, 9]
console.log(addIndex(arrayTwo)); // [5, 5, 5, 5, 5]


/*-------------------------------------------------*/ (by Elif / test) (2022.05.12) (MAP)
const arrayOne = [1, 2, 3, 4, 5]
function addIndex(array){
    return array.map((item)=>item)
}
console.log(addIndex(arrayOne)); // [1, 2, 3, 4, 5]


/*-------------------------------------------------*/ (by Elif / OK) (2022.05.12) (MAP)
const arrayOne = [1, 2, 3, 4, 5]
const arrayTwo = [5, 4, 3, 2, 1]
function addIndex(array){
    return array.map((item,index)=>item+index) 
    // there are 2 argmts now, the 2nd argmt will give the INDEX
}
console.log(addIndex(arrayOne)); // [1, 3, 5, 7, 9]
console.log(addIndex(arrayTwo)); // [5, 5, 5, 5, 5]


/*------------------------(INTERNET)------------------------*/
// Ex1(1):
array = [4,5,9,6,2,5]
#push 0 to position 1
array.splice(1,0,0)

array = [4,0,5,9,6,2,5]
#push 123 to position 1
array.splice(1,0,123)

array = [4,123,0,5,9,6,2,5]
/*------------------------(INTERNET)------------------------*/
// Ex(2): The original array:
var array = ["one", "two", "four"];
// splice(position, numberOfItemsToRemove, item)
array.splice(2,           0,              "three");
console.log(array);  // ["one", "two", "three", "four"]

/*------------------------(INTERNET)------------------------*/
// Ex(3): The original array:
const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
console.log(every_nth([1, 2, 3, 4, 5, 6], 1)); // [1,2,3,4,5,6]
console.log(every_nth([1, 2, 3, 4, 5, 6], 2)); // [2,4,6]
console.log(every_nth([1, 2, 3, 4, 5, 6], 3)); // [3,6]
console.log(every_nth([1, 2, 3, 4, 5, 6], 4)); // [4]




/*-------------------------------------------------*/ (example of Mimo lesson, exo FRIENDS)
let myFriends = ["John", "Jane", "Irna"];
function listMyFriends(array){
    let friends = "";
    for(let i=0;i<array.length;i++){
        friends = friends + " and " + array[i]
    }
    let sentence = "My friends are: " + friends;
    return sentence;
}
console.log(listMyFriends(myFriends));
// My friends are:  and John and Jane and Irna



let myFriends = ["John", "Jane", "Irna"];
function listMyFriends(array){
    let friends = "";
    for(let i=0;i<array.length;i++){
        if(i===0){
            friends = friends + array[i]
        } else {
            friends = friends + " and " + array[i]
        }
    }
    let sentence = "My friends are: " + friends;
    return sentence;
}
console.log(listMyFriends(myFriends));
// My friends are: John and Jane and Irna



/*-------------------------------------------------*/ (OK-test1)
const string1 = [5, 4, 3, 2, 1];
console.log("[" + string1.indexOf(5) + "]") // [0]
/*-------------------------------------------------*/ (OK-test2 => a répondu)
const string1 = [5, 4, 3, 2, 1];
var string2 = string1.map((string1,i) => (string1 + "[" + i + "]")).join(' ');
console.log(string2); // 5[0] 4[1] 3[2] 2[3] 1[4]
/*-------------------------------------------------*/ (OK-test3)
var exemple = ["example1", "example2", "example3"]
var O = exemple.map( (e,i) => (e + "[" + i + "],") ).join(' ');
console.log(O); // example1[0], example2[1], example3[2],
/*-------------------------------------------------*/ (-test3)
var exemple = ["example1", "example2", "example3"]
var O = exemple.map( (e,i) => (i+1+"."+e) ).join(' ');
console.log(O); // 1.example1 2.example2 3.example3
/*-------------------------------------------------*/ (-test4)
var arr = ['example1', 'example2', 'example3']
for (var i = 0; i < arr.length; i++){
    console.log((i + 1) + '. ' + arr[i])
}
// 1. example1
// 2. example2
// 3. example3
