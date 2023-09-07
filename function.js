function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(add(1, 2, 3, 4, 5));
//let s=add;
function avg(a,b,fn)
{
    return fn(a,b)/2;
}

console.log(avg(1,2,add));

function inTocm(length)
{
    return length*2.54;
}
function cmToinch(length)
{
    return length/2.54;
}
function convertLength(fn,length)
{
    return fn(length);
}
console.log(convertLength(cmToinch,65));
console.log(convertLength(inTocm,65));
function showName()
{
    console.log(this.firstName+" "+this.lastName)
}
let person = {
    firstName: 'John',
    lastName: 'Doe',
    farewell: function(){
        console.log("Good bye, See u again, take care");
    },
    greet() {
        console.log('Hello, World!');
    },
    name:showName
};

person.greet();
person.farewell();
//person.name=showName;
person.name();