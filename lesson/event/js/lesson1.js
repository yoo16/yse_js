
/**
 * click
 */
let click_btn = document.getElementById('click_btn')
message_btn.addEventListener('click', showMessage)

function showMessage() {
    document.getElementById('click_result').innerHTML = 'ようこそ'
}

/**
 * change
 */
let input1 = document.getElementById('input1')
input1.addEventListener('change', function () {
    document.getElementById('input1_message').innerHTML = this.value
})

/**
 * input
 */
let input2 = document.getElementById('input2')
input2.addEventListener('input', function () {
    document.getElementById('input2_message').innerHTML = this.value
})

/**
 * mouseover mouseout
 */
let mouse_area = document.getElementById('mouse_area')
mouse_area.addEventListener('mouseover', function (event) {
    this.innerHTML = 'マウスオーバー'
})
mouse_area.addEventListener('mouseout', function (event) {
    this.innerHTML = 'マウスアウト'
})

/**
 * mousemove
 */
let mouse_move_area = document.getElementById('mouse_move_area')
mouse_move_area.addEventListener('mousemove', function (event) {
    //let message = `(x, y) = (${event.pageX} ${event.pageY})`
    let message = '(x, y) = (' + event.pageX + ',' + event.pageY + ')'
    this.innerHTML = message
})

/**
 * window resize
 */
window.addEventListener('resize', function() {
    let message = '(width, height) = (' + window.innerWidth + ',' + window.innerHeight + ')'
    document.getElementById('resize_result').innerHTML = message
}, false );


/**
 * window scroll
 */
let scroll_btn = document.getElementById('scroll_btn')
scroll_btn.addEventListener('click', windowScroll)

function windowScroll() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    //window.scoll(0, 50);
}
