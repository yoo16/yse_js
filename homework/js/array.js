
let city = {
    code: 13,
    name: 'Tokyo',
    is_active: true,
};
console.log(city.is_active);

let data = {
    name: 'Apple',
    price: 120,
    amount: 4
}
console.log(data);

let users = [
    { id: 1, name: 'A', height: 164, weight: 62.8 },
    { id: 2, name: 'B', height: 149, weight: 48.2 },
    { id: 3, name: 'C', height: 170, weight: 64.4 },
    { id: 4, name: 'D', height: 177, weight: 74.2 },
    { id: 5, name: 'E', height: 169, weight: 59.1 },
]
console.log(users);

users.push({ id: 6, name: 'F', height: 165, weight: 55.1 });
console.log(users);

users.forEach(function(user) {
    if (user.height >= 170) console.log(user.name);
});

//bmi
let bmi_list = [];
users.forEach(function(user) {
    bmi_list.push(calculateBMI(user));
});

function calculateBMI(user) {
    let bmi = user.weight / Math.pow(user.height / 100, 2);
    return bmi;
}
console.log(bmi_list);

//max min
let max = Math.max.apply(null, bmi_list);
let min = Math.min.apply(null, bmi_list);

console.log('Max');
console.log(max);
console.log('Min');
console.log(min);