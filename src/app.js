import { Empleado } from './Empleado.js';
import { Producto } from './Producto.js';
import { Empresa } from './Empresa.js';

// Instanciación del objeto principal de la empresa
const miEmpresa = new Empresa("B98765432", "PymeGlobal S.A.S.", 75000);

// Arreglos en memoria para almacenar las colecciones de objetos
const empleados = [];
const productos = [];

// Referencias a elementos del DOM (Empleados)
const formEmpleado = document.getElementById('form-empleado');
const tablaEmpleados = document.getElementById('tabla-empleados');

// Referencias a elementos del DOM (Productos)
const formProducto = document.getElementById('form-producto');
const tablaProductos = document.getElementById('tabla-productos');

// Renderizado inicial de los datos de la empresa
document.getElementById('empresa-nombre').textContent = miEmpresa.getNombre();
document.getElementById('empresa-cif').textContent = miEmpresa.getCif();
document.getElementById('empresa-presupuesto').textContent = miEmpresa.getPresupuesto().toFixed(2);

// Evento: Registrar Empleado (POO)
formEmpleado.addEventListener('submit', (e) => {
    e.preventDefault();
    const dni = document.getElementById('emp-dni').value;
    const nombre = document.getElementById('emp-nombre').value;
    const depto = document.getElementById('emp-depto').value;
    const salario = document.getElementById('emp-salario').value;

    const nuevoEmpleado = new Empleado(dni, nombre, depto, salario);
    empleados.push(nuevoEmpleado);

    renderizarEmpleados();
    formEmpleado.reset();
});

// Evento: Registrar Producto (POO)
formProducto.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('prod-id').value;
    const nombre = document.getElementById('prod-nombre').value;
    const precio = document.getElementById('prod-precio').value;
    const stock = document.getElementById('prod-stock').value;

    const nuevoProducto = new Producto(id, nombre, precio, stock);
    productos.push(nuevoProducto);

    renderizarProductos();
    formProducto.reset();
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

function renderizarProductos() {
    tablaProductos.innerHTML = '';
    productos.forEach(prod => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${prod.getId()}</td>
            <td>${prod.getNombre()}</td>
            <td>$${prod.getPrecio().toFixed(2)}</td>
            <td>${prod.getStock()} unidades</td>
        `;
        tablaProductos.appendChild(fila);
    });
}