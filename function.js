const greet = (name) => 'Hello ' + name 

console.log(greet('John'))

function sum(list){
    a = 0
    for (i=0; i < list.length; i++) {
        a = a + list[i]
    }
    return a
}

let test = [10,20,30]
console.log(sum(test))

const multiply = (x, y) => { return x * y }
console.log(multiply(5, 10))
module.exports = {
    multiply
};


const greater = (x,y) => { 
    if (x > y) {
        return x
    } else if (y > x){
        return y
    } else {
        return 'x and y are equal at ' + x  
    }
}

console.log(greater(11, 10)) 