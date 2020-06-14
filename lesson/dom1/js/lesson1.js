console.log('--- querySelector ---');
let first_input = document.querySelector('input');
console.log(first_input);

console.log('--- querySelectorAll input ---');
let all_input = document.querySelectorAll('input');
console.log(all_input);

console.log('--- querySelectorAll #item_list > input ---');
let item_list_selector = document.querySelectorAll('#item_list > input');
console.log(item_list_selector)

//id
console.log('--- querySelector id=title ---');
let title_selector = document.querySelector('#title');
console.log(title_selector);

//html text
console.log('--- title innerText innerHTML ---');
console.log(title_selector.innerText);
console.log(title_selector.innerHTML);

console.log('--- getElementById id=title ---');
let title_element = document.getElementById('title');
console.log(title_element);


//class
console.log('--- querySelectorAll class=city_name---');
let city_name_class_selector = document.querySelectorAll('.city_name');
console.log(city_name_class_selector);

console.log('--- getElementsByClassName ---');
let city_name_class_elements = document.getElementsByClassName('city_name');
console.log(city_name_class_elements);

//city_name
console.log('--- querySelectorAll input[name=city_name] ---');
let input_city_name_selector = document.querySelectorAll('input[name=city_name]');
console.log(input_city_name_selector)
//NodeList

console.log('--- getElementsByName city_name ---');
let city_name_elements = document.getElementsByName('city_name');
console.log(city_name_elements);
//NodeList

//foreach
console.log('--- Array.from forEach city_name_elements---');
console.log(city_name_class_elements)
Array.from(city_name_class_elements).forEach(function(element) {
    console.log(element)
})
// city_name_class_elements.forEach(function(element) {
//     element.value = 10
// })

console.log('--- querySelectorAll forEach ---');
console.log(city_name_elements)
city_name_class_selector.forEach(function(element) {
    console.log(element)
    // let text = element.innerText
    // element.innerHTML = '<strong>' + text + '</strong>'
})
