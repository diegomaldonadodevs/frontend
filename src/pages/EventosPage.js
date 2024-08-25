import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EventoItem from '../components/eventos/EventoItem';
import '../styles/components/pages/EventosPage.css';

const EventosPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [eventos, setEventos] = useState([]);
    useEffect(() => {
        const cargarEventos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/eventos');
            setEventos(response.data);
            setLoading(false);
        };
        cargarEventos();
    }, []);
    return (
        <section className='container-eventos container text-center'>
            <h2 className='display-4'>Eventos</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    eventos.map(item => <EventoItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        fecha={item.fecha} hora={item.hora} lugar={item.lugar}
                        imagen={item.imagen} body={item.cuerpo} />)
                )
            }
        </section>
    );
}


export default EventosPage;