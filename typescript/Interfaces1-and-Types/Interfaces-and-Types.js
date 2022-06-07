"use strict";
/** вынос типов объектов */
function print(coord) {
}
function print2(coord) {
}
/** каст к типам */
const c1 = (point) => {
    const d = point;
};
const myCanvas = document.getElementById('canvas');
const a2 = 10;
//Без cast-а
const b1 = a; // Error: Type 'number' is not assignable to type '10'.
//cast через <>
const b2 = a;
//cast через as
const b3 = a;
/**
 * Каст через <> и через as - это эквивалентные действия. Однако каст через <> не будет работать в .tsx файлах,
 * потому что такой каст будет интерпретироваться как компонент React. Поэтому предпочтительней использовать as каст.
 * По своей сути каст - это ручное преобразование одного типа в другой. Это задача возникает например тогда,
 * когда нужно более общий тип преобразовать к более конкретному: из number получить числовой литерал,
 * от базового класса перейти к конкретному наследнику и так далее.
 * */
class Base {
    constructor() {
        this.a = 10;
    }
}
class A extends Base {
    constructor() {
        super(...arguments);
        this.b = 15;
    }
}
function some(b) {
    const a = b;
}
some(new A());
/**
 * Каст может создавать проблемы. TypeScript следит за тем, чтобы преобразование одного типа осуществлялось в совместимый тип.
 * Например, нельзя преобразовать number в string.
 * */
const a3 = 10;
const b3 = a3; //Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
/**
 * Однако это ограничение можно обойти, сделав сначала каст до any, а потом до нужного типа.
 * */
const a4 = 10;
const b4 = a4;
/**
 * Иногда преобразование в несовместимый тип приходится делать. Но кастом через any не стоит злоупотреблять.
 * Использование подобной конструкции может вызвать проблемы в runtime. После приведения типов,
 * TypeScript использует для компиляции приведенный тип. Однако значение, тип которого был изменен (особенно через as any as)
 * может быть не совместимо с операциями, которые можно делать с приведенным типом. Например, не иметь каких то методов.
 * В таком случаи ошибка возникнет в runtime, а не на этапе компиляции.
 * */
const a5 = 15;
const b5 = a5;
b5.slice(1); //Runtime Error: Uncaught TypeError: b.slice is not a function
/**
 * Для того, чтобы сломать runtime при помощи каста, необязательно преобразовывать несовместимые типы.
 * Можно выполнять преобразование совместимых типов и все равно получить ошибку в runtime.
 * */
function getValue(index) {
    const tupple = [1, 1];
    return tupple[index];
}
const a6 = 15;
getValue(a6).toString(); //Runtime Error: Uncaught TypeError: Cannot read property 'toString' of undefined
