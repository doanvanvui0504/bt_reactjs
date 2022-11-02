// const asyncFunction = async (callback) => {
//   console.log("Start");
//   // setTimeout ko phải là 1 promise
//   await setTimeout(() => {
//     callback();
//   }, 1000);
//   console.log("Waiting");
// };

// let printEnd = function () {
//   console.log("End");
// };

// asyncFunction(printEnd);

// const myPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Waiting 2s");
//   }, 2000);
// });

// (async () => {
//   console.log("Start");
//   const result = await myPromise;
//   console.log(result);
//   console.log("End");
// })();

const myPromise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("An sang");
  } else {
    resolve("Khong an sang");
  }
});

// Cach 1:
// myPromise
//   .then((result) => {
//     console.log(result);
//     let timer = Math.random();
//     if (timer > 0.5) {
//       return `${timer.toFixed(2)} Di hoc`;
//     } else {
//       return `${timer.toFixed(2)} Khong di hoc`;
//     }
//   })
//   .then((result) => {
//     console.log(result);
//     let timer = Math.random();
//     if (timer > 0.5) {
//       return `${timer.toFixed(2)} Kiem tra`;
//     } else {
//       return `${timer.toFixed(2)} Khong kiem tra`;
//     }
//   })
//   .then((result) => {
//     console.log(result);
//     let timer = Math.random();
//     if (timer > 0.5) {
//       return `${timer.toFixed(2)} An trua`;
//     } else {
//       return `${timer.toFixed(2)} Khong an trua`;
//     }
//   })
//   .then((result) => {
//     console.log(result);
//     let timer = Math.random();
//     if (timer > 0.5) {
//       return `${timer.toFixed(2)} Di ve`;
//     } else {
//       return `${timer.toFixed(2)} Khong di ve`;
//     }
//   })
//   .then((result) => {
//     console.log(result);
//   });
