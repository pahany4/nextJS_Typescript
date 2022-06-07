"use strict";
let a = 4;
let b = 'sfds';
let c = true;
//const d = a + c
/** массив строк */
let d = ['dasd', 'wee', 'dsdaw'];
/** тип any. Можно переопределить типы (не рекомендуется) */
let e = 5;
e = 'wewe';
/** типизация функций. Параметр 'a' - строка. Возвращает строку или число */
function test(a) {
    return '';
}
/** стрелочная функция */
const test2 = (a) => {
    return a * 2;
};
/** методы массивов. */
//неявная типизация на основе данных в массиве
//d = d.map(x => x.toLowerCase())
//явная типизация
d = d.map((x) => x.toLowerCase());
/** типизация объектов */
// long?:number - необязательный параметр
function countCord(coord) {
}
/** проверка типов */
function printIt(id) {
    if (typeof id === 'number') {
        console.log(id.toString());
        id.toString().toUpperCase();
    }
    else {
        id.toUpperCase();
    }
}
function getSum(a) {
    if (Array.isArray(a)) {
        return a.reduce((previousValue, currentValue) => previousValue + currentValue);
    }
    else {
        return a;
    }
}
/** ничего невозвращающая ф-ия */
const test3 = () => {
    return;
};
const x = undefined;
const z = null;
