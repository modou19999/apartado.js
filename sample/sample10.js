// Datas js

let z = undefined;
console.log(z);

let x = null;
console.log(typeof x); // error de typeof desde JS originial

let n = 9_000_000_000_000_000_000n;
console.log(n + 1n);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);

// objects
const obj1 = {};
const obj2 = new Object();

const data1 = [];
const data2 = new Array();

const today = new Date();

obj1.name = 'Pepe';
obj1.age = 22;

obj2.name = 'Jose';
obj2.age = 26;

console.log(obj1);
console.log(obj2);

obj1.age += 1;
obj1.address = {
    street: 'c/Paz',
    number: '12',
    city: 'Cadiz',
};
obj1.skills = ['JS', 'Phyton'];

console.log(obj1);
console.log(obj1.skills[0]);

const users = [obj1, obj2];
obj1.skills = null;
console.log(users); // [ 'Pepe', 'Luisa' ] object

delete obj1.skills;
console.log(users);

const table = [
    ['a', 2, 3],
    [1, 't', 3],
    [1, 2, 3],
];
table[1][1] = 'y';

const text = [];

for (let i = 0; i < table.length; i++) {
    const line = table[i];
    for (let j = 0; j < line.length; j++) {
        const element = line[j];
        if (typeof element === 'string') {
            text.push(element);
        }
    }
}
console.log(text);

// Metodos  Text.push("g")

let element = text.pop();
console.log(text);
console.log(element);
text.unshift('z');
element = text.shift();
console.log(text);
console.log(element);

const friend = ['Pepe', 'Luisa', 'Elena', 'Ernesto'];
// friend.sort();
const ordered = friend.toSorted();
console.log(friend);
console.log(ordered);

friend.includes('Lucia');
