
var rounds = prompt( // Definir variable para numero de jugadas ('rounds') y rondas jugadas ('played').
	'Bienvenido ¿Cuántas veces deseas jugar o repetir el juego "CACHIPUN"?'
);
var played = 0;
var puntajeUser = 0;
var puntajeMachine = 0;

while (played < rounds) {
	var userChoice = prompt('Piedra, Papel o Tijera?'); 
	var machineChoice = randomPlay(); 
	jugada(userChoice.toUpperCase(), machineChoice); 
	played++; 

	if (puntajeUser > puntajeMachine) {
		// Imprimir mensaje informar al usuario si ganó, empató o perdió la partida completa.
		document.getElementById('ganador__title').innerHTML = `¡ Ganaste !`;
	} else if (puntajeUser < puntajeMachine) {
		document.getElementById('ganador__title').innerHTML = `¡ Perdiste  !`;
	} else {
		document.getElementById('ganador__title').innerHTML = `¡ Empate !`;
	}
}

// Función para Jugada random del computador
function randomPlay() {
	var jugadaMachine = Math.floor(Math.random() * 3) + 1;
	{
		if (jugadaMachine == 1) {
			return 'PIEDRA';
		} else if (jugadaMachine == 2) {
			return 'PAPEL';
		} else {
			return 'TIJERA';
		}
	}
}
// Función para cada jugada. Compara elecciones entre jugador y máquina y finalmente elige un ganador para cada ronda sumando un punto.
function jugada(user, machine) {
	// Primero jugadas ganadoras
	if (
		(user == 'PIEDRA' && machine == 'TIJERA') ||
		(user == 'PAPEL' && machine == 'PIEDRA') ||
		(user == 'TIJERA' && machine == 'PAPEL')
	) {
		puntajeUser++;
		document.getElementById('user__score').innerHTML = `${puntajeUser}`;
		document.getElementById('machine__score').innerHTML = `${puntajeMachine}`;
		alert(
			`¡Ganaste! Elegiste ${user} y la máquina ${machine} ¡Felicitaciones!.`
		);
		//  jugadas empate
	} else if (user == machine) {
		puntajeUser++;
		puntajeMachine++;
		document.getElementById('user__score').innerHTML = `${puntajeUser}`;
		document.getElementById('machine__score').innerHTML = `${puntajeMachine}`;
		alert(`Empate!`);
		// Jugadas perdidas
	} else if (
		(user == 'TIJERA' && machine == 'PIEDRA') ||
		(user == 'PIEDRA' && machine == 'PAPEL') ||
		(user == 'PAPEL' && machine == 'TIJERA')
	) {
		puntajeMachine++;
		document.getElementById('user__score').innerHTML = `${puntajeUser}`;
		document.getElementById('machine__score').innerHTML = `${puntajeMachine}`;
		alert(
			`¡Perdiste! La máquina eligió ${machine} y tú ${user}. Mejor suerte para la próxima.`
		);
		// Jugadas inválidas, no eligió opción adecuada.
	} else {
		alert(`Opción inválida. debes escribir 'Piedra, papel o Tijera'`);
	}
}