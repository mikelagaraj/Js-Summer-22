let country = `USA USA`
let countryName_split = country.split(" ")
let countryName_split_lenth = countryName_split.length
console.log(`${countryName_split_lenth}`)



const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let sentence_split = sentence.split(" ")
let sentence_length = sentence_split.length 
console.log(`Sentence => ${sentence}`)
console.log(`The number of words in the sentence is ${sentence_length}`)

let words = 'have a great day';
let words_split = words.split(' ');
let words_split_first = words_split[0].substring(0,1).toUpperCase() + words_split[0].substring(1).toLowerCase();
let words_split_second = words_split[1].substring(0,1).toUpperCase() + words_split[1].substring(1).toLowerCase();
let words_split_third = words_split[2].substring(0,1).toUpperCase() + words_split[2].substring(1).toLowerCase();
let words_split_fourth = words_split[3].substring(0,1).toUpperCase() + words_split[3].substring(1).toLowerCase();
console.log(`\nwords -> ${words}`);
console.log(`words in Titlecase -> ${words_split_first} ${ words_split_second} ${words_split_third} ${words_split_fourth}`);


let words1 = 'have a great day';
let word1_split = words1.split(' ')
let word1_split_first = word1_split[0].substring(0,1).toUpperCase();
let word1_split_second = word1_split[1].substring(0,1).toUpperCase();
let word1_split_third = word1_split[2].substring(0,1).toUpperCase();
let word1_split_fourth = word1_split[3].substring(0,1).toUpperCase();
console.log(`\n${words1}`)
console.log(` Abbreviation of the 4 word sentece is ${word1_split_first+word1_split_second+word1_split_third+word1_split_fourth}`)