

// // var displayValue='';
// // var firstval = '';
// // var lastval = '';
// // var result;
// // var operator = '';

// // function calcu(value) {
// //     displayValue += value;
// //     document.getElementById('calculation').value = displayValue;

// // }
// // function del() {
// //     displayValue = '';
// //     document.getElementById('calculation').value = '';
// // }

// function calcu(a) {
//     document.getElementById('calculation').value += a;
// }
// function equal(){
//     let vall=document.getElementById('calculation').value;
//     let answer=eval(vall);
//     document.getElementById('calculation').value=answer;
// }
// function del() {
//     document.getElementById('calculation').value = "";
// }




// // function calculate() {
// //     // if (operator === '') {
// //     //     // No operator selected, or an incomplete operation
// //     //     del();
// //     //     return;
// //     // }

// //     // lastval = displayValue;
// //     if (operator == '+') {
// //         result = firstval + lastval;
// //     } else if (operator == '-') {
// //         result = firstval - lastval;
// //     } else if (operator == '*') {
// //         result = firstval * lastval;
// //     } else if (operator == '/') {
// //         if (parseFloat === 0) {
// //             result = 'Error: Division by zero';
// //         } else {
// //             result = firstval / lastval;
// //         }

// //     }
// //     document.getElementById('calculation').value = result;
// // }




// var firstval;
// var lastval;
// var operator;

// var result = document.getElementById('calculation');
// function calcu(number) {
//     result.value += number;
// }
// // function equal(){
// //     var finalNumber=result.value;
// //     var finalResult=eval(finalNumber);
// //     result.value= finalResult;
// // }

// function clr() {
//     result.value = "";
// }
// function del() {
//     result.value = result.value.slice(0, -1);
// }

// function calcu1(number) {
//     firstval= document.getElementById('calculation').value;
//     this.clr();
//     result.value += number;
//     operator = document.getElementById('calculation').value;
//     this.clr();
// }
// function equal() {
//     lastval = document.getElementById('calculation').value;
//     if (operator == '+') {
//         let a = parseFloat(firstval) + parseFloat(lastval);
//         document.getElementById('calculation').value = a;
//     } else if (operator == '*') {
//         let a = parseFloat(firstval) * parseFloat(lastval);
//         document.getElementById('calculation').value = a;
//     } else if (operator == '/') {
//         let a = parseFloat(firstval) / parseFloat(lastval);
//         document.getElementById('calculation').value = a;
//     } else if (operator == '-') {
//         let a = parseFloat(firstval) - parseFloat(lastval);
//         document.getElementById('calculation').value = a;
//     } else if (operator == '%') {
//         let a = parseFloat(firstval) & parseFloat(lastval);
//         document.getElementById('calculation').value = a;
//     }
// }






// var firstValue;
// var secondValue;
// var operator;
// var result = document.getElementById('calculation').value;

// function calcu(n) {
//     result.value += n;
// }

// function clr() {
//     result.value = '';
// }

// function del() {
//     result.value = result.value.slice(0. - 1);
// }

// function calcu1(nm) {
//     firstValue = document.getElementById('calculation').value;
//     result.value = "";
//     result.value += nm;
//     operator = document.getElementById('calculation').value;
//     result.value = "";
// }

// function equal() {
//     secondValue = document.getElementById('calculation').value;
//     if (operator == '+') {
//         let a = parseFloat(firstValue) + parseFloat(secondValue);
//         document.getElementById('calculation').value = a;
//     } else if (operator == '*') {
//         let a = parseFloat(firstValue) * parseFloat(secondValue);
//         document.getElementById('calculation').value = a;
//     } else if (operator == '/') {
//         let a = parseFloat(firstValue) / parseFloat(secondValue);
//         document.getElementById('calculation').value = a;
//     } else if (operator == '-') {
//         let a = parseFloat(firstValue) - parseFloat(secondValue);
//         document.getElementById('calculation').value = a;
//     } else if (operator == '%') {
//         let a = parseFloat(firstValue) & parseFloat(lastval);
//         document.getElementById('calculation').value = a;
//     }
// }




// var firstval;
// var lastval;
// var operator;

// var result = document.getElementById('calculation');
// function calcu(number) {
//     result.value += number;
// }

// // function equal(){
// //     var finalNumber=result.value;
// //     var finalResult=eval(finalNumber);
// //     result.value= finalResult;
// // }

// function clr() {
//     result.value = "";
// }
// function del() {
//     result.value = result.value.slice(0, -1);
// }

// function calcu1(number) {
//     firstval = document.getElementById('calculation').value;
//     this.clr();
//     result.value += number;
//     operator = document.getElementById('calculation').value;
//     this.clr();
// }
// function equal() {
//     lastval = document.getElementById('calculation').value;
//     if (operator == '+') {
//         let a = parseFloat(firstval) + parseFloat(lastval);
//         document.getElementById('calculation').value = a;
//     } else if (operator == '*') {
//         let a = parseFloat(firstval) * parseFloat(lastval);
//         document.getElementById('calculation').value = a;
//     } else if (operator == '/') {
//         let a = parseFloat(firstval) / parseFloat(lastval);
//         document.getElementById('calculation').value = a;
//     } else if (operator == '-') {
//         let a = parseFloat(firstval) - parseFloat(lastval);
//         document.getElementById('calculation').value = a;
//     } else if (operator == '%') {
//         let a = parseFloat(firstval) & parseFloat(lastval);
//         document.getElementById('calculation').value = a;
//     }
// }

// var fvalue;
// var svalue;
// var operator;
// var result = document.getElementById('calculation').value;
// function calcu(c) {
//     result.value += c;
// }
// function clr() {
//     result.value = "";
// }
// function del() {
//     result.value = result.value.slice(0, -1);
// }

// function calcu1(c) {
//     fvalue = document.getElementById('calculation').value;
//         this.clr();
//         result.value += c;
//         operator = document.getElementById('calculation').value;
//         this.clr();

// }

// function equal() {
//     svalue = document.getElementById('calculation').value;
//     if (operator == '+') {
//         let d = parseFloat(fvalue) + parseFloat(svalue)
//         document.getElementById('calculation').value = d
//     }
// }















// var number1 = '';
// var number2 = '';
// var operator = '';
// function equal(number1, number2, operator) {
//     if (!number1 || !number2) {
//         return "Invalid number"
//     }
//     if (!['*', '-', '/', '+'].includes(operator)) {
//         return "Invalid operator"
//     }
//     switch (operator) {
//         case "+":
//             return number1 + number2;

//         case "/":
//             return number1 * number2;
//         case "*":
//             return number1 * number2;
//         case "-":
//             return number1 - number2;
//         case "%":
//             return number1 % number2;


// var result = document.getElementById('calculation');
// var FirstValue = '';
// var operator = '';
// var secondValue = '';

// function SandNumber(number) {
//     result.value += number;
// }

// function deleteData() {
//     result.value = result.value.slice(0, -1);
// }

// function clearData() {
//     result.value = '';
//     FirstValue = '';
//     operator = '';
//     secondValue = '';
// }

// function forOperator(op) {
//     FirstValue = parseFloat(result.value);
//     operator = op;
//     result.value = '';
// }

// function calculate() {
//     secondValue = parseFloat(result.value);
//     var res;

//     switch (operator) {
//         case "+":
//             res = FirstValue + secondValue;
//             break;
//         case "-":
//             res = FirstValue - secondValue;
//             break;
//         case "*":
//             res = FirstValue * secondValue;
//             break;
//         case "/":
//             if (secondValue === 0) {
//                 res = "Error: Division by zero";
//             } else {
//                 res = FirstValue / secondValue;
//             }
//             break;
//         case "%":
//             res = FirstValue % secondValue;
//             break;
//         default:
//             res = "Invalid operator";
//             break;
//     }

//     result.value = res;
//     FirstValue = '';
//     operator = '';
//     secondValue = '';
// }



// Second Time


// var Fvalue='';
// var LValue='';
// var operator='';
// var result=document.getElementById('calculation');


// function SandNumber(n){
//     result.value +=n;
// }

// function deleteData(){
//     result.value=result.value.slice(0,-1);
// }

// function clearData(){
//     Fvalue='';
//     LValue='';
//     operator='';
//     result.value='';
// }

// function forOperator(number){
//     Fvalue=parseFloat(result.value);
//     operator=number;
//     result.value='';
// }

// function calculate(){
//     LValue=parseFloat(result.value);
//     var data;

//     switch(operator){
//    case '+':
//       data= Fvalue + LValue;
//       break;
//       case '-':
//       data= Fvalue - LValue;
//       break;
//       case '*':
//       data= Fvalue * LValue;
//       break;
//       case '/':
//       data= Fvalue / LValue;
//       break;
//       case '%':
//       data= Fvalue % LValue;
//       break;
//     }

//     result.value=data;
// }


// third Time


var FirstValue = '';
var SecondValue = '';
var operator = '';
var result = document.getElementById('calculation');


function SandNumber(num) {
    result.value += num;
}

function clear() {
    result.value = "";
}
function deleteData() {
    result.value = result.value.slice(0, -1);
}

function forOperator(a) {
    FirstValue = parseFloat(result.value);
    operator = a;
    result.value = '';
}

function calculate() {
    SecondValue = parseFloat(result.value);
    var data;
    switch (operator) {
        case '+':
            data = FirstValue + SecondValue;
            break;
        case '*':
            data = FirstValue * SecondValue;
            break;
        case '/':
            data = FirstValue / SecondValue;
            break;
        case '-':
            data = FirstValue - SecondValue;
            break;
        case '%':
            data = FirstValue % SecondValue;
            break;

    }
    result.value = data
}