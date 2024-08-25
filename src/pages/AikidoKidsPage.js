import React from 'react';
import '../styles/components/pages/AikidoKidsPage.css';


const AikidoKidsPage = (props) => {
    return (
        <section className='aikido-kids container mt-5'>
            <div className="kid-inicio">
                <div>
                    <img src="../images/ninos/aikidokids.jpg" className='rounded' alt="kid 5" />
                </div>
                <div>
                    <h2 className='display-4 text-center'>Aikido Kids</h2>
                    <p className='text-center'>
                        El Aikido se enfoca en la defensa personal sin violencia. Su práctica ofrece numerosos beneficios para los niños, tanto a nivel físico como emocional y social.
                        Al aprender técnicas de defensa personal, los niños ganan confianza en sí mismos y en sus habilidades.
                        Se enseña a los niños a manejar el estrés y a mantener la calma en situaciones difíciles. La concentración y la paciencia son fundamentales en esta disciplina.
                        Aprenden a trabajar juntos y a ayudarse mutuamente. Esto fomenta el espíritu de equipo y la cooperación, habilidades esenciales para su desarrollo social.
                        Aikido inculca disciplina y respeto hacia los demás. Los niños aprenden a seguir reglas y a respetar a sus compañeros y maestros.
                        <br></br><br></br>Aikido no solo es una excelente forma de ejercicio físico, sino que también contribuye al desarrollo integral de los niños, preparándolos para enfrentar los desafíos de la vida con confianza y serenidad.
                    </p>
                </div>
            </div>
            <div className="kid mt-5 text-center">
                <div>
                    <img src="../images/ninos/kid_10.jpg" className='rounded' alt="kid 1" />
                </div>
                <div>
                    <h3>Desarrollo físico</h3>
                    <p>
                        A través de juegos y técnicas, los niños exploran sus capacidades físicas, aprenden a conocer mejor
                        su cuerpo y ganan confianza en sí mismos.
                    </p>
                </div>
                <div>
                    <img src="../images/ninos/kid_11.jpg" className='rounded' alt="kid 2" />
                </div>
                <div>
                    <h3>No Violencia</h3>
                    <p>
                        Aikido es una disciplina no violenta. Los niños aprenden a no ser agresivos y a resolver conflictos
                        con calma.
                        Las técnicas de inmovilización y desequilibrio canalizan la fuerza del atacante para evitar la
                        lucha.
                    </p>
                </div>
            </div>
            <div className="kid mt-5 text-center">
                <div>
                    <img src="../images/ninos/kid_14.jpg" className='rounded' alt="kid 3" />
                </div>
                <div>
                    <h3>Elasticidad y respiración</h3>
                    <p>
                        Ayuda a aumentar la elasticidad de las articulaciones.
                        Mejora la respiración mediante técnicas específicas.
                    </p>
                </div>
                <div>
                    <img src="../images/ninos/nino20.jpg" className='rounded' alt="kid 4" />
                </div>
                <div>
                    <h3>Concentración y postura</h3>
                    <p>
                        La práctica del Aikido fomenta la concentración y el enfoque.
                        Corrige la postura corporal y fortalece la columna vertebral.
                    </p>
                </div>
            </div>
        </section>
    );
}


export default AikidoKidsPage;