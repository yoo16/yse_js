
let message = 'Hello' + 'World'
// alert(message)

/**
 * object
 */
// // let item = [ 'Orange', 90, 8 ]
// let item = [ name: 'Orange', price: 90, amount: 8 ]
// let item = { 'Orange', 90, 8 }
let item = { name: 'Orange', price: 90, amount: 8 }

// console.log(item[price])
// console.log(item[amount])
console.log(item.price)
// console.log(item.amount)

/**
 * object -array
 */
let cities = [
    { name: 'Chiba', code: 12 },
    { name: 'Tokyo', code: 13 },
    { name: 'Kanagawa', code: 14 },
]
cities.forEach(function(city) {
    if (city.name == 14) {
        console.log(city.name);
    }
})

let users = [
    { id: 1, name: 'A', score: 57 },
    { id: 2, name: 'B', score: 92 },
    { id: 3, name: 'C', score: 81 },
    { id: 4, name: 'D', score: 55 },
    { id: 5, name: 'E', score: 72 },
    { id: 6, name: 'F', score: 80 },
    { id: 7, name: 'G', score: 48 },
    { id: 8, name: 'H', score: 90 },
    { id: 9, name: 'I', score: 61 },
    { id: 10, name: 'J', score: 70 },
]

let length = 0
let average = 0
let sum = 0
let variance = 0
let standard_division = 0

console.log('--- sum ---')
length = users.length
document.getElementById('length').innerHTML = length

console.log('--- sum ---')
sum = calculateSum(users)
document.getElementById('sum').innerHTML = sum

console.log('--- average ---')
average = sum / users.length
document.getElementById('average').innerHTML = average

console.log('--- variance ---')
variance = calculateVariance(users, average)
document.getElementById('variance').innerHTML = variance

console.log('--- variance ---')
standard_division = Math.sqrt(variance)
document.getElementById('standard_division').innerHTML = standard_division

function calculateSum(values) {
    let sum = 0
    values.forEach(function (value) {
        sum+= value.score 
    })
    return sum
}

function calculateVariance(values, average) {
    let sum = 0
    values.forEach(function(value) {
        sum+= Math.pow(value.score - average, 2)
    })
    return sum / values.length
}

//max min
let max = Math.max.apply(null, values);
let min = Math.min.apply(null, values);

console.log('Max');
console.log(max);
console.log('Min');
console.log(min);