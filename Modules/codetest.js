/**
 * Create a function to return an array 
 *  after removing given number from the given array
 */




function removeIndexAll(array, number){
    var i = 0;
    while (i < array.length){
        if (array[i] === number) {
            array.splice(i, 1)
        } else {
            ++i;
        }
       }
        return array;
    }
    
console.log(`The result after removing the given number from the given array`)
    console.log(removeIndexAll([4,5,6,5,9,11,14], 5))

/**
 * Create a function to return the missing smallest positive number in given array
 */

function indexMissing (positiveNumber) {
    for ( i = 1; i < 1000; i++){
        if(!positiveNumber.includes(i)) return i ;
    }

}
console.log(`\nThe missing smallest positive number in the array given:`)
console.log (indexMissing ([-2,1,3,4,6]));



/**
 * Create a function to return the points to be marked against for over speeding.
 * 
 * For every 5mph over the speed limit, 1 point should be marked
 * 
 * function will:
 *      take userSpeed and speedLimit as input
 *      return the number of points should be marked against the license.
 */

function pointsTaken (userSpeed, speedLimit){
    for ( i=5; i < speedLimit.length ; 1++){
        if(userSpeed() - speedLimit() > i) return 1++
    }

    }
    

console.log(`\n Points taken:`)
console.log( pointsTaken[60, 80])
