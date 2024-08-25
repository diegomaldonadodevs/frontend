import React from 'react';
import '../styles/components/pages/ContactoPage.css';
import { useState } from 'react';
import axios from 'axios';


const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        consulta: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        <section className="container-contacto container-fluid">
            <div className='row'>
                <div className="formulario col text-center">
                    <form action="/contacto" method="post" onSubmit={handleSubmit}>
                        <h3 className='display-4'>Dejanos tu consulta</h3>
                        <p>
                            <input type="text" placeholder='nombre' name='nombre' value={formData.nombre} onChange={handleChange} />
                        </p>
                        <p>
                            <input type="text" placeholder='apellido' name='apellido' value={formData.apellido} onChange={handleChange} />
                        </p>
                        <p>
                            <input type="'text" placeholder='telefono' name='telefono' value={formData.telefono} onChange={handleChange} />
                        </p>
                        <p>
                            <input type="text" placeholder='email' name='email' value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <textarea placeholder='consulta' name='consulta' value={formData.consulta} onChange={handleChange}></textarea>
                        </p>
                        <p>
                            <button type="submit" class="btn btn-danger">Enviar</button>

                        </p>
                    </form>

                    {sending ? <div class="spinner-border text-danger" role="status">
                                    <span class="visually-hidden">Enviando...</span>
                                </div> : null}
                    {msg ? <p>{msg}</p> : null}

                </div>
                <div className="datos col">
                    <h3 className='display-4 text-center'>Nuestras redes</h3>
                    <ul>
                        <li><a href='https://www.instagram.com/invites/contact/?igsh=50urpahz64r8&utm_content=e5vpxdg' target='blank'><i className="fa-brands fa-instagram fa-2xl"></i></a> @misogiaikikai</li>
                        <li><a href='https://www.facebook.com/share/sUuoiLJDta9XLjMz/?mibextid=qi2Omg' target='blank'><i className="fa-brands fa-facebook fa-2xl"></i></a>Misogi Aikikai Argentina</li>
                        <li><a href='https://whatsapp.com/dl/' target='blank'><i className="fa-brands fa-whatsapp fa-2xl"></i></a>351 8 657 654</li>
                        <li><a href='https://youtube.com/@misogiaikikaiargentina?si=6OPulyLZp5e97nra' target='blank'><i class="fa-brands fa-youtube fa-2xl"></i></a>Youtube</li>
                        <li><a href='https://www.google.com/intl/es-419/gmail/about/' target='blank'><i className="fa-regular fa-envelope fa-2xl"></i></a>misogi.aikikai.arg@gmail.com</li>

                    </ul>
                </div>
            </div>
        </section>
    );
}


export default ContactoPage;