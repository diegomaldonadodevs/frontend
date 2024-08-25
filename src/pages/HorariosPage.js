import React from 'react';
import '../styles/components/pages/HorariosPage.css';
import Horarios from '../components/Horarios';



const HorariosPage = (props) => {
    return (
        <div className="container text-center">
            <h2 className='display-4'>Horarios</h2>
            <Horarios />
        </div>
    );
}

export default HorariosPage;