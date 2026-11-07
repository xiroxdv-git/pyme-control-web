export class Producto {
    #id;
    #nombre;
    #precio;
    #stock;

    constructor(id, nombre, precio, stock) {
        this.#id = id;
        this.#nombre = nombre;
        this.#precio = Number(precio);
        this.#stock = Number(stock);
    }

    getId() { return this.#id; }
    getNombre() { return this.#nombre; }
    getPrecio() { return this.#precio; }
    getStock() { return this.#stock; }

    // Lógica para actualizar el inventario al realizar una venta
    reducirStock(cantidad) {
        if (cantidad <= this.#stock) {
            this.#stock -= cantidad;
            return true;
        }
        return false;
    }
}