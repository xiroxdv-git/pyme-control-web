// src/app.js
import { Empleado } from './Empleado.js';
import { Producto } from './Producto.js';
import { Empresa } from './Empresa.js';

// Instanciación del objeto principal de la empresa
const miEmpresa = new Empresa("B98765432", "PymeGlobal S.A.S.", 75000);

// Colecciones en memoria
const empleados = [];
const productos = [];
const ventas = [];

// Referencias DOM - Empleados
const formEmpleado = document.getElementById('form-empleado');
const tablaEmpleados = document.getElementById('tabla-empleados');

// Referencias DOM - Productos
const formProducto = document.getElementById('form-producto');
const tablaProductos = document.getElementById('tabla-productos');

// Referencias DOM - Ventas
const formVenta = document.getElementById('form-venta');
const selectVentaProducto = document.getElementById('venta-producto-id');
const tablaVentas = document.getElementById('tabla-ventas');

// Elementos del Resumen Financiero
const elemNombre = document.getElementById('empresa-nombre');
const elemCif = document.getElementById('empresa-cif');
const elemPresupuesto = document.getElementById('empresa-presupuesto');

// Renderizado inicial de datos de la empresa
actualizarVistaEmpresa();

function actualizarVistaEmpresa() {
    elemNombre.textContent = miEmpresa.getNombre();
    elemCif.textContent = miEmpresa.getCif();
    elemPresupuesto.textContent = miEmpresa.getPresupuesto().toFixed(2);
}

// Evento: Registrar Empleado
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

// Evento: Registrar Producto
formProducto.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('prod-id').value;
    const nombre = document.getElementById('prod-nombre').value;
    const precio = document.getElementById('prod-precio').value;
    const stock = document.getElementById('prod-stock').value;

    const nuevoProducto = new Producto(id, nombre, precio, stock);
    productos.push(nuevoProducto);

    renderizarProductos();
    actualizarSelectProductos();
    formProducto.reset();
});

// Evento: Procesar Venta (Simulación Transaccional)
formVenta.addEventListener('submit', (e) => {
    e.preventDefault();
    const prodId = selectVentaProducto.value;
    const cantidad = Number(document.getElementById('venta-cantidad').value);

    const productoEncontrado = productos.find(p => p.getId() === prodId);

    if (!productoEncontrado) {
        alert("Seleccione un producto válido.");
        return;
    }

    // Intentar reducir el stock utilizando el método encapsulado de la clase Producto
    const exito = productoEncontrado.reducirStock(cantidad);

    if (exito) {
        const totalVenta = productoEncontrado.getPrecio() * cantidad;
        
        // Actualizar presupuesto de la empresa (método de Empresa)
        miEmpresa.actualizarPresupuesto(totalVenta);

        // Guardar registro de la transacción
        ventas.push({
            id: productoEncontrado.getId(),
            nombre: productoEncontrado.getNombre(),
            cantidad: cantidad,
            total: totalVenta
        });

        // Actualizar la interfaz gráfica
        renderizarProductos();
        renderizarVentas();
        actualizarVistaEmpresa();
        formVenta.reset();
    } else {
        alert(`Stock insuficiente. Solo quedan ${productoEncontrado.getStock()} unidades.`);
    }
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

function actualizarSelectProductos() {
    selectVentaProducto.innerHTML = '<option value="">-- Seleccione un producto --</option>';
    productos.forEach(prod => {
        const opt = document.createElement('option');
        opt.value = prod.getId();
        opt.textContent = `${prod.getNombre()} (Stock: ${prod.getStock()} | $${prod.getPrecio().toFixed(2)})`;
        selectVentaProducto.appendChild(opt);
    });
}

function renderizarVentas() {
    tablaVentas.innerHTML = '';
    ventas.forEach(v => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${v.id}</td>
            <td>${v.nombre}</td>
            <td>${v.cantidad}</td>
            <td>$${v.total.toFixed(2)}</td>
        `;
        tablaVentas.appendChild(fila);
    });
}