import React from 'react';
import '../../styles/components/layout/Footer.css';


const Footer = (props) => {
    return (
        <section className='footer container-fluid'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <ul className='foo-1'>
                            <li><img src='/images/header/logo1.png' className='img-fluid' alt='logo' /></li>
                            <li><a href='/'>Misogi Aikikai Argentina</a></li>
                        </ul>
                        <ul className='foo-1'>
                            <li><a href='https://www.instagram.com/invites/contact/?igsh=50urpahz64r8&utm_content=e5vpxdg' target='blank'><i className="fa-brands fa-instagram fa-2xl"></i></a></li>
                            <li><a href='https://www.facebook.com/share/sUuoiLJDta9XLjMz/?mibextid=qi2Omg' target='blank'><i className="fa-brands fa-facebook fa-2xl"></i></a></li>
                            <li><a href='https://youtube.com/@misogiaikikaiargentina?si=6OPulyLZp5e97nra' target='blank'><i class="fa-brands fa-youtube fa-2xl"></i></a></li>
                        </ul>
                    </div>
                    <nav className='col mt-4'>
                        <h4>Sitio</h4>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/aikido'>Aikido</a></li>
                            <li><a href='/aikidokids'>Aikido Kids</a></li>
                            <li><a href='/horarios'>Horarios</a></li>
                            <li><a href='/nosotros'>Nosotros</a></li>
                            <li><a href='/eventos'>Eventos</a></li>
                            <li><a href='/contacto'>Contacto</a></li>
                        </ul>
                    </nav>
                    <div className='col text-start mt-4'>
                        <h4>Contactanos</h4>
                        <ul className='foo-2'>
                            <li><i className="fa-brands fa-whatsapp fa-xl"></i><a href='https://whatsapp.com/dl/' target='blank'>351 8 657 654</a></li>
                            <li><i className="fa-regular fa-envelope fa-xl"></i>misogi.aikikai.arg@gmail.com</li>
                            <li><i class="fa-solid fa-location-dot fa-xl"></i><a href='https://maps.app.goo.gl/7diwErFoKerU4GLE7' target='blanck'>Bedoya 891-Córdoba-Argentina</a></li>
                        </ul>
                    </div>
                </div>
                <div className='foo-3 row text-center'>
                    <div className='col'>
                        <div className='foo-4'>
                            <p>Copyright  <i class="fa-regular fa-copyright"></i> 2024 Misogi Aikikai Argentina - Todos los derechos reservados </p>
                            <p>Desarrollado por Diego Maldonado</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Footer;