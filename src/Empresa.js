export class Empresa {
    #cif;
    #nombre;
    #presupuesto;

    constructor(cif, nombre, presupuesto) {
        this.#cif = cif;
        this.#nombre = nombre;
        this.#presupuesto = Number(presupuesto);
    }

    getCif() { return this.#cif; }
    getNombre() { return this.#nombre; }
    getPresupuesto() { return this.#presupuesto; }

    actualizarPresupuesto(monto) {
        this.#presupuesto += monto;
    }
}