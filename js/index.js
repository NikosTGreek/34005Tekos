function placementTest() {



    let nombre = prompt("Ingresa tu nombre");

    alert(`Hola, ${nombre}`);


    function validacionRespuesta() {
        while (respuesta) {
            alert("¡Bien hecho, eres un crack! 😎");
            break;
        }
        while (respuesta == false) {
            alert("Incorrecto 😐");
            break;
        }
    }

    let respuesta;

    let pregunta1 = parseInt(prompt("¿De dónde viene Napoleón Bonaparte?\n 1.- Grecia\n 2.- Albania\n 3.- Francia-Córcega\n\n Ingresa el número correspondiente"));



    if (pregunta1 == 3) {
        respuesta = true;
    } else {
        respuesta = false;
    }

    validacionRespuesta();

    {
        alert("¡Napoleón Bonaparte nació el 15 de agosto de 1769 en Ajaccio (Córcega) y recibió el nombre de Napoleone.!");
    }

    let pregunta2 = parseInt(prompt("¿Qué país atacó primero Adolf Hitler en la Segunda Guerra Mundial?\n 1.- Argentina\n 2.- España\n 3.- Polonia\n\n Ingresa el número correspondiente"));

    if (pregunta2 == 3) {
        respuesta = true;
    } else {
        respuesta = false;
    }

    validacionRespuesta();

    {
        alert("La guerra en Europa\r\n El 1 de septiembre de 1939, el ejército alemán invade Polonia. Dos días más tarde, Francia y Gran Bretaña, ambos aliados de Polonia, declaran la guerra a Alemania.");
    }

    let pregunta3 = parseInt(prompt("¿Qué emperador romano legalizó el cristianismo y puso fin a la persecución de los cristianos?\n 1.- Nerón\n 2.- Constantino\n 3.- Trajano\n\n Ingresa el número correspondiente"));

    if (pregunta3 == 2) {
        respuesta = true;
    } else {
        respuesta = false;
    }

    validacionRespuesta();

    {
        alert("Al emperador Constantino también se le atribuye haber hecho de la antigua Bizancio, ahora Estambul, una ciudad próspera. No forma parte de los Cinco Emperadores Buenos del Imperio Romano (que fueron Adriano, Trajano, Nerva, Antonio Pío y Marco Aurelio), pues durante su reinado el Imperio alcanzó su máxima expansión.");
    }

    let pregunta4 = parseInt(prompt("¿A través de qué río africano se alzó el antiguo Egipto?\n 1.- Nilo\n 2.- Amazonas\n 3.- Tigris\n\n Ingresa el número correspondiente"));

    if (pregunta4 == 1) {
        respuesta = true;
    } else {
        respuesta = false;
    }

    validacionRespuesta();

    {
        alert("Se trata en efecto, del río Nilo. Este río suele inundarse regularmente, lo que permite a los agricultores cultivar en este clima desértico.");
    }

    document.write("RESULTADOS:<br><br><br> 1 Respuesta correcta: Te recomiendo leer algunos libros sobre la historia universal 😕 <br><br> 2 Respuestas correctas: Necesita mejorar! 😉<br><br> 3 Respuestas correctas: No tan mal. Vas bien! 🧐 <br><br> 4 Repuestas correctas: EXCELENTE Señor Einstein!😎<br><br><br><br> Gracias por hacer el test. <br><br><br><br> Recarga la página para volver al inicio...")


}



