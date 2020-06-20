
//addEventListener
let message_btn = document.getElementById('message_btn')
//let message_btn = document.querySelector('#message_btn')

message_btn.addEventListener('click', showMessage)

function showMessage() {
    alert('Click Event!');
}

let click_btn = document.getElementById('click_btn')
click_btn.addEventListener('click', showMessage)

let remove_btn = document.getElementById('remove_btn')
remove_btn.addEventListener('click', function() {
    click_btn.removeEventListener('click', showMessage)
})

