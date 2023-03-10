//I've invited you to fill out a form:
// Strings
// Extract the first four characters from the string below;
// "beautiful"


let voice ="beautiful";
console.log ("beautiful"[0]);
console.log("beautiful"[1]);
console.log("beautiful"[2]);
console.log("beautiful"[3]);

//Insert the following string at the tenth index of the below variable:
// "eat"
// const food = "I did not have appetite today"
const food="I did not have appetite today"
var cold=food.slice(0,10) +"eat"+ food.slice(10);
console.log(cold);
// Count how many times the following string appears in the string variable:
// 1. "the"
// 2."s"
// const story= "She sells sea shells at the sea shore"
const story="she sells sea shells at the sea shore"
const count = (story.match(/the /g) || []).length;
console.log(count);
const count1 =(story.match(/s/g) || [] ).length;
console.log(count1);
//Convert the following strings into the specified format:
// 1. UpperCase: "CONfidant"
// 2. LowerCase: "amazing", "beautiFUL"
// 3. Title case "A busy office
const firstword="CONfidant"
let answer= firstword.toUpperCase("CONfidant")
console.log(answer)

const secondword="amazing"
let answer2=secondword.toLowerCase("amazing")
console.log(answer2)
const thirdword="beautiFUL"
let answer3=thirdword.toLowerCase("beautiFUL")
console.log(answer3)
 let fourthword="A busy office"
 fourthword=fourthword.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase() +  rest.join("").toLowerCase()).join("");
 console.log(fourthword);
//  Using JavaScript, find the following words from the following strings:
// 1. "market"
// const string1 = "The lady went to the market with her sister";
// 2. "season"
// const string2 = "My favorite season is spring"

const stringz = "The lady went to the market with her sister";
let find= stringz .search("market");
console.log(find);
const stringzz = "My favorite season is spring";
let look = stringzz.search("season");
console.log(look);