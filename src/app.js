import { Empleado } from './Empleado.js';

// Arreglo para almacenar instancias de Empleado (POO)
const empleados = [];

const formEmpleado = document.getElementById('form-empleado');
const tablaEmpleados = document.getElementById('tabla-empleados');

formEmpleado.addEventListener('submit', (e) => {
    e.preventDefault();

    const dni = document.getElementById('emp-dni').value;
    const nombre = document.getElementById('emp-nombre').value;
    const depto = document.getElementById('emp-depto').value;
    const salario = document.getElementById('emp-salario').value;

    // Instanciación del objeto de la clase Empleado
    const nuevoEmpleado = new Empleado(dni, nombre, depto, salario);
    empleados.push(nuevoEmpleado);

    renderizarEmpleados();
    formEmpleado.reset();
});

function renderizarEmpleados() {
    tablaEmpleados.innerHTML = '';
    empleados.forEach(emp => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${emp.getDni()}</td>
            <td>${emp.getNombre()}</td>
            <td>${emp.getDepartamento()}</td>
            <td>$${emp.calcularSalarioNeto().toFixed(2)}</td>
        `;
        tablaEmpleados.appendChild(fila);
    });
}