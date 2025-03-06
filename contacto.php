<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitizar y validar los datos del formulario
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));
    
    // Verificar si los campos no están vacíos
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Verificar si el correo tiene un formato válido
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Aquí colocas tu correo para recibir los mensajes
            $to = "valentinavillarm8@gmail.com";  // Cambia esto por tu dirección de correo electrónico
            $subject = "Nuevo mensaje de contacto desde tu página web";
            $body = "Nombre: $name\nCorreo electrónico: $email\nMensaje:\n$message";
            $headers = "From: $email";  // El correo que se muestra en el campo "De"
            
            // Intentar enviar el correo
            if (mail($to, $subject, $body, $headers)) {
                echo "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.";
            } else {
                echo "Hubo un error al enviar tu mensaje. Por favor, intenta más tarde.";
            }
        } else {
            echo "Por favor, ingresa un correo electrónico válido.";
        }
    } else {
        echo "Todos los campos son requeridos.";
    }
}
?>
