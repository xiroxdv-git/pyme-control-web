export function cargarSidebar(paginaActiva) {
    const sidebarHTML = `
        <style>
            .sidebar {
                width: 240px;
                height: 100vh;
                background: #232b23; /* Verde oliva oscuro corporativo */
                color: #e2e8e2;
                padding: 20px;
                position: fixed;
                top: 0;
                left: 0;
                box-shadow: 4px 0 10px rgba(0,0,0,0.1);
            }
            .sidebar h2 {
                color: #d4af37; /* Dorado ejecutivo */
                font-size: 20px;
                text-align: center;
                margin-bottom: 20px;
            }
            .sidebar hr {
                border: 0;
                height: 1px;
                background: #3a473a;
                margin-bottom: 20px;
            }
            .sidebar a {
                display: block;
                color: #b0bec5;
                text-decoration: none;
                padding: 12px 15px;
                margin: 8px 0;
                border-radius: 6px;
                transition: all 0.3s ease;
                font-weight: 500;
            }
            .sidebar a.active, .sidebar a:hover {
                background: #d4af37; /* Dorado de selección */
                color: #1a211a; /* Texto oscuro contrastante */
                font-weight: bold;
            }
        </style>
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