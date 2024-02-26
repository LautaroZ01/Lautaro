import React from 'react'

import user from '../assets/Images/user-circle.svg'

export const AboutMe = () => {
    return (
        <section className="container about" id="about-me"
            style={{ backgroundImage: `url(${user})` }}>
            <div className="row">
                <section className="col-12 col-md-7 about-info">
                    <header className="about-titulo">
                        <span className="badge rounded-pill home-badge">Programador</span>
                        <h1><strong className="s-info">A</strong>cerca de Mi</h1>
                    </header>
                    <div className="about-more">
                        <p>Estoy aquí para ser tu socio en el viaje tecnológico. Si están listos para llevar tu proyecto al
                            siguiente nivel o tienen alguna consulta o pregunta sobre este, estoy ansioso por hablar más a
                            fondo.</p>
                        <p>Apacionado por la programacion, actualmente me encuentro estudiando una Tecnicatura Universitaria
                            en Programacion en la Universidad Nacional de Salta.
                            Adicional a eso realice y estoy realizando diferentes cursos para ampliar mis conocimientos
                            sobre la programacion y el desarrollo web.
                        </p>
                        <p>Trabaje y estoy trabanjando en varios proyectos de paginas y aplicaciones webs.</p>
                    </div>
                    <div className="about-btns">
                        <button className="btn-about">Contactame</button>
                        <button className="btn-dowload">Portafolio</button>
                    </div>
                </section>
                <section className="col-12 col-md-5 about-list">
                    <h2><strong className="s-info">I</strong>nformacion personal</h2>
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item list-of-about">
                                <strong className="titulo-list">Nombre:</strong>
                                <span>Zuleta, Lautaro Nicolas</span>
                            </li>
                            <li className="list-group-item list-of-about">
                                <strong className="titulo-list">Edad:</strong>
                                <span>23</span>
                            </li>
                            <li className="list-group-item list-of-about">
                                <strong className="titulo-list">Direccion:</strong>
                                <span>Salta Capital, Salta, Argentina</span>
                            </li>
                            <li className="list-group-item list-of-about">
                                <strong className="titulo-list">Telefono:</strong>
                                <span>3875192845</span>
                            </li>
                            <li className="list-group-item list-of-about">
                                <strong className="titulo-list">Email:</strong>
                                <span>lautarozule80@gmail.com</span>
                            </li>
                            <li className="list-group-item list-of-about">
                                <strong className="titulo-list">Disponibilidad:</strong>
                                <span>Buscando empleo</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="container about-timeline">
                    <div className="row text-center justify-content-center mb-5">
                        <div className="col-xl-6 col-lg-8">
                            <h2 className="font-weight-bold"><strong className="s-info">M</strong>is Estudios</h2>
                            <p className="">Algunas de las cosas que hice para llegar a ser programador</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
                                <div className="timeline-step">
                                    <div className="timeline-content" data-toggle="popover" data-trigger="hover"
                                        data-placement="top" title=""
                                        data-content="And here's some amazing content. It's very engaging. Right?"
                                        data-original-title="2003">
                                        <div className="inner-circle"></div>
                                        <p className="h6 mt-3 mb-1">...</p>
                                    </div>
                                </div>
                                <div className="timeline-step">
                                    <div className="timeline-content" data-toggle="popover" data-trigger="hover"
                                        data-placement="top" title=""
                                        data-content="And here's some amazing content. It's very engaging. Right?"
                                        data-original-title="2003">
                                        <div className="inner-circle"></div>
                                        <p className="h6 mt-3 mb-1"><span className="badge rounded-pill home-badge">2019</span></p>
                                        <p className="h6 mb-0 mb-lg-0">Secundario completo</p>
                                    </div>
                                </div>
                                <div className="timeline-step">
                                    <div className="timeline-content" data-toggle="popover" data-trigger="hover"
                                        data-placement="top" title=""
                                        data-content="And here's some amazing content. It's very engaging. Right?"
                                        data-original-title="2003">
                                        <div className="inner-circle"></div>
                                        <p className="h6 mt-3 mb-1">...</p>
                                    </div>
                                </div>
                                <div className="timeline-step mb-0">
                                    <div className="timeline-content" data-toggle="popover" data-trigger="hover"
                                        data-placement="top" title=""
                                        data-content="And here's some amazing content. It's very engaging. Right?"
                                        data-original-title="2020">
                                        <div className="inner-circle"></div>
                                        <p className="h6 mt-3 mb-1"><span className="badge rounded-pill home-badge">Actual</span>
                                        </p>
                                        <p className="h6 mb-0 mb-lg-0">Estudiando programacion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section >
    )
}
