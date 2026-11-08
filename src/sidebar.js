export function cargarSidebar(paginaActiva) {
    const sidebarHTML = `
        <div class="sidebar">
            <h2>🏢 PymeControl</h2>
            <hr>
            <nav>
                <a href="index.html" class="${paginaActiva === 'inicio' ? 'active' : ''}">📊 Dashboard Inicio</a>
                <a href="empleados.html" class="${paginaActiva === 'empleados' ? 'active' : ''}">👥 Personal / Empleados</a>
                <a href="productos.html" class="${paginaActiva === 'productos' ? 'active' : ''}">📦 Inventario / Productos</a>
                <a href="ventas.html" class="${paginaActiva === 'ventas' ? 'active' : ''}">🛒 Punto de Venta</a>
            </nav>
        </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
}