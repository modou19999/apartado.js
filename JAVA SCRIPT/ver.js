// ARRAY

// toSorted

// function firstName() {
//     return 'Julia';
// }
// console.log(firstName());

// let age = "12";
// console.log(age());

// const number = [1, 2, 6];
// // const newArray = array.toSorted();
// console.log(number());

const foo = {
    name: 'Pepe',
    age: 22,
    greeting: function () {
        console.log('Hola, soy ${foo.name} y tengo  ${foo.age} años');
    },
};
foo.greeting();

// const sort = (arr) => {
//     for (let i = 1; i < arr.length; i++) {
//         const previous = arr[i - 1];
//         const element = arr[i];
//         if (element < previous) {
//             //reordena
//         }
//     }
//     return arr;
// };

const sort = (arr) => {
    for (let i = 1; i <= arr.length; i++) {
        const previous = arr[i - 1];
        const element = ar[i];
        if (element < previous) {
        }
    }
};
