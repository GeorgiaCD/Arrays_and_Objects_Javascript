/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */

unitedKingdom[1].touristAttractions = ["London Eye", "Big Ben", "The Shard"];

// console.log(unitedKingdom);
console.log(unitedKingdom[1]);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

// find the index of wales 
// unitedKingdom[2] 
walesIndex = unitedKingdom.findIndex( country => country.name == "Wales");
wales = unitedKingdom[walesIndex];

wales.capital = "Cardiff";
console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */
northernIrelandIndex = unitedKingdom.findIndex( country => country.name == "Northern Ireland");
northernIreland = unitedKingdom[northernIrelandIndex];

northernIrelandKeys = Object.keys(northernIreland);

console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

// assign the index of the country 
scotlandIndex = unitedKingdom.findIndex( country => country.name == "Scotland");
englandIndex = unitedKingdom.findIndex( country => country.name == "England");
walesIndex = unitedKingdom.findIndex( country => country.name == "Northern Ireland");
northernIrelandIndex = unitedKingdom.findIndex( country => country.name == "Northern Ireland");

// assign the country variables to their object in the array
scotland = unitedKingdom[scotlandIndex];
england = unitedKingdom[englandIndex];
wales = unitedKingdom[walesIndex];
northernIreland = unitedKingdom[northernIrelandIndex];

// find the extremities 
let maxPop = Math.max(...unitedKingdom.map(country => country.population));
let minPop = Math.min(...unitedKingdom.map(country => country.population));

// if statement 
if(scotland.population == minPop){
  console.log("Scotland has the smallest population");
} if(scotland.population == maxPop){
  console.log("Scotland has the largest population");
} else {
  console.log("Scotland population is somewhere in the middle");
}

// print out to check
console.log(`The max population is: `, maxPop);
console.log(`The min population is: `, minPop);
console.log(`Scolands population is: `, scotland.population);