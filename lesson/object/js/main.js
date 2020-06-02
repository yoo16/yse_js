
const traffic_light = {
    blue: 'Go',
    yellow: 'Slow down',
    red: 'Stop'
}

let object1 = new Object();
console.log(object1);

let object2 = {};
console.log(object2);

let city = {
    code: 13,
    name: 'Tokyo',
    lat: 35.652832,
    lng: 139.839478,
    is_active: true,
};
let code = city.code;
let name = city.name;
let lat = city.lat;
let is_active = city.is_active;

console.log(code);
console.log(name);
console.log(lat);
console.log(is_active);

city.is_acitve = false;
console.log(city.is_acitve);

city.kana = '東京';
console.log(city.kana);

console.log('vendor');
let vendor = {}
const key1 = 'Windows';
const key2 = 'Mac';
const key3 = 'Android';
//vendor.key1 = 'Microsoft';
//vendor.key2 = 'Apple';
//vendor.key3 = 'Google';

vendor[key1] = 'Microsoft';
vendor[key2] = 'Apple';
vendor[key3] = 'Google';

vendor['iOS'] = 'Apple';
vendor['Windows95'] = 'Microsoft'

let car = {}
car.owner = {};
car.owner.name = 'User1';
car.owner.is_active = true; 

console.log(car);


// let object;
// for (object = vendor; object !== null; object = Object.getPrototypeOf(object)) {
//     let result = Object.getOwnPropertyNames(object)
//     console.log(result);
// }