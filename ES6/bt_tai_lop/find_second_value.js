const arr = [8, 2, 4, 6, 6, 4, 3, 2, 7, 7, 7];

let arrOj = {};

for (let i = 0; i < arr.length; i++) {
    if (!arrOj[arr[i]]) {
        arrOj[arr[i]] = 1;
    } else {
        arrOj[arr[i]]++;
    }
}

console.log(arrOj);

let arrKeys = Object.keys(arrOj);

console.log(arrKeys[arrKeys.length - 2]);
console.log('So lan lap: ', arrOj[arrKeys[arrKeys.length - 2]]);
