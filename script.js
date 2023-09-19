// 1.Вычислите сумму чисел массива, используя метод reduce().
// const numbers = [1, 8, 7, 12];

// const sum = numbers.reduce((acc, el) => {
//   if (el > 0) {
//     return acc + el;
//   }
//   return acc;
// }, 0);

// console.log(sum);//28

//2.Вычислите произведение чисел массива, используя метод reduce().
// const array = [5, 7, 9, 2];

// const result = array.reduce((acc, el) => {
//   return acc * el;
// }, 1);

// console.log(result);

// //3.Преобразуйте массив строк в одну строку с помощью метода reduce().
// const arrOfStrings = ["Hello", " ", "world", "!"];

// const singleString = arrOfStrings.reduce((acc, currentString) => {
//   return acc + currentString;
// }, "");

// console.log(singleString);
// //4.Подсчитайте количество отрицательных значения в массив, используя метод reduce().
// const arr = [2, -8, 7, -5, 10, -12];

// const result = arr.reduce((acc, el) => {
//   el < 0? acc++: null
//
//    return acc

//     }, 0);

// console.log(countNegative);

// //5.Найдите максимальное значение в массиве, используя метод reduce().

// const arr = [12, 34, 56, 78, 90, 23, 45];

//  const max = arr.reduce((acc,el,ind,arr) => {
//     return acc < el ? el : acc;
//   }, arr[0])

//   console.log(max);

//6 Найдите минимальное значение в массиве, используя метод reduce().
// const arr = [-5, -17, 12, 34, 56, 78, 90, 23, 45];
// const min = arr.reduce((acc, el, ind, arr) => {
//   return acc > el ? el : acc;
// }, arr[0]);

// console.log(min);

//7 Вычислите среднее значение массива чисел, используя метод reduce().
// const arr = [5, 2, 6, 8, 4];

// const middle =
//   arr.reduce((acc, el) => {
//     return (acc += el);
//   }) / arr.length;

// console.log(middle);

//8.Сведите массив массивов в один массив с помощью метода reduce().
// const arr = [[2, 3, "hello"], ["world", 9, -5], [8]];

// const newArr = arr.reduce((acc, el, ind, arr) => {
//   el.forEach((item) => acc.push(item));
//   return acc;
// }, []);

// console.log(newArr);

//9 Подсчитайте количество слов в предложении, используя метод reduce().

// const string = "Hi, how do you feel today?";

// const arr = string.split(" ");

// const counterWords = arr.reduce((acc, el) => {
//   el ? (acc += 1) : null;
//   return acc;
// }, 0);

// console.log(counterWords);

//10.Удалите повторяющиеся значения из массива с помощью метода reduce()
// const arr = [5, 17, 12, 6, 8, 5, 17, 1, 2];

// const uniqueArr = arr.reduce((acc, el) => {
//   if (!acc.includes(el)) {
//     acc.push(el);
//   }
//   return acc;
// }, []);

// console.log(uniqueArr);

//11.Вычислите факториал числа, используя метод reduce().
// const arr = [1, 2, 4, 5, 6, 7];

// const newArr = arr.reduce((acc, el) => {
//   el ? acc.push(el * (el - 1)) : null;
//   return acc;
// }, []);

// console.log(newArr);

//12.Удалите ложные значения из массива с помощью метода reduce().

// const arr = [1, 2, false, 3, NaN, 6, 8, 0];

// const newArr = arr.reduce((acc, el) => {
//   el ? acc.push(el) : null;
//   return acc;
// }, []);

// console.log(newArr);

//13.Подсчитайте, сколько раз определенное слово появляется в предложении, используя метод reduce().

// const string = "hello world, hello my friend, hello everyone";

// const arr = string.split(" ");

// const repeatWords = arr.reduce((acc, el) => {
//   el == "hello" ? (acc += 1) : null;
//   return acc;
// }, 0);
// console.log(repeatWords);
