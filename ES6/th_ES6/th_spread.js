// Bai 1
let greetings = 'lazy dog humps over brown fox';
let chars = [...greetings];
// console.log(chars.length);

// Bai 2
let arr1 = ['PHP', 'Java'];
let arr2 = ['Ruby', 'Dark', 'Kotlin'];
let arr = [...arr1, ...arr2];
// console.log(arr);

// Bai 3
let students = ['John', 'Sofia', 'Bob'];
let copyStudents = students;
// console.log(copyStudents);
students.push('Sally'); // Change students
// console.log(copyStudents);
