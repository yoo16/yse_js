/*
 * main.js
 */

console.log('createElement');
let element_div = document.createElement('div');
console.log(element_div);

console.log('innerText');
let text_title = document.getElementById('text_title');
console.log(text_title);
text_title.innerText = '<p>Text Title!!</p>'

console.log('innerHTML');
let html_title = document.getElementById('html_title');
html_title.innerHTML = '<p>HTML Title</p>'
console.log(html_title);

console.log('style');
let style_element = document.querySelector('div#price');
style_element.style.color = '#ff0000';
style_element.style.border = '1px solid #ff0000';
style_element.style.padding = '10px';
//style_element.style.cssText = "background-color: yellow; font-size: 20px;";


console.log('appendChild');
let comment_p = document.createElement('p');
comment_p.innerHTML = 'Child Comment';
document.getElementById('parent_div').appendChild(comment_p);

document.body.appendChild(html_title);