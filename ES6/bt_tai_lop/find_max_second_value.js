let number = [1, 4, 2, 5, 7, 5, 5, 6, 3, 2, 3, 2, 4, 3, 8, 9, 10, 10, 10, 10, 10, 9, 8, 8, 7, 7];

// // // 1. Max
let max = number[0];
let second = number[1];

// // for (let i = 0; i < number.length; i++) {
// //     if (max < number[i]) {
// //         max = number[i];
// //     }
// // }
// // console.log(max);

// // // 2. Second value

for (let i = 0; i < number.length; i++) {
    if (max < number[i]) {
        second = max;
        max = number[i];
    }
}

console.log(second);

// // 3. Sort

// // for (let i = 0; i < number.length; i++) {
// //     for (let j = i + 1; j < number.length; j++) {
// //         if (number[i] < number[j]) {
// //             let temp = number[i];
// //             number[i] = number[j];
// //             number[j] = temp;
// //         }
// //     }
// // }

// // // console.log(number);

// // // 4.
// // for (let i = 0; i < number.length; i++) {
// //     for (let j = i + 1; j < number.length; j++) {
// //         if (number[i] > number[j]) {
// //             let temp = number[i];
// //             number[i] = number[j];
// //             number[j] = temp;
// //         }
// //     }
// // }

// // 5.
// // C1:
// const resultObject = {};
// for (let i = 0; i < number.length; i++) {
//     if (!resultObject[number[i]]) {
//         resultObject[number[i]] = 1;
//     } else {
//         resultObject[number[i]]++;
//     }
// }

// let numberKeys = Object.keys(resultObject).map((item) => +item);
// console.log('C1 numberKeys: ', numberKeys);

// // C2:
// let number = [1, 4, 2, 5, 7, 5, 5, 6, 3, 2, 3, 2, 4, 3, 8, 2, 3, 3, 6, 9];

// let result = [];
// number.forEach((num) => {
//     if (!result.includes(num)) {
//         result = [...result, num];
//     }
// });
// console.log('C2 result: ', result);
