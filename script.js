/* define arrays containing different parts of message
 to be randomly selected in order to complete final message */

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const actions = [
    "be visiting a museum",
    "be going to the theatre",
    "be having a good time",
    "have lunch",
    "have dinner",
    "be going to the movies",
    "have an argument"    
];
const places = ["Paris", "London", "Toronto", "Shanghai", "town", "Acapulco"];
const persons = ["John", "Jack", "Harry", "Jane", "Buster", "Ann", "Isabelle", "Sofia"];

// define function that will take an array as argument and return a random element of the array
function selectRandomMessageComponent (array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// output final message 
console.log("Predicting the Future:");
console.log(`Next ${selectRandomMessageComponent(days)}, you will ${selectRandomMessageComponent(actions)} in ${selectRandomMessageComponent(places)} with ${selectRandomMessageComponent(persons)}!`);