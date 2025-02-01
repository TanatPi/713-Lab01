const object = {
    name: "John",
    age: 30,
    city: "New York"
}

console.log(object.name)
const jsonStr = JSON.stringify(object);
console.log(jsonStr)

const studentobject1 = {
    name: "James",
    age: 18,
    GPA: 3.0
}
const studentobject2 = {
    name: "Arthur",
    age: 19,
    GPA: 1.5
}

const GPAcheck = (object) => {
    if (object.GPA > 2.0) {
        return JSON.stringify(object);
    } else {
        return 'คุณ ' + object.name + ' พ้นสภาพ';
    }
}

console.log(GPAcheck(studentobject1))
console.log(GPAcheck(studentobject2))