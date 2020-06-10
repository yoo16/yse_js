console.log('querySelector');
let input = document.querySelector('input');
// console.log(input);

console.log('querySelectorAll');
let input_list = document.querySelectorAll('input');
// console.log(input_list);

console.log('querySelectorAll item_list');
let item_list_elements = document.querySelectorAll('#item_list > input');
console.log(item_list_elements)
// item_list_elements.forEach(element => {
//     element.value = 10
// })

item_list_elements.forEach(function(element) {
    element.value = 10
})
//Node List

console.log('getElementById');
let title = document.getElementById('title');
console.log(title);
let city_list = document.getElementById('city_list');
console.log(city_list);

console.log('getElementsByClassName');
let city_names = document.getElementsByClassName('city_name');
console.log(city_names);
//HTMLCollection

Array.prototype.forEach.call(city_names, function(city_name) {
    console.log(city_name.innerHTML)
})
//または
city_names = Array.from(city_names)
city_names.forEach(function(city_name) {
    console.log(city_name.innerHTML)
})

console.log('getElementsByName');
let numbers = document.getElementsByName('number');
console.log(numbers);
//NodeList

console.log('getElementsByTagName');
let li_list = document.getElementsByTagName('li');
console.log(li_list);
//HTMLCollection




let foo = '';
if (true) {
    foo = 'bar';
}
console.log(foo);  //成功
