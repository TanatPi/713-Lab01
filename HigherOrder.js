const n = [1, 2, 3, 4, 5];
const m = [12345, 25, 37, 49, 81];
const square = n.map((num) => num * num);
console.log(square);

const even = n.filter((num) => num % 2 === 0);
console.log(even);

const divisibleby3_cube = (list) => {
    const divisibleby3 = list.filter((num) => num % 3 === 0)
    return divisibleby3.map((num) => num * num * num)
}

console.log(divisibleby3_cube(n));
console.log(divisibleby3_cube(m));
