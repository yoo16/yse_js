/**
 * 
 */
let item_name_1 = "どうのつるぎ";
let item_name_2 = "かわのたて";
let item_name_3 = "かわのぼうし";

/**
 * array
 */
let name_array = ['どうのつるぎ', 'かわのたて', 'かわのぼうし'];
console.log(name_array);

let name = name_array[1]
console.log(name);

let price_array = [150, 80, 100];
let price = price_array[1]
console.log(price);


console.log('--- forEach array ---')
item_array = [
    name_array,
    price_array,
]
name_array.forEach(function(name, index) {
    //console.log(name)
    console.log(name_array[index])
    console.log(price_array[index])
})
//または
item_array.forEach(function(item) {
    item.forEach(function(item, index) {
        console.log(item)
    })
})


// オブジェクトは配列のように以下の宣言はエラーになります。
// let nameList = {'どうのつるぎ', 'かわのたて', 'かわのぼうし'}  //エラー
// let priceList = {150, 80, 100}  //エラー

// let item = {'どうのつるぎ', 'かわのたて', 'かわのぼうし'}


console.log('--- item ---')
let item = { name: 'どうのつるぎ' }
console.log(item.name)

item.price = 150
console.log(item)

console.log('--- item_name key ---')
const name_key = 'name'
let item_name = item[name_key]
console.log(item_name)  //どうのつるぎ


let item1 = { name: 'どうのつるぎ', price: 150 }
let item2 = { name: 'かわのたて', price: 80 }
let item3 = { name: 'かわのぼうし', price: 100 }
console.log(item1)
console.log(item2)
console.log(item3)

let items = [
    { name: 'どうのつるぎ', price: 150 },
    { name: 'かわのたて', price: 80 },
    { name: 'かわのぼうし', price: 100 },
]
console.log(items)

// let keys = Object.keys(items)
// console.log(keys)

items.forEach(function(item, index) {
    console.log(index)
    console.log(item.name)
    console.log(item.price)
})

console.log('--- Dictionary 0 price ---')
console.log(items[0].price)
console.log('--- Dictionary 2 name ---')
console.log(items[2].name)


function Item(name, price) {
    this.name = name
    this.price = price
}

let multi_array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]