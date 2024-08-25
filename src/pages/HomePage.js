import React, { Fragment } from 'react';
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <Fragment>
            <div className='container-fluid text-center'>
                <div className='bienvenidos'>
                    <div className='saludo'>
                        <h1 className='display-1'>Bienvenidos</h1>
                        <h2 className='display-4'>Misogi Aikikai Argentina</h2>
                        <h2 className='display-4'>Escuela de Aikido</h2>
                    </div>
                    <img src='../images/header/logo1.png' alt='logo' />
                </div>
                <div class="card mb-3 mt-5">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="../images/home/inst.jpg" class="img-fluid p-3 rounded-start" alt="instructores" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title display-5">Nuestra Escuela</h5>
                                <p class="card-text lh-lg fs-6">Somos un grupo de Instructores apasionados por el Aikido con una amplia trayectoria en la práctica y la
                                    difusión de este maravillo Arte.
                                    Nos unimos para compartir nuestro conocimiento y ayudar a nuestros estudiantes a crecer tanto física
                                    como mentalmente.
                                    Trabajamos juntos para enriquecer tu experiencia, creando un ambiente positivo y motivador para que
                                    logres desarrollar todo su potencial.<br></br>
                                    Cada Instructor tiene un estilo único y se especializa en diferentes aspectos del Aikido,
                                    garantizando un aprendizaje desde diversas perspectivas.
                                    No solo nos enfocamos en la enseñanza de las técnicas, sino también en afianzar valores como la
                                    autodisciplina, la confianza, la resiliencia y el respeto.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 mt-5">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="../images/home/sakanashi.jpg" class="img-fluid p-3 rounded-start" alt="sakanashi" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title display-5">Legado</h5>
                                <p class="card-text lh-lg fs-6">Misogi Aikikai Argentina nace en septiembre de 2000 con la idea de difundir este Arte en el barrio de Villa del Parque (C.A.B.A), en ese
                                    momento bajo la dirección de SENSEI MASSAFUMI SAKANASHI.
                                    Desde esa época hasta la actualidad se desarrolla la difusión ininterrumpidamente a cargo de Instructores de trayectoria.
                                    La base fundamental de la práctica en esta organización es recorrer sin misterios el camino del BUDO,
                                    experimentar la posibilidad de sacar los conceptos del arte marcial y verterlos en la vida cotidiana.
                                    Hacer "MISOGI", con sus aciertos y errores.
                                    Buscar "limpiar" los miedos, enfrentarse a los propios obstáculos, encontrarse con uno mismo en la práctica,
                                    reconocer los límites, conectarse verdaderamente con el otro desde la gratitud y el respeto, usar
                                    las herramientas que nos provee este legado, patrimonio de la humanidad, que es el AIKIDO.
                                    Hoy bajo la dirección paciente de Sensei RICARDO CORBAL y afiliados a la Asociación Sudamericana de
                                    Aikido, seguimos recorriendo este camino con la misma motivación de siempre hacia la práctica, junto
                                    a numerosos amigos de DO ("camino"), maestros y compañeros.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mt-5">
                    <div class="card-body">
                        <h2 className='display-4'>Aikido y Salud</h2>
                        <h4 className='display-6'>Beneficios de practicar</h4>
                    </div>
                </div>


                <div class="card-group mt-5">
                    <div class="card">
                        <img src="../images/home/2.jpg" class="img-fluid p-3" alt="flexibilidad" />
                        <div class="card-body">
                            <h5 class="card-title text-danger display-6">Flexibilidad</h5>
                            <p class="card-text">Se adquiere flexibilidad muscular y mejora el funcionamiento de las articuaciones. Aumenta el flujo sanguíneo y mejora la salud general. Fortalece el equilibrio físico y la coordinación.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary"></small>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../images/home/5.jpg" class="img-fluid p-3" alt="confianza" />
                        <div class="card-body">
                            <h5 class="card-title text-danger display-6">Confianza</h5>
                            <p class="card-text">Aumenta la confianza en uno mismo y mejora el autocontrol. Ayuda a mantener un equilibrio entre mente y cuerpo. Aikido se adapta a las necesidades de las personas y fomenta la armonía.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary"></small>
                        </div>
                    </div>
                </div>
                <div class="card-group">
                    <div class="card">
                        <img src="../images/home/4.jpg" className="img-fluid p-3" alt="conciencia" />
                        <div class="card-body">
                            <h5 class="card-title text-danger display-6">Conciencia</h5>
                            <p class="card-text">Aikido nos permite ser conscientes de nuestro cuerpo y controlar nuestra respiración. Aprendemos a redirigir la energía del atacante sin hacernos daño, mejorando nuestra capacidad de respuesta y reflejos.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary"></small>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../images/home/7.jpg" class="img-fluid p-3" alt="respeto" />
                        <div class="card-body">
                            <h5 class="card-title text-danger display-6">Respeto</h5>
                            <p class="card-text">Se desarrollan valores como el respeto por los demás y el cuidado de su integridad. Aikido nos enseña que la fuerza no es solo física, sino también mental.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary"></small>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};


export default HomePage;