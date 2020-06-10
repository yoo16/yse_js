
let city = {
    code: 13,
    name: 'Tokyo',
    is_active: true,
};
console.log(city.is_active);

let prefectures = [
    { name: 'Chiba', code: 12 },
    { name: 'Tokyo', code: 13 },
    { name: 'Kanagawa', code: 14 },
]
console.log(data);

let users = [
    { id: 1, name: 'A', height: 180, weight: 77.8 },
    { id: 2, name: 'B', height: 149, weight: 48.2 },
    { id: 3, name: 'C', height: 155, weight: 61.4 },
    { id: 4, name: 'D', height: 177, weight: 74.2 },
    { id: 5, name: 'E', height: 163, weight: 55.1 },
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