// Problem 1
let studentScore = 40;
let maxScore = 50;

if(studentScore >= 91 && studentScore>100){

    console.log(`Grade A`);
} 

else if (studentScore >= 81 && studentScore >99.99) {
    console.log(`Grade B`)
}
else if (studentScore >= 71 && studentScore > 80.99){
    console.log(`Grade C`)
}
else if (studentScore >= 61 && studentScore > 70.99){
    console.log(`Grade D`)
} 
else if (studentScore >= 51 && studentScore > 60.99){
    console.log(`Grade E`)
}
else if (studentScore < 51) {
    console.log(`Grade F`)
}
else {
    console.log(`invalid score`)
}

// Problem 2
myNum = 19
if (myNum % 5 === 0){
    console.log(`number divisible by 5`)
}
else if (myNum % 3 === 0 ){
    console.log(`divisible by 3`)
}
else if (myNum % 5  === 0 && myNum % 3 === 0){
    console.log(`divisible by 5 & 3`)
}
else if (myNum % 5 !== 0 && myNum % 3 !==0 )[
    console.log(`${myNum % 5} , ${myNum % 3}`)

]