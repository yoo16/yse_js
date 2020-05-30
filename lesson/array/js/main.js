/**
 * 変数（へんすう）
 */
let flower1 = "サクラ";
let flower2 = "チューリップ";
let flower3 = "ヒマワリ";

/**
 * array
 */
let flowers = ['サクラ', 'チューリップ', 'ヒマワリ'];
//console.log(flowers);

/**
 * new Array()
 */
let array1 = new Array();

console.log(array1);
console.log(typeof array1);

/**
 * []
 */
let array2 = [];

console.log(array2);
console.log(typeof array2);

/**
 * object - array
 */
let score = {
    user1: [90, 80, 74],
    user2: [76, 52, 68]
}
console.log(score);
console.log(score.user2);

/**
 * array - array
 */
var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
console.log(matrix);
console.log(matrix[2]);

/**
 * create array
 */
let cities = ['Tokyo', 'Osaka', 'Yokohama'];
console.log(cities);

/**
 * Array.length
 */
let length = cities.length;
console.log(length);

/**
 * array push
 */
cities.push('Nagoya');
console.log(cities);

/**
 * array pop
 */
cities.pop();
console.log(cities);

/**
 * array shift
 */
cities.shift();
console.log(cities);

/**
 * array unshift
 */
cities.unshift('Tokyo');
console.log(cities);

/**
 * array indexOf
 */
let index = cities.indexOf('Tokyo');
console.log(index);

/**
 * array splice
 */
cities.splice(1, 1);
console.log(cities);

/** 
 * array iterator
 */
cities.forEach(function(city, index, array) {
    console.log(city);
    console.log(index);
});

/** 
 * array object iterator
 */
let prefectures = [
    { code: "1", label: "北海道" },
    { code: "2", label: "青森県" },
    { code: "3", label: "岩手県" },
    { code: "4", label: "宮城県" },
    { code: "5", label: "秋田県" },
    { code: "6", label: "山形県" },
    { code: "7", label: "福島県" },
    { code: "8", label: "茨城県" },
    { code: "9", label: "栃木県" },
    { code: "10", label: "群馬県" },
    { code: "11", label: "埼玉県" },
    { code: "12", label: "千葉県" },
    { code: "13", label: "東京都" },
    { code: "14", label: "神奈川県" },
    { code: "15", label: "新潟県" },
    { code: "16", label: "富山県" },
    { code: "17", label: "石川県" },
    { code: "18", label: "福井県" },
    { code: "19", label: "山梨県" },
    { code: "20", label: "長野県" },
    { code: "21", label: "岐阜県" },
    { code: "22", label: "静岡県" },
    { code: "23", label: "愛知県" },
    { code: "24", label: "三重県" },
    { code: "25", label: "滋賀県" },
    { code: "26", label: "京都府" },
    { code: "27", label: "大阪府" },
    { code: "28", label: "兵庫県" },
    { code: "29", label: "奈良県" },
    { code: "30", label: "和歌山県" },
    { code: "31", label: "鳥取県" },
    { code: "32", label: "島根県" },
    { code: "33", label: "岡山県" },
    { code: "34", label: "広島県" },
    { code: "35", label: "山口県" },
    { code: "36", label: "徳島県" },
    { code: "37", label: "香川県" },
    { code: "38", label: "愛媛県" },
    { code: "39", label: "高知県" },
    { code: "40", label: "福岡県" },
    { code: "41", label: "佐賀県" },
    { code: "42", label: "長崎県" },
    { code: "43", label: "熊本県" },
    { code: "44", label: "大分県" },
    { code: "45", label: "宮崎県" },
    { code: "46", label: "鹿児島県" },
    { code: "47", label: "沖縄県" }
];

prefectures.forEach(function(prefecture, index) {
    // console.log(prefecture.code);
    // console.log(prefecture.label);
    // console.log(index);
});