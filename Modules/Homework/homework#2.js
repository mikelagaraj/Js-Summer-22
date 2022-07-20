const sentence1 = `Hello dear, how are you doing`
let result1 = 0;
if (length_of_sentece1 => 10)
{result1 = 15}
else {result1 = 25
}

console.log(`sentence1 => ${sentence1}`)
console.log(`length of sentence1 is ${result1}`)

const sentence2 = `HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL`
let replace_all_instance_of_a_A_with_Alpha = sentence2.replace(/a/gi , `Alpha`) 

console.log(`sentence2 => ${sentence2}`)
console.log(`${replace_all_instance_of_a_A_with_Alpha}`)


const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";

let sentence3_length = sentence3.length
console.log(`${sentence3_length}`)


let startsWithPattern = 'health'
startsWithPatter = startsWithPattern.toUpperCase()
let sentence3_startswithpattern = sentence3.toUpperCase()
let sentence3_startsWith_health = sentence3_startswithpattern.startsWith(startsWithPatter)
console.log(`Sentence3 starts with pattern ${sentence3_startsWith_health}`)

let sentence3_contains = `Body`
sentence3_contains = sentence3_contains.toUpperCase()
let sentence3_contains_body = sentence3.toUpperCase()
let sentence3_contains_word_body = sentence3_contains_body.includes(sentence3_contains)
console.log(`Sentence 3 contains the word body ${sentence3_contains_word_body}`)

let indexAt = `body`
indexAt = indexAt.toLowerCase()
let indexAt_sentence3 = sentence3.toLowerCase()
let indexOf_body_At_Sentence3 = indexAt_sentence3.indexOf(indexAt)
console.log(`${indexOf_body_At_Sentence3}`)

let lastIndex = sentence3.charAt(20)
console.log(`${lastIndex}`)