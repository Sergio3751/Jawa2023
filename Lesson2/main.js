// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let ellement = [223, 'Serhii', 32, 'Love', 36, 45.72, 'Natali', 'Book', 345, 'End'];
console.log(ellement);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let first_book = {
    title: 'Harry Potter',
    pageCount: '248',
    genre: 'fantasy',
};
console.log(first_book);
let two_book = {
    title: 'The Divine Comedy',
    pageCount: '607',
    genre: 'comedy',
};
console.log(two_book);
let three_book = {
    title: 'Rich Dead',
    pageCount: '352',
    genre: 'philosophical social',
}
console.log(three_book);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
        title: 'Harry Potter',
        pageCount: '248',
        genre: 'fantasy',
        authors: [name = 'Joanne Kathleen Rowling', age = '58'],
    }
;
console.log(book1);

let book2 = {
    title: 'The Divine Comedy',
    pageCount: '607',
    genre: 'comedy',
    authors: [name = 'Dante Alighieri', age = '758'],
};
console.log(book2);

let book3 = {
    title: 'Rich Dead',
    pageCount: '352',
    genre: 'philosophical social',
    authors: [name = 'Kiyosaki Robert T', age = '76'],
}
console.log(book3);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Maryna', username: 'Yna', password: '12'},
    {name: 'Serhii', username: 'Hii', password: '23'},
    {name: 'Ola', username: 'ola', password: '34'},
    {name: 'Vasyl', username: 'syl', password: '45'},
    {name: 'Kola', username: 'la', password: '56'},
    {name: 'Vlad', username: 'lad', password: '67'},
    {name: 'Igor', username: 'gor', password: '78'},
    {name: 'Ivan', username: 'van', password: '89'},
    {name: 'Lesia', username: 'sia', password: '90'},
    {name: 'Sergiy', username: 'iy', password: '01'},
]
console.log(users[0].password, users[1].password, users[2].password,
    users[3].password, users[4].password, users[5].password,
    users[6].password, users[7].password, users[8].password,
    users[9]);
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt('enter your x');
if (x !== 0) {
    console.log('true');
} else {
    console.log('false');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('котра година');
if (time > 0 && time <= 15) {
    console.log('1 чверть години');
} else if (time >= 16 && time <= 30) {
    console.log('2 чверть години');
} else if (time >= 31 && time <= 45) {
    console.log('3 чверть години');
} else if (time >= 45 && time <= 59) {
    console.log('4 чверть години');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt('в яку декаду');
if (day < 1 || day >= 31) {
    console.log(false);
} else if (day >= 1 && day <= 10) {
    console.log('перша декада');
} else if (day >= 11 && day <= 20) {
    console.log('друга декада');
} else if (day >= 21 && day <= 31) {
    console.log('третя декада')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).//
let day_ = prompt('день тижня')
switch (day_) {
    case'1':
        console.log('sunday');
        break;
    case'2':
        console.log('monday');
        break;
    case'3':
        console.log('tuesday');
        break;
    case'4':
        console.log('wednesday');
        break;
    case'5':
        console.log('thursday');
        break;
    case'6':
        console.log('friday');
        break;
    case'7':
        console.log('saturday');
        break;
    default:
        console.log('?????')
}
// - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 5;
let b = 10;
if (a < b) {
    console.log('ok');
} else if (a > b) {
    console.log('False');
} else if(a===b){
    console.log('False');
}
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x_ = '';
let result = x_ || 'default';
console.log(result);
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration > 5){
    console.log('супер');
}
if(coursesAndDurationArray[1].monthDuration > 5){
    console.log('супер');
}
if(coursesAndDurationArray[2].monthDuration > 5){
    console.log('супер');
}
if(coursesAndDurationArray[3].monthDuration > 5){
    console.log('супер');
}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log('супер');
}
if(coursesAndDurationArray[5].monthDuration > 5){
    console.log('супер');
}