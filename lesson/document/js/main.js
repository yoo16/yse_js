/*
 * main.js
 */

    console.log('querySelector');
    let input = document.querySelector('input');
    console.log(input);

    console.log('querySelectorAll');
    let input_list = document.querySelectorAll('input');
    console.log(input_list);

    console.log('querySelectorAll test');
    let tests = document.querySelectorAll('div#test > input');
    console.log(tests);
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

    console.log('getElementsByName');
    let numbers = document.getElementsByName('number');
    console.log(numbers);
    //NodeList

    console.log('getElementsByTagName');
    let li_list = document.getElementsByTagName('li');
    console.log(li_list);
    //HTMLCollection

    let li = document.createElement('li');
    title.innerHTML = 'City';
    li.append('Nagoya');
    city_list.appendChild(li);
    console.log(city_list);

    // let target = $('#itemList li');
    // target.removeClass('item').addClass('item').css('color', 'red');

    let foo = '';
    if (true) {
        foo = 'bar';
    }
    console.log(foo);  //成功
