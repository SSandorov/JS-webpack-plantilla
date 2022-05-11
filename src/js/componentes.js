// Importamos la hoja de estilos para cambiar los estilos de forma dinámica
import '../css/componentes.css';

export const saludar = (nombre) => {
    console.log('Creando etiqueta H1');

    const h1 = document.createElement('H1');
    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);
}