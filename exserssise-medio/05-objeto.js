// OBJETO

const o = {
    name: 'Pepe',
    age: 22,
};

o.job = 'Developer';

//Mala practica
//delete o.age
// usar el punto para acceder a otro propiedad

// const prop = 'name';

// console.log(prop)
//  console.log(o[prop])

// si una propiedad le pones un valor que no existe es "undefined"

const prop = null;

console.log(prop);
console.log(prop ? prop : 'job');

const o = {
    name: 'Pepe',
    age: 22,
    job: 'Developer',
};

//

for (const key in user) {
    const value = user[key];
    console.log('clave ${key} el valor es ${value}');
}

// Object.keys(user);
// Object.value(user);
// (Object.entries(user));
