import React from 'react';

const EventoItem = (props) => {
    const { title, subtitle, fecha, hora, lugar, imagen, body } = props;

    return (

        <section className='eventos container mt-5'>

            <div className='titulo mt-3 p-3'>
                <h3 className='titulo-texto'>{title}</h3>
                <h5 className='titulo-texto mt-2'>{subtitle}</h5>
                <img src={imagen} className='rounded p-2' alt='img' />
            </div>
            <div className='info'>
                <div className='fecha mt-5 text-start'>
                    <h6>Días: {fecha}</h6>
                    <h6>Inicio: {hora}</h6>
                    <h6>Lugar: {lugar}</h6>
                </div>
                <div className='cuerpo fs-5'>
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                    
                </div>
            </div>
        </section>
    );
};


export default EventoItem;
