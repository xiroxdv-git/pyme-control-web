export class Empleado {
    #dni;
    #nombre;
    #departamento;
    #salarioBase;

    constructor(dni, nombre, departamento, salarioBase) {
        this.#dni = dni;
        this.#nombre = nombre;
        this.#departamento = departamento;
        this.#salarioBase = Number(salarioBase);
    }

    getDni() { return this.#dni; }
    getNombre() { return this.#nombre; }
    getDepartamento() { return this.#departamento; }
    getSalarioBase() { return this.#salarioBase; }

    // Método de negocio para calcular el salario con bonificación por departamento
    calcularSalarioNeto() {
        let bonificacion = 0;
        if (this.#departamento.toLowerCase() === 'administracion') {
            bonificacion = 0.10; // 10% adicional
        }
        return this.#salarioBase + (this.#salarioBase * bonificacion);
    }
}