/**
 * Дженерики помогают избегать дублирование кода
 * */

// без дженериков
function logTime(num: number): number {
    console.log(new Date())
    return num
}
function logTime1(num: string): string {
    console.log(new Date())
    return num
}
logTime(5)
logTime1('lll')

// с дженериками
function logTime2<T>(num: T): T {
    console.log(new Date())
    return num
}

logTime2<string>('dasd')
logTime2<number>(5)


function logTime3<T>(num: T): T {
    /** проверка на тип. Если 'num' - строка, то 'num' доступны методы строки */
    if (typeof num === 'string') {
        num.toUpperCase()
    }
    return num
}

/** пример трансформации типов */

// например перевод в строку. T - число, F - строка. Т.е. на вход число или строка, а на выход строка

interface MyInterface {
    transform: <T, F>(a: T) => F
}

/** Дженерики в классах */

class MyGenClass<T> {
    value!: T
}

const myClass = new MyGenClass<number>()
myClass.value

/** наследование дженериков */

interface TimeStamp {
    stamp: number
}

function logTimeStamp<T extends TimeStamp>(num: T): T{
    console.log(num.stamp)
    return num
}
