 let myobj = {
    age : 10,
    height : 6,
    color : 'red',

}

myobj[2] = 'Two',

console.log(myobj)
console.log(myobj[2])
console.log(delete myobj.age && delete myobj.height)
console.log(myobj)
const myobj_is_present = 'color' in myobj
console.log(myobj_is_present)