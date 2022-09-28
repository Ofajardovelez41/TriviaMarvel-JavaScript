$(document).ready(() => {

    // Variables Globales utilizadas 
    let user = $('.user');
    let formName = $('.form-name');
    let name = $('#name'), lastname = $('#lastname');
    let cantBuenas = 0;
    let cantMalas = 0;
    const questions = $('.questions');
    const progresoPreguntas = $('.div-progres');
    let resp1 ="", resp2="", resp3="", resp4, resp5, resp6, resp7, resp8, resp9, resp10;
    const progress = $('.progress'); 
    const lineProgress = $('.line-progress');
    // Formulario para pedir el nombre y guardarlo
    user.hide();
    progress.hide();
    formName.submit((e) => {
        progress.show();
        lineProgress.css('width', '5%');
        e.preventDefault();

        user.append(" " + name.val() + " " + lastname.val());
        user.show();
        formName.hide();
        alert("Bienvenido " + name.val() + " " + lastname.val() + " Este es un Test Marvelista \n Probemos que tanto sabes Del Universo Marvel \n \n ADELANTE!!!!!");


        // Creamos el Template para la Primera pregunta 1
        let pregunta1 = `
        <div class="pregunta p1">
            <br>
            <strong class="title-question">1: Que significan las Iniciales UCM</strong>
            <br>
            <br>
            <ul>
                <li>A: Universal Comic Marvel</li>
                <br>
                <li>B: Universo Comico Marvelista</li>
                <br>
                <li>C: Un Cine Marvelista</li>
                <br>
                <li>D: Universo Cinematografico de Marvel</li>
            </ul>
            <input type="text" name="res" id="res" placeholder="Seleccione ( A , B , C , D )">
            <input type="submit" value="Siguiente" id="enviar" class="enviarp1">
        </div>
        `;

        let aux = `<strong class="p p1">Pregunta 1...De 10</strong>`;//Creamos el Template para la tabla del Progreso de Preguntas
        questions.html(pregunta1);// Agregamos la Pregunta 1 al Documento
        progresoPreguntas.addClass('progreso-preguntas') // Agregamos una clase para darle estilo al cuadro de Progreso
        progresoPreguntas.html(aux); // Agregamos el Template para la tabla de Progreso

        // Agregamos el evento para enviar el resultado de la pregunta
        $('.enviarp1').click((e) => {
            e.preventDefault();
            lineProgress.css('width', '10%');
            
            // Creamos el Template para la Primera pregunta2
            let pregunta2 = `<div class="pregunta p2">
                                <br>
                                <strong class="title-question">2: ¿Cual es el nombre del Actor que interpreta al Capitan America?</strong>
                                <br>
                                <br>
                                <ul>
                                    <li>A: Sebastian Stan</li>
                                    <br>
                                    <li>B: Cristian Roger </li>
                                    <br>
                                    <li>C: Chris Evans</li>
                                    <br>
                                    <li>D: Chris Hemsworth</li>
                                </ul>
                                <input type="text" name="res" id="res" placeholder="Seleccione ( A , B , C , D )">
                                <input type="submit" value="Siguiente" id="enviar" class="enviarp2">
                            </div>`;
            let res = $('#res'); // Cargamos la respuesta escrita para ser evaluada
            if (res.val().length == 1) {
                if (res.val().toLowerCase() === 'd') {
                    cantBuenas++; // Si la pregunta fue buena se suma 1 a la Cantidad de Preguntas Buena
                    $('.p1').html('<strong class="listo">Pregunta 1</strong>');
                } else {
                    cantMalas++; // Si la pregunta fue erronea se suma 1 a la Cantidad de Preguntas Malas
                    $('.p1').html('<strong class="falla">Pregunta 1</strong>');
                }
                // Llenamos la Variable para decir cual es la corecta y la seleccionada por el usuario
                resp1 = `(${res.val().toUpperCase()}) `;
                //Creamos el Template para la tabla del Progreso de Preguntas
                aux = `<strong class="p p2">Pregunta 2...De 10</strong>`;
                questions.html(pregunta2); // Agregamos la pregunta al Documento
                progresoPreguntas.append(aux);// Agregamos el Template para la tabla de Progreso

            } else if ((res.val().length == 0) || (res.val().length > 1)) {
                alert("Debe selecionar solo una letra"); // en caso de Ingresar mas de un caracter en el res no avanzará a la siguiente pregunta
            }
            // Agregamos el evento para enviar el resultado de la pregunta       
            $('.enviarp2').click((e) => {
                e.preventDefault();
                lineProgress.css('width', '20%');
                // Creamos el Template para la pregunta
                let pregunta3 = `<div class="pregunta p3">
                                        <br>
                                        <strong class="title-question">3: ¿Cual era el nombre de la IA que utilizó Iron Man en su primera Pelicula?</strong>
                                        <br>
                                        <br>
                                        <ul>
                                            <li>A: Sofia</li>
                                            <br>
                                            <li>B: Jarvis </li>
                                            <br>
                                            <li>C: Carlos </li>
                                            <br>
                                            <li>D: Friday</li>
                                        </ul>
                                        <input type="text" name="res" id="res" placeholder="Seleccione ( A , B , C , D )">
                                        <input type="submit" value="Siguiente" id="enviar" class="enviarp3">
                                    </div>`;

                let res = $('#res'); // Cargamos la respuesta escrita para ser evaluada
                if (res.val().length == 1) {
                    if (res.val().toLowerCase() === 'c') {
                        cantBuenas++; // Si la pregunta fue buena se suma 1 a la Cantidad de Preguntas Buena
                        //Creamos el Template para la tabla del Progreso de Preguntas
                        $('.p2').html('<strong class="listo">Pregunta 2</strong>');
                    } else {
                        cantMalas++; // Si la pregunta fue erronea se suma 1 a la Cantidad de Preguntas Malas
                        //Creamos el Template para la tabla del Progreso de Preguntas
                        $('.p2').html('<strong class="falla">Pregunta 2</strong>');
                    }

                    // Llenamos la Variable para decir cual es la corecta y la seleccionada por el usuario
                    resp2 = `(${res.val().toUpperCase()}) `;

                    aux= `<strong class="p p3">Pregunta 3...De 10</strong>`;
                    
                    questions.html(pregunta3);// Agregamos la pregunta al Documento                    
                    progresoPreguntas.append(aux);


                } else if ((res.val().length == 0) || (res.val().length > 1)) {
                    alert("Debe selecionar solo una letra"); // en caso de Ingresar mas de un caracter en el res no avanzará a la siguiente pregunta
                }
                // Agregamos el evento para enviar el resultado de la pregunta 
                $('.enviarp3').click((e) => {
                    e.preventDefault();
                    lineProgress.css('width', '30%');
                    // Creamos el Template para la pregunta
                    let pregunta4 = `<div class="pregunta p4">
                                        <br>
                                        <strong class="title-question">4: ¿En que año se estreno Capitan America: El primer vengador?</strong>
                                        <br>
                                        <br>
                                        <ul>
                                            <li>A: 2009</li>
                                            <br>
                                            <li>B: 2008 </li>
                                            <br>
                                            <li>C: 2011 </li>
                                            <br>
                                            <li>D: 2010</li>
                                        </ul>
                                        <input type="text" name="res" id="res" placeholder="Seleccione ( A , B , C , D )">
                                        <input type="submit" value="Siguiente" id="enviar" class="enviarp4">
                                    </div>`;
                    let res = $('#res');  // Cargamos la respuesta escrita para ser evaluada
                    if (res.val().length == 1) {
                        if (res.val().toLowerCase() === 'b') {
                            cantBuenas++; // Si la pregunta fue buena se suma 1 a la Cantidad de Preguntas Buena
                            $('.p3').html('<strong class="listo">Pregunta 3</strong>');
                        } else {
                            cantMalas++; // Si la pregunta fue erronea se suma 1 a la Cantidad de Preguntas Malas
                            $('.p3').html('<strong class="falla">Pregunta 3</strong>');
                        }

                        // Llenamos la Variable para decir cual es la corecta y la seleccionada por el usuario
                        resp3 = `(${res.val().toUpperCase()}) `;
                        //Creamos el Template para la tabla del Progreso de Preguntas
                        aux = `<strong class="p p4">Pregunta 4...De 10</strong>`;
                        progresoPreguntas.append(aux);
                        questions.html(pregunta4); //Agregamos la pregunta al Documento                        

                    } else if ((res.val().length == 0) || (res.val().length > 1)) {
                        alert("Debe selecionar solo una letra");
                    }
                    // Agregamos el evento para enviar el resultado de la pregunta 
                    $('.enviarp4').click((e) => {
                        e.preventDefault();
                        lineProgress.css('width', '40%');
                        // Creamos el Template para la pregunta
                        let pregunta5 = `<div class="pregunta p5">
                                            <br>
                                            <strong class="title-question">5: ¿Cual es el Nombre del Papá de Tony Stark?</strong>
                                            <br>
                                            <br>
                                            <ul>
                                                <li>A: Hamilto Stark</li>
                                                <br>
                                                <li>B: Chris Stark </li>
                                                <br>
                                                <li>C: Howard Stark </li>
                                                <br>
                                                <li>D: Nick Stark </li>
                                            </ul>
                                            <input type="text" name="res" id="res" placeholder="Seleccione ( A , B , C , D )">
                                            <input type="submit" value="Siguiente" id="enviar" class="enviarp5">
                                        </div>
                                    `;
                        let res = $('#res');
                        if (res.val().length == 1) {
                            if (res.val().toLowerCase() === 'c') {
                                cantBuenas++;
                                $('.p4').html('<strong class="listo">Pregunta 4</strong>');
                            } else {
                                cantMalas++;
                                $('.p4').html('<strong class="falla">Pregunta 4</strong>');
                            }

                            // Llenamos la Variable para decir cual es la corecta y la seleccionada por el usuario
                            resp4 = `(${res.val().toUpperCase()}) `;


                            aux = `<strong class="p p5">Pregunta 5...De 10</strong>`;
                            progresoPreguntas.append(aux);
                            questions.html(pregunta5); // Agregamos la pregunta al Documento                            
                        } else if ((res.val().length == 0) || (res.val().length > 1)) {
                            alert("Debe selecionar solo una letra");
                        }
                        // Agregamos el evento para enviar el resultado de la pregunta 
                        $('.enviarp5').click((e) => {
                            e.preventDefault();
                            lineProgress.css('width', '50%');
                            // Creamos el Template para la pregunta
                            let pregunta6 = `<div class="pregunta p6">
                                                <br>
                                                <strong class="title-question">6: ¿Cual es el Nombre Completo de Tony?</strong>
                                                <br>
                                                <br>
                                                <ul>
                                                    <li>A: Anthony Edward Stark</li>
                                                    <br>
                                                    <li>B: Anthony Howard Stark </li>
                                                    <br>
                                                    <li>C: Antonio Evans Stark </li>
                                                    <br>
                                                    <li>D: Anthony Segundo Stark </li>
                                                </ul>
                                                <input type="text" name="res" id="res" placeholder="Seleccione ( A , B , C , D )">
                                                <input type="submit" value="Siguiente" id="enviar" class="enviarp6">
                                            </div>
                                        `;
                            let res = $('#res');
                            if (res.val().length == 1) {
                                if (res.val().toLowerCase() === 'c') {
                                    cantBuenas++;
                                    $('.p5').html('<strong class="listo">Pregunta 5</strong>');
                                } else {
                                    cantMalas++;
                                    $('.p5').html('<strong class="falla">Pregunta 5</strong>');
                                }
                                // Llenamos la Variable para decir cual es la corecta y la seleccionada por el usuario
                                resp5 = `(${res.val().toUpperCase()}) `;

                                aux = `<strong class="p p6">Pregunta 6...De 10</strong>`;
                                progresoPreguntas.append(aux);
                                questions.html(pregunta6);
                                // Agregamos la pregunta al Documento                                
                            } else if ((res.val().length == 0) || (res.val().length > 1)) {
                                alert("Debe selecionar solo una letra");
                            }
                            // Agregamos el evento para enviar el resultado de la pregunta 
                            $('.enviarp6').click((e) => {
                                e.preventDefault();
                                lineProgress.css('width', '60%');
                                // Creamos el Template para la pregunta
                                let pregunta7 = `<div class="pregunta p7">
                                                    <br>
                                                    <strong class="title-question">7: ¿Como conoció Tony Stark (Iron Man) a Natasha Romanoff(Black Widow)?</strong>
                                                    <br>
                                                    <br>
                                                    <ul>
                                                        <li>A: En una Fiesta</li>
                                                        <br>
                                                        <li>B: Tony Stark la salvó de morir en un atraco </li>
                                                        <br>
                                                        <li>C: Estaba enamorando a Tony Stark en un almacen </li>
                                                        <br>
                                                        <li>D: Se infiltró como su Secretaria </li>
                                                    </ul>
                                                    <input type="text" name="res" id="res" placeholder="Seleccione ( A , B , C , D )">
                                                    <input type="submit" value="Siguiente" id="enviar" class="enviarp7">
                                                </div>`;
                                let res = $('#res');
                                if (res.val().length == 1) {
                                    if (res.val().toLowerCase() === 'a') {
                                        cantBuenas++;
                                        $('.p6').html('<strong class="listo">Pregunta 6</strong>');
                                    } else {
                                        cantMalas++;
                                        $('.p6').html('<strong class="falla">Pregunta 6</strong>');
                                    }
                                    // Llenamos la Variable para decir cual es la corecta y la seleccionada por el usuario
                                    resp6 = `(${res.val().toUpperCase()}) `;
                                    aux = `<strong class="p p7">Pregunta 7...De 10</strong>`;
                                    progresoPreguntas.append(aux);
                                    questions.html(pregunta7);
                                    // Agregamos la pregunta al Documento                                    
                                } else if ((res.val().length == 0) || (res.val().length > 1)) {
                                    alert("Debe selecionar solo una letra");
                                }
                                // Agregamos el evento para enviar el resultado de la pregunta 
                                $('.enviarp7').click((e) => {
                                    e.preventDefault();
                                    lineProgress.css('width', '70%');
                                    // Creamos el Template para la pregunta
                                    let pregunta8 = `<div class="pregunta p8">
                                                        <br>
                                                        <strong class="title-question">8: ¿Que gema que buscaban los Guardianes de la Galaxia en Su primera Pelicula?</strong>
                                                        <br>
                                                        <br>
                                                        <ul>
                                                            <li>A: Alma </li>
                                                            <br>
                                                            <li>B: Poder </li>
                                                            <br>
                                                            <li>C: Realidad </li>
                                                            <br>
                                                            <li>D: Tiempo </li>
                                                        </ul>
                                                        <input type="text" name="res" id="res" placeholder="Seleccione ( A , B , C , D )">
                                                        <input type="submit" value="Siguiente" id="enviar" class="enviarp8">
                                                    </div>`;
                                    let res = $('#res');
                                    if (res.val().length == 1) {
                                        if (res.val().toLowerCase() === 'd') {
                                            cantBuenas++;
                                            $('.p7').html('<strong class="listo">Pregunta 7</strong>');
                                        } else {
                                            cantMalas++;
                                            $('.p7').html('<strong class="falla">Pregunta 7</strong>');
                                        }
                                        // Llenamos la Variable para decir cual es la corecta y la seleccionada por el usuario
                                        resp7 = `(${res.val().toUpperCase()}) `;
                                        aux = `<strong class="p p8">Pregunta 8...De 10</strong>`;
                                        progresoPreguntas.append(aux);
                                        questions.html(pregunta8);
                                        // Agregamos la pregunta al Documento                                        
                                    } else if ((res.val().length == 0) || (res.val().length > 1)) {
                                        alert("Debe selecionar solo una letra");
                                    }
                                    // Agregamos el evento para enviar el resultado de la pregunta 
                                    $('.enviarp8').click((e) => {
                                        e.preventDefault();
                                        lineProgress.css('width', '80%');
                                        // Creamos el Template para la pregunta
                                        let pregunta9 = `<div class="pregunta p9">
                                                            <br>
                                                            <strong class="title-question">9: ¿Que frase dijo el Capitan America cuando inició la guerra en Avengers: End Game?</strong>
                                                            <br>
                                                            <br>
                                                            <ul>
                                                                <li>A: Todos unidos Jamás seremos vencidos!!!</li>
                                                                <br>
                                                                <li>B: Vengadores a Pelearrrr!!! </li>
                                                                <br>
                                                                <li>C: Vamos a matar a Thanoss!!!</li>
                                                                <br>
                                                                <li>D: Vengadores Unidos!!!! </li>
                                                            </ul>
                                                            <input type="text" name="res" id="res" placeholder="Seleccione ( A , B , C , D )">
                                                            <input type="submit" value="Siguiente" id="enviar" class="enviarp9">
                                                        </div>`;
                                        let res = $('#res');
                                        if (res.val().length == 1) {
                                            if (res.val().toLowerCase() === 'b') {
                                                cantBuenas++;
                                                $('.p8').html('<strong class="listo">Pregunta 8</strong>');
                                            } else {
                                                cantMalas++;
                                                $('.p8').html('<strong class="falla">Pregunta 8</strong>');
                                            }

                                            // Llenamos la Variable para decir cual es la corecta y la seleccionada por el usuario
                                            resp8 = `(${res.val().toUpperCase()}) `;
                                            aux = `<strong class="p p9">Pregunta 9...De 10</strong>`;
                                            progresoPreguntas.append(aux);
                                            questions.html(pregunta9);// Agregamos la pregunta al Documento                                            
                                        } else if ((res.val().length == 0) || (res.val().length > 1)) {
                                            alert("Debe selecionar solo una letra");
                                        }
                                        // Agregamos el evento para enviar el resultado de la pregunta 
                                        $('.enviarp9').click((e) => {
                                            e.preventDefault();
                                            lineProgress.css('width', '90%');
                                            // Creamos el Template para la pregunta
                                            let pregunta10 = `<div class="pregunta p10">
                                                                <br>
                                                                <strong class="title-question">10: ¿Cual era la Comida Rapida preferida de Tony Stark?</strong>
                                                                <br>
                                                                <br>
                                                                <ul>
                                                                    <li>A: Desgranizado </li>
                                                                    <br>
                                                                    <li>B: Los tacos </li>
                                                                    <br>
                                                                    <li>C: Las Salchichas </li>
                                                                    <br>
                                                                    <li>D: Las Hamburguesas</li>
                                                                </ul>
                                                                <input type="text" name="res" id="res" placeholder="Seleccione ( A , B , C , D )">
                                                                <input type="submit" value="Siguiente" id="enviar" class="enviarp10">
                                                            </div>`;
                                            let res = $('#res');
                                            if (res.val().length == 1) {
                                                if (res.val().toLowerCase() === 'd') {
                                                    cantBuenas++;
                                                    $('.p9').html('<strong class="listo">Pregunta 9</strong>');
                                                } else {
                                                    cantMalas++;
                                                    $('.p9').html('<strong class="falla">Pregunta 9</strong>');
                                                }
                                                // Llenamos la Variable para decir cual es la corecta y la seleccionada por el usuario
                                                resp9 = `(${res.val().toUpperCase()}) `;
                                                aux = `<strong class="p p10">Pregunta 10...De 10</strong>`;
                                                progresoPreguntas.append(aux);
                                                questions.html(pregunta10);// Agregamos la pregunta al Documento

                                            } else if ((res.val().length == 0) || (res.val().length > 1)) {
                                                alert("Debe selecionar solo una letra");
                                            }

                                            // Agregamos el evento para enviar el resultado de la pregunta                                             
                                            $('.enviarp10').click((e) => {
                                                lineProgress.css('width', '100%');
                                                let res = $('#res');
                                                if (res.val().length == 1) {
                                                    if (res.val().toLowerCase() === 'd') {
                                                        cantBuenas++;
                                                        $('.p10').html('<strong class="listo">Pregunta 10</strong>');
                                                    } else {
                                                        cantMalas++;
                                                        $('.p10').html('<strong class="falla">Pregunta 10</strong>');
                                                    }
                                                    // Llenamos la Variable para decir cual es la corecta y la seleccionada por el usuario
                                                    resp10 = `(${res.val().toUpperCase()})`;
                                                    progress.hide();

                                                } else if ((res.val().length == 0) || (res.val().length > 1)) {
                                                    alert("Debe selecionar solo una letra");
                                                }
                                                let puntaje = cantBuenas * 0.5;
                                                let estado = "";
                                                if(puntaje >= 3.0){
                                                    estado =`<strong class="apro">Aprobado</strong>`;
                                                }else if(puntaje < 3.0){
                                                    estado =`<strong class="repro">Reprobado</strong>`;
                                                }
                                                aux = " ";
                                                let resultadoTest = `<div class="resultado">
                                                                        <div class="puntaje">
                                                                            <h2>Su resultado es: </h2>
                                                                            <p>NOTA: Pregunta buena 0.5</p>
                                                                            <p>
                                                                                Preguntas Buenas: ${cantBuenas}<br> <br> 
                                                                                Preguntas Malas: ${cantMalas} </br> <br>
                                                                                Puntaje Total: ${puntaje} &nbsp ${estado}
                                                                            </p>
                                                                            <div class="refresh">
                                                                                <input type="button" value="Inicio" id="inicio" class="refrescar">
                                                                            </div>
                                                                        </div>   
                                                                        <div class="res-preguntas">    
                                                                            <table >
                                                                                <tr>
                                                                                    <th>#</th>
                                                                                    <th class="c">R Correcta</th>
                                                                                    <th class="s">R Seleccionada</th>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>1</td>
                                                                                    <td class="c">(D)</td>
                                                                                    <td class="s">${resp1}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>2</td>
                                                                                    <td class="c">(C)</td>
                                                                                    <td class="s">${resp2}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>3</td>
                                                                                    <td class="c">(B)</td>
                                                                                    <td class="s">${resp3}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>4</td>
                                                                                    <td class="c">(C)</td>
                                                                                    <td class="s">${resp4}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>5</td>
                                                                                    <td class="c">(C)</td>
                                                                                    <td class="s">${resp5}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>6</td>
                                                                                    <td class="c">(A)</td>
                                                                                    <td class="s">${resp6}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>7</td>
                                                                                    <td class="c">(D)</td>
                                                                                    <td class="s">${resp7}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>8</td>
                                                                                    <td class="c">(A)</td>
                                                                                    <td class="s">${resp8}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>9</td>
                                                                                    <td class="c">(D)</td>
                                                                                    <td class="s">${resp9}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>10</td>
                                                                                    <td class="c">(D)</td>
                                                                                    <td class="s">${resp10}</td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>`;
                                                questions.html(resultadoTest);
                                                $('.refrescar').click((e) => {
                                                    e.preventDefault();

                                                    // let confirm = false;
                                                    // confirm = confirm("Deseas Hacer la prueba de nuevo???");

                                                    if (confirm("Deseas Hacer la prueba de nuevo???")) {
                                                        location.reload();
                                                    }
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });


    });
}); 