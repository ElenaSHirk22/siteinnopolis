// Правильный вариант
let message= 'Здравствуйте.';
let user = 'Елена';
let id = 0;

// Нерекомендуемый
let newUser ='Елена', newId = 0, newMessage = 'Требуется подтверждение. Нажмите ок.';

alert(message);
/*
const myBirthdayDate ='05.04';
// Нельзя поменять значение const. Это ошибка

myBirthdayDate ='01.05';
*/
console.log(message);

// Устаревший способ
var say ='Привет';

console.log(say);

// Переменная написанная последней и будет активна. Пишем только латиницу и номера, слитно, где следующее слово пишется с заглавной. Каждая переменная уникальна, не должно быть повторений.
// Пример. Две переменные(у меня вывоодит три, включая верхний)
let hello = 'Пожалуйста, подтвердите переход.';

let newMessage1 = 'Минуточку терпения. Сейчас вы перейдете.';

alert(hello);
alert(newMessage1);

// Или(не работающий вариант)
let hello1 = 'Прошу, подтвердите переход.';

let newMessage2 = hello1;

console.log(hello1);
console.log(newMessage1);

// string (строка)
let newMessage3 = 'Добого времени суток!';

//number (число)
newMessage3 = 12.356;

// BigInt
const BigInt = 11234567987653456n;

// bollean (булевый тип)
let nameChecked = true;
let ageChecked = false;

// null
let age = null;

//undefined
let newAge;

// объект

const a = {

}

// typeoff

// symbol