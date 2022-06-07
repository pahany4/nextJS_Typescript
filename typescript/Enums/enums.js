"use strict";
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 1] = "Yes";
    Decision["No"] = "No";
})(Decision || (Decision = {}));
var Decision2;
(function (Decision2) {
    Decision2[Decision2["Yes"] = 1] = "Yes";
    Decision2[Decision2["No"] = calcEnum()] = "No";
})(Decision2 || (Decision2 = {}));
function calcEnum() {
    return 2;
}
/**
 * непосредственное использование енамов в функциях
 * */
function runEnum(obj) {
}
runEnum(Direction3);
/**
 * строковое представление
 * */
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
let test4 = Test.A;
let nameA = Test[test4]; // в 'nameA' будет 'A'
let c3 = 0 /* ConstEnum.A */;
