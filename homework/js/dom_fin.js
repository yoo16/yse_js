
//1
document.getElementById('user_number').innerHTML = '000001'
document.getElementById('user_name').innerHTML = 'Yohei Yoshikawa'

//2
let item_list_elements = document.querySelectorAll('#item_list > input');
item_list_elements.forEach(element => {
    element.innerHTML = 10
})