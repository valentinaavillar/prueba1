function showModal(section) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    
    // Muestra contenido según la sección seleccionada
    let content = '';

    switch (section) {
        case 'inicio':
            content = '<h2>Bienvenidos a nuestra página</h2><p>Este es el inicio de nuestra web.</p>';
            break;
        case 'nosotros':
            content = '<h2>Nosotros</h2><p>Somos una empresa dedicada a ofrecer servicios de calidad.</p>';
            break;
        case 'mision':
            content = '<h2>Misión</h2><p>Nuestra misión es brindar soluciones innovadoras y de calidad.</p>';
            break;
        case 'vision':
            content = '<h2>Visión</h2><p>Ser una empresa líder en nuestro sector, reconocida por nuestra excelencia.</p>';
            break;
        case 'contacto':
            content = '<h2>Contacto</h2><p>Envíanos tu mensaje a través del formulario.</p>';
            break;
        case 'ubicacion':
            content = '<h2>Ubicación</h2><p>Nuestra oficina se encuentra en la Calle Ficticia 123.</p>';
            break;
    }

    modalContent.innerHTML = content;
    modal.style.display = 'flex';
}

// Cerrar la ventana emergente
document.getElementById('closeModal').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

// Cerrar el modal si se hace clic fuera de la ventana
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
}
