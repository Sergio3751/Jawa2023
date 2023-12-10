// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function planeRectangle(a, b) {
    return a * b;
}

let pR = planeRectangle(5, 10);
console.log(pR)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circlePlane(Pi, r) {
    return Pi * r ** 2;
}

let cP = circlePlane(3.14, 10);
console.log(cP)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderPlane(Pi, r, h) {
    return 2 * Pi * r * (h + r);
}

let cyP = cylinderPlane(3.14, 5, 10);
console.log(cyP);

// - створити функцію яка приймає масив та виводить кожен його елемент
function mass(array) {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}

mass(['Sergiy', 39, 'Kinash'])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(a) {
    document.write(
        `<p>${a}</p>`
    );
}

paragraf('Natalija')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function fanUl(a, b, c) {
    document.write(
        `<ul>
            <li>${a}</li>
            <li>${b}</li>
            <li>${c}</li>
         </ul>`
    )
}

fanUl('Happy', 'New', 'Year')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulFan(text, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}

ulFan('Cool', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function write(arr) {
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</li>`);
}

write([39, `Serhii`, true])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let peoples = [
    {id: 1, name: 'vasa', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'ola', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'ola', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true},
];

function users() {
    for (const people of peoples) {
        document.write(`
        <div>
            <ol>
            <li>${people.id}</li>
            <li>${people.name}</li>
            <li>${people.age}</li>
            _______________________
            </ol>
        </div>`);
    }
}

users(peoples)
// - створити функцію яка повертає найменьше число з масиву

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(a, b, c) {
//     return result = a + b + c;
// }
// let res=sum(1,2,10)
// console.log(res)
function sum(number) {
    let result = 0;
    for (let i = 0; i < number.length; i++) {
        result = result + number[i];
    }
    return result;
}

console.log(`nam =`, sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаповідних індексах
function swap(arr, index1, index2,) {
    let waneIndex1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = waneIndex1;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const sum of currencyValues) {
        if (sum.currency === exchangeCurrency) {
            return sumUAH / sum.value
        }
    }
}

const result = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD')
console.log(result);
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250