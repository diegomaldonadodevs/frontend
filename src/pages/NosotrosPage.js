import React from 'react';

import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <section className="container-nosotros text-center">
            <h2 className="nos-1 display-4">Los Instructores</h2>
            <div className="nos-2">
                <h3>Daniel Fernandez</h3>
                <h5>5° Dan - Aikikai</h5>
                <h5>Director General - Dojo Cho</h5>
                <ul class="list">
                    <li><i className="fa-brands fa-instagram fa-2xl"></i></li>
                    <li><i className="fa-brands fa-facebook fa-2xl"></i></li>
                </ul>
                <p className='fs-5'>Sensei Daniel, alumno directo de <b>Sensei Masafumi Sakanashi</b>.
                    Su larga trayectoria de mas de 30 años de práctica, demuestra su profundo conocimiento y comprensión
                    del Aikido.
                    Su pasión se refleja en la dedicación constante con el arte marcial.
                    Comprende las luchas y los desafíos de sus alumnos y los guía con amabilidad.
                    A pesar de su experiencia mantiene una actitud humilde y
                    siempre está dispuesto a aprender y crecer.
                </p>
            </div>
            <img className="img-1" src="images/nosotros/daniel.jpg" alt="daniel" />
            <img className="img-2" src="images/nosotros/sergio.jpg" alt="sergio" />
            <div className="nos-3">
                <h3>Sergio Rossi</h3>
                <h5>4° Dan - Aikikai</h5>
                <h5>Instructor</h5>
                <ul className="list">
                    <li><i class="fa-brands fa-instagram fa-2xl"></i></li>
                    <li><i class="fa-brands fa-facebook fa-2xl"></i></li>
                </ul>
                <p className='fs-5'>
                    Sensei Sergio, mas de 20 años de práctica.
                    Amable, sencillo y armonioso.
                    Motiva a sus estudiantes a superar sus límites y a seguir practicando.
                    Inspirador y alentador.
                    Su positividad es contagiosa.
                </p>
            </div>
            <img className="img-3" src="images/nosotros/eugenia.jpg" alt="eugenia" />
            <div className="nos-4">
                <h3>Eugenia Cuervo</h3>
                <h5>2° Dan - Aikikai</h5>
                <h5>Instructora Niños</h5>
                <ul className="list">
                    <li><i class="fa-brands fa-instagram fa-2xl"></i></li>
                    <li><i class="fa-brands fa-facebook fa-2xl"></i></li>
                </ul>
                <p className='fs-5'>
                    Sensei Eugenia con mas de 20 años de práctica.
                    Transmite su amor por el arte marcial y motiva a los pequeños a participar activamente.
                    Aunque se centra en la diversión, también comparte los valores del Aikido, como la
                    armonía y el respeto.
                </p>
            </div>
            <img className="img-4" src="images/nosotros/diego.jpg" alt="diego" />
            <div className="nos-5">
                <h3>Diego Maldonado</h3>
                <h5>3° Dan - Aikikai</h5>
                <h5>Instructor</h5>
                <ul className="list">
                    <li><i class="fa-brands fa-instagram fa-2xl"></i></li>
                    <li><i class="fa-brands fa-facebook fa-2xl"></i></li>
                </ul>
                <p className='fs-5'>
                    Sensei Diego con mas de 15 años de trayectoria.
                    Enfoque dinámico del Aikido orientado a la actividad física.
                    Pragmático y funcional.
                    Su actitud positiva motiva a otros a esforzarse al máximo.
                </p>
            </div>
            <img className="img-5" src="images/nosotros/victor.jpg" alt="victor" />
            <div className="nos-6">
                <h3>Victor Ferreyra</h3>
                <h5>3° Dan - Aikikai</h5>
                <h5>Instructor</h5>
                <ul className="list">
                    <li><i class="fa-brands fa-instagram fa-2xl"></i></li>
                    <li><i class="fa-brands fa-facebook fa-2xl"></i></li>
                </ul>
                <p className='fs-5'>
                    Sensei Victor con una trayectoria de 15 años en el Aikido.
                    Su enfoque minucioso se refleja en la forma que explica
                    las técnicas.
                    Su dedicación a la mejora constante es un ejemplo para todos los que lo rodean.
                </p>
            </div>
        </section>
    );
}


export default NosotrosPage;