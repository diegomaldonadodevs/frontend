import React from "react";
import '../styles/components/pages/HorariosPage.css';

const Horarios = (props) => {
    return (
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Lunes
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                        <div className="row">
                            <div className="col-4">
                                19.30 a 20.30
                            </div>
                            <div className="col-4">
                                Adultos y Adolescentes
                            </div>
                            <div className="col-4">
                                Sensei Víctor
                            </div>
                            <div className="col-4">
                                20.45 a 21.45
                            </div>
                            <div className="col-4">
                                Adultos y Adolescentes
                            </div>
                            <div className="col-4">
                                Sensei Daniel
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Martes
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <div className="row">
                            <div className="col-4">
                                18.30 a 19.30
                            </div>
                            <div className="col-4">
                                Niños
                            </div>
                            <div className="col-4">
                                Sensei Eugenia
                            </div>
                            <div className="col-4">
                                19.30 a 20.30
                            </div>
                            <div className="col-4">
                                Niños
                            </div>
                            <div className="col-4">
                                Sensei Eugenia
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Miércoles
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <div className="row">
                            <div className="col-4">
                                19.30 a 20.30
                            </div>
                            <div className="col-4">
                                Adultos y Adolescentes
                            </div>
                            <div className="col-4">
                                Sensei Sergio
                            </div>
                            <div className="col-4">
                                20.45 a 21.45
                            </div>
                            <div className="col-4">
                                Adultos y Adolescentes
                            </div>
                            <div className="col-4">
                                Sensei Daniel
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                        Jueves
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <div className="row">
                            <div className="col-4">
                                18.30 a 19.30
                            </div>
                            <div className="col-4">
                                Niños
                            </div>
                            <div className="col-4">
                                Sensei Eugenia
                            </div>
                            <div className="col-4">
                                19.30 a 20.30
                            </div>
                            <div className="col-4">
                                Niños
                            </div>
                            <div className="col-4">
                                Sensei Eugenia
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                        Viernes
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <div className="row">
                            <div className="col-4">
                                19.30 a 20.30
                            </div>
                            <div className="col-4">
                                Adultos y Adolescentes
                            </div>
                            <div className="col-4">
                                Sensei Diego
                            </div>
                            <div className="col-4">
                                20.45 a 21.45
                            </div>
                            <div className="col-4">
                                Adultos y Adolescentes
                            </div>
                            <div className="col-4">
                                Sensei Daniel
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Horarios;