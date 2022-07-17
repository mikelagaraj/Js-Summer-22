let fruits = [`Banana`, `Orange`, `Apple`, `Grapes`,`Melon`,`Watermelon`
];
console.log(fruits);
console.log(fruits.length);
let fruits1 = fruits.toString();
console.log(fruits1);
console.log(fruits1.toLowerCase());
/** 
 * To print fruit that starts with letter 'B'
*/
// console.log(fruits.abbr(B)) 
if (fruits[0].substring(0,1) === 'B'){
    console.log(fruits[0])
} else if (fruits[1].substring(0,1) === 'B'){
    console.log(fruits[1])
}
 // for (intilization; condition; increment/decriment ) {}
let pen = 5;
for (let i = 1; i <= fruits.length -1; i++)
    if (fruits[i].toLowerCase().substring(0,1) === 'b')
{
    console.log(`\n ${fruits[i]}`)
}

let mynum = 2
for ( let i=0; i <= 10; i++){
    console.log(`${mynum} x ${i} = ${mynum * i}`)

}