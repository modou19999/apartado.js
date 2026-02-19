// Escribe una función que simula el juego piedra, papel y tijera.
// Recibirá como parámetro una opción (piedra, papel o tijera) en forma de string.
// La máquina, elegirá automáticamente una opción
//  aleatoria. Imprime por consola ambas elecciones y en caso de ganar el jugador
//  un mensaje de victoria, y en caso de perder uno de derrota.

function piedraPapelTijera(jugador) {
    const opciones = ['piedra', 'papel', 'tijera'];

    // Normalizamos input
    jugador = jugador.toLowercase();

    if (!opciones.includes(jugador)) {
        console.log('opcion invalida. Usa: piedra, papel o tijera.');
        return;
    }

    // Elección aleatoria de la máquina
    const maquina = opciones[Math.floor(Math.random() * 3)];

    console.log('jugador:', jugador);
    console.log('maquina:', maquina);

    if (jugador === maquina) {
        console.log('Empate');
    } else if (
        (jugador === 'piedra' && maquina === 'tijera') ||
        (jugador === 'papel' && maquina === 'piedra') ||
        (jugador === 'piedra' && maquina === 'papel')
    ) {
        console.log('!ganaste¡');
    } else {
        console.log('perdiste');
    }
}
