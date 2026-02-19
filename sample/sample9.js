// Switch - case
// Una estructura similar a la anterior, para el caso en que todas los condiciones se refieran a la misma variable, es el switch ... case.
// const language = 'En';

function makeGreeting(language) {
    let greeting;
    // const language = 'En';
    //
    //
    // else () {}

    switch (language) {
        case 'En':
            greeting = 'Hello my friend';
            break;
        case 'Es':
            greeting = 'Hola amigo';
            break;
        case 'Fr':
            greeting = 'Salut mon ami';
            break;
        case 'Sn':
            greeting = 'Na nga def';
            break;
        case 'De':
            greeting = 'Hallo Freund';
            break;

        default:
            greeting = 'Hi';
            break;
    }
    return greeting;
}

const language = 'Sn';
console.log(makeGreeting(language));

/* esta es la principal
function makeGreeting(language) {
    let greeting;
    //

    switch (language) {
        case 'En':
            greeting = 'Hello my friend';
            break;
        case 'Es':
            greeting = 'Hola amigo';
            break;
        case 'Fr':
            greeting = 'Salut mon ami';
            break;
        case 'De':
            greeting = 'Hallo Freund';
            break;
        default:
            greeting = 'Hi';
            break;
    }
    return greeting;
}

const language = 'En';
console.log(makeGreeting(language));
*/
