let a: number = 4;
let b: string = 'sfds';
let c = true

//const d = a + c

/** массив строк */
let d: string[] = ['dasd', 'wee', 'dsdaw']

/** тип any. Можно переопределить типы (не рекомендуется) */
let e: any = 5
e = 'wewe'

/** типизация функций. Параметр 'a' - строка. Возвращает строку или число */

function test(a: string): string | number {
    return ''
}

/** стрелочная функция */

const test2 = (a: number): number => {
    return a * 2
}

/** методы массивов. */

//неявная типизация на основе данных в массиве
//d = d.map(x => x.toLowerCase())

//явная типизация
d = d.map((x: string) => x.toLowerCase())

/** типизация объектов */
// long?:number - необязательный параметр
function countCord(coord: { lat: number, long?: number }) {

}

/** проверка типов */

function printIt(id: number | string) {
    if (typeof id === 'number') {
        console.log(id.toString())
        id.toString().toUpperCase()
    } else {
        id.toUpperCase()
    }
}

function getSum(a: number | number[]): number {
    if (Array.isArray(a)) {
        return a.reduce((previousValue: number, currentValue: number) => previousValue + currentValue)
    } else {
        return a
    }
}

/** ничего невозвращающая ф-ия */
const test3 = (): void => {
    return
}

const x: undefined = undefined
const z: null = null