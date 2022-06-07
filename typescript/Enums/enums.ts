enum Direction2 {
    Up = 1,
    Down,
    Left,
    Right
}
enum Direction {
    Up,
    Down,
    Left,
    Right
}
enum Direction3 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

enum Decision {
    Yes = 1,
    No = 'No'
}
enum Decision2 {
    Yes = 1,
    No = calcEnum()
}

function calcEnum() {
    return 2
}

/**
 * непосредственное использование енамов в функциях
 * */

function runEnum (obj: {Up: string}) {

}

runEnum(Direction3)


/**
 * строковое представление
 * */

enum Test {
    A
}

let test4 = Test.A
let nameA = Test[test4] // в 'nameA' будет 'A'

/**
 * константовые енамы
 * */

const enum ConstEnum {
    A,
    B
}

let c3 = ConstEnum.A


enum Dice {
    One = 1,
    Two
}

function ruDice (dice: Dice) {
    switch (dice) {
        case Dice.One:
            return 'один'
        case Dice.Two:
            return 'два'
    }
}

/**
 * never тип переменной, которая никогда не примет данное значение
 * */

enum Dice1 {
    One = 1,
    Two,
    Tree
}

function ruDice1 (dice: Dice1) {
    switch (dice) {
        case Dice1.One:
            return 'один'
        case Dice1.Two:
            return 'два'
        case Dice1.Tree:
            return ''
        default:
            const a: never = dice
    }
}