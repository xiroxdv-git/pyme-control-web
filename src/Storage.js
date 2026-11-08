import { Empleado } from './Empleado.js';
import { Producto } from './Producto.js';
import { Empresa } from './Empresa.js';

export class StorageManager {
    static obtenerEmpresa() {
        const datos = localStorage.getItem('empresa');
        if (datos) {
            const obj = JSON.parse(datos);
            return new Empresa(obj.cif, obj.nombre, obj.presupuesto);
        }
        return new Empresa("B98765432", "PymeGlobal S.A.S.", 75000);
    }

    static guardarEmpresa(empresa) {
        const datos = {
            cif: empresa.getCif(),
            nombre: empresa.getNombre(),
            presupuesto: empresa.getPresupuesto()
        };
        localStorage.setItem('empresa', JSON.stringify(datos));
    }

    static obtenerEmpleados() {
        const datos = JSON.parse(localStorage.getItem('empleados')) || [];
        return datos.map(e => new Empleado(e.dni, e.nombre, e.departamento, e.salarioBase));
    }

    static guardarEmpleados(lista) {
        const datos = lista.map(e => ({
            dni: e.getDni(),
            nombre: e.getNombre(),
            departamento: e.getDepartamento(),
            salarioBase: e.getSalarioBase()
        }));
        localStorage.setItem('empleados', JSON.stringify(datos));
    }

    static obtenerProductos() {
        const datos = JSON.parse(localStorage.getItem('productos')) || [];
        return datos.map(p => new Producto(p.id, p.nombre, p.precio, p.stock));
    }

    static guardarProductos(lista) {
        const datos = lista.map(p => ({
            id: p.getId(),
            nombre: p.getNombre(),
            precio: p.getPrecio(),
            stock: p.getStock()
        }));
        localStorage.setItem('productos', JSON.stringify(datos));
    }

    static obtenerVentas() {
        return JSON.parse(localStorage.getItem('ventas')) || [];
    }

    static guardarVenta(nuevaVenta) {
        const lista = this.obtenerVentas();
        lista.push(nuevaVenta);
        localStorage.setItem('ventas', JSON.stringify(lista));
    }
}