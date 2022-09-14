let prestamoSolicitado = parseInt(prompt("Ingresa el monto que solicitas de prestamo"));
function calcularPrestamo(tasaInteres, prestamoSolicitado, tiempoPrestamo) {
    let interes = (prestamoSolicitado * tasaInteres);
    let montoFinal = (interes + prestamoSolicitado);
    let mensualidades = (montoFinal / tiempoPrestamo);
    let mensualidadesRound = mensualidades.toFixed(2)
    return alert (`Si solicitas un prestamo de $${prestamoSolicitado} pesos, el interés total de tu prestamo sería $${interes} pesos. El monto total del prestamo con interés es de $${montoFinal} pesos, y tus mensualidades serían de $${mensualidadesRound} pesos durante ${tiempoPrestamo} meses.`);
}

if (prestamoSolicitado <= 100) {
    alert ("No puedes solicitar un prestamo igual o menor a $100.00 pesos. Por favor, solicita de nuevo.")
} else {
    let tiempoPrestamo = parseInt(prompt("¿En cuántos meses quieres pagarlo? Elige entre 3, 6, 9, 12, 18 o 24 meses"));
        if (tiempoPrestamo < 3) {
            alert ("No puedes pedir un prestamo menor a 3 meses, por favor, elige un lapso de tiempo mayor.")
        } else if (tiempoPrestamo === 3){
            calcularPrestamo(0.15, prestamoSolicitado,tiempoPrestamo);
        } else if (tiempoPrestamo === 6){
            calcularPrestamo(0.20, prestamoSolicitado, tiempoPrestamo);
        } else if (tiempoPrestamo === 9){
            calcularPrestamo(0.25, prestamoSolicitado, tiempoPrestamo);
        } else if (tiempoPrestamo === 12){
            calcularPrestamo(0.30, prestamoSolicitado, tiempoPrestamo);
        } else if (tiempoPrestamo === 18){
            calcularPrestamo(0.40, prestamoSolicitado, tiempoPrestamo);
        } else if (tiempoPrestamo === 24){
            calcularPrestamo(0.50, prestamoSolicitado, tiempoPrestamo);
        } else {
            alert ("Por favor, elige un lapso de tiempo de los disponibles (3, 6, 9, 12, 18 o 24 meses)")
        }
} 



