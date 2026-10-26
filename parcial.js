// Autor: [Tu Nombre y Apellido]
// Práctica: Ejercicio práctico - Reservaciones del restaurante
let reservaciones = [
    { id: 1, cliente: "Carlos Martínez", personas: 6, zona: "Terraza" }, // Cumple: Terraza y >= 5 (permanecerá tras el filtro)
    { id: 2, cliente: "Ana Gómez", personas: 3, zona: "Interior" },
    { id: 3, cliente: "Roberto Sánchez", personas: 5, zona: "Terraza" }, // Cumple: Terraza y >= 5
    { id: 4, cliente: "Lucía Flores", personas: 2, zona: "Interior" }
];
console.log("=== 1. LISTA INICIAL DE RESERVACIONES ===");
console.log(reservaciones);
// 2. Registra nuevas reservaciones
// Agrega una reservación normal al final (push)
reservaciones.push({ id: 5, cliente: "Mario Pineda", personas: 4, zona: "Interior" });
// Incorpora una prioritaria al inicio (unshift)
reservaciones.unshift({ id: 0, cliente: "Elena de Paz (Prioritaria)", personas: 3, zona: "Terraza" });
console.log("\n=== 2. LISTA DESPUÉS DE REGISTRAR (NORMAL Y PRIORITARIA) ===");
console.log(reservaciones);
// 3. Atiende una reservación
console.log("\n=== 3. ATENCIÓN DE LA PRIMERA RESERVACIÓN ===");
if (reservaciones.length > 0) {
    const atendida = reservaciones.shift();
    if (atendida) {
        console.log(`Cliente atendido: ${atendida.cliente} | Cantidad de personas: ${atendida.personas}`);
    }
}
else {
    console.log("La lista de reservaciones está vacía.");
}
console.log("Reservaciones pendientes tras atender:", reservaciones);
// 5. Integra una función tipada (Búsqueda por identificador con doble ejecución)
/**
 * Busca una reservación por su ID en un arreglo dado.
 * @param lista Arreglo de reservaciones donde se realizará la búsqueda.
 * @param idBuscado Identificador numérico a buscar.
 * @returns void (muestra el resultado en consola por requerimiento de consola).
 */
function buscarReservacionPorId(lista, idBuscado) {
    const encontrada = lista.find(res => res.id === idBuscado);
    if (encontrada) {
        console.log(`[Búsqueda Exitosa] ID ${idBuscado} encontrado:`, encontrada);
    }
    else {
        console.log(`[Búsqueda Inexistente] No existe ninguna reservación con el ID ${idBuscado}.`);
    }
}
console.log("\n=== 4. BÚSQUEDA Y FILTRADO COMBINADO ===");
// Ejecución 1: Caso exitoso (ID existente en la lista actual)
buscarReservacionPorId(reservaciones, 3);
// Ejecución 2: Caso inexistente (ID que no existe)
buscarReservacionPorId(reservaciones, 99);
// Filtro combinado: Terraza Y personas >= 5
const cantidadOriginalAntesDeFiltrar = reservaciones.length;
const filtradasTerrazaGrande = reservaciones.filter(res => res.zona === "Terraza" && res.personas >= 5);
console.log("\n--- Resultado del Filtro (Terraza y >= 5 personas) ---");
if (filtradasTerrazaGrande.length > 0) {
    console.log(filtradasTerrazaGrande);
}
else {
    console.log("No se encontraron reservaciones que cumplan con ambas condiciones.");
}
// 6. Comprueba el estado final
console.log("\n=== 6. COMPROBACIÓN DEL ESTADO FINAL ===");
console.log(`Cantidad de reservaciones pendientes actuales: ${reservaciones.length}`);
console.log(`Cantidad de coincidencias producidas por el filtro: ${filtradasTerrazaGrande.length}`);
console.log(`Cantidad del arreglo original antes de filtrar: ${cantidadOriginalAntesDeFiltrar}`);
console.log(`Cantidad del arreglo original después de filtrar: ${reservaciones.length} (Comprueba que el filtro original no se altera)`);
console.log("Estado final completo del arreglo de pendientes:", reservaciones);
export {};
