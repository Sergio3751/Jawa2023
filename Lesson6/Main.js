// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str = 'hello world';
console.log(str.length);
let str1 = 'lorem ipsum';
console.log(str1.length);
let str2 = 'javascript is cool';
console.log(str2.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strUpperCase = 'hello world' + '_' + 'lorem ipsum' + '_' + 'javascript is cool';
console.log(strUpperCase.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strToLowerCase = 'HELLO WORLD' + '_' + 'LOREM IPSUM' + '_' + 'JAVASCRIPT IS COOL';
console.log(strToLowerCase.toLowerCase())
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let strBr = ' dirty string   ';
console.log(strBr.trim())
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
let strToarray = 'Ревуть воли як ясла повні';
let split = strToarray.split(' ');
console.log(split);
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// const newNumbers = numbers.map((item) => item);
// console.log(newNumbers);
for (const element of numbers) {
    numbers = numbers + element + '+';
}
console.log(numbers);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
let nums = [11, 21, 3];
// const sortNums = (nums, direction) => {
//     switch (direction) {
//         case 'ascending':
//             return nums.sort((a, b,) => a - b);
//         case 'descending':
//             return nums.sort((a, b) => b - a);
//     }
// };
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));
let sort = nums.sort((a, b) => {
    return a - b
});
console.log(sort);
let sort1 = nums.sort((a, b) => {
    return b - a
});
console.log(sort1);
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortArray = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterArray = coursesAndDurationArray.filter((c) => c.monthDuration >= 5);
console.log(filterArray);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapArray = coursesAndDurationArray.map((value, index) => {
    return {
        id: index+1,
        ...value,
    };
});
console.log(mapArray);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {cardSuit: 'spades', value: '6', color: 'black'},
    {cardSuit: 'spades', value: '7', color: 'black'},
    {cardSuit: 'spades', value: '8', color: 'black'},
    {cardSuit: 'spades', value: '9', color: 'black'},
    {cardSuit: 'spades', value: '10', color: 'black'},
    {cardSuit: 'spades', value: 'jack', color: 'black'},
    {cardSuit: 'spades', value: 'queen', color: 'black'},
    {cardSuit: 'spades', value: 'king', color: 'black'},
    {cardSuit: 'spades', value: 'ace', color: 'black'},
    {cardSuit: 'diamonds', value: '6', color: 'red'},
    {cardSuit: 'diamonds', value: '7', color: 'red'},
    {cardSuit: 'diamonds', value: '8', color: 'red'},
    {cardSuit: 'diamonds', value: '9', color: 'red'},
    {cardSuit: 'diamonds', value: '10', color: 'red'},
    {cardSuit: 'diamonds', value: 'jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'king', color: 'red'},
    {cardSuit: 'diamonds', value: 'ace', color: 'red'},
    {cardSuit: 'hearts', value: '6', color: 'red'},
    {cardSuit: 'hearts', value: '7', color: 'red'},
    {cardSuit: 'hearts', value: '8', color: 'red'},
    {cardSuit: 'hearts', value: '9', color: 'red'},
    {cardSuit: 'hearts', value: '10', color: 'red'},
    {cardSuit: 'hearts', value: 'jack', color: 'red'},
    {cardSuit: 'hearts', value: 'queen', color: 'red'},
    {cardSuit: 'hearts', value: 'king', color: 'red'},
    {cardSuit: 'hearts', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    ]
// - знайти піковий туз
console.log( cards.find((card) => card.cardSuit === 'spade' && card.value === 'ace'));
// - всі шістки
console.log(cards.filter((card) => card.value === '6'));
// - всі червоні карти
console.log(cards.filter((card) => card.color === 'red'));
// - всі буби
console.log(cards.filter((card) => card.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
console.log(cards.filter((card) => card.cardSuit === 'clubs' && ['9','10','jack','queen','king','ace'].includes(card.value)));
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let mass = cards.reduce((accumulator,cur) => {
    accumulator[cur.cardSuit].push(cur);
    return accumulator;
    }, {spades:[],diamonds:[],hearts:[],clubs:[]}
);
console.log(mass);
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter((item) =>item.modules.includes('sass')  ));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter((item) =>item.modules.includes('docker')));