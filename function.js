function greet(name){
    return 'Hello ' + name
}

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

