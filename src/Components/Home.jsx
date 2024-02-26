import React from 'react'
import { Instagram } from './Icons/Instagram'
import { Facebook } from './Icons/Facebook'
import { X } from './Icons/X'

export const Home = () => {
    return (
        <main className="container home" id="home-me">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 home-avatar">
                    <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                        alt="Avatar" />
                </div>
                <div className="col-12 col-md-6 col-lg-8 home-info">
                    <div className="home-info-titulo">
                        <header className="home-titulo">
                            <h1><strong className="s-info">H</strong>ola, soy <strong className="s-name">Lautaro Zuleta</strong>
                            </h1>
                            <a href="#">
                                <span className="badge rounded-pill home-badge">Listo para trabajar</span>
                            </a>
                        </header>
                        <h2>Desarrollador <strong className="s-info">Web Full Stack</strong>. <span className="s-info2">De Salta,
                            Argentina. </span> Especializado en Crear Paginas Webs
                            interactivas y aplicaciones unicas.
                        </h2>
                    </div>
                    <div className="home-btns">
                        <div className="home-btn">
                            <button className="btn-dowload">Descargar CV</button>
                            <button className="btn-about">Saber más</button>
                        </div>
                        <div className="home-a">
                            <a href="" className="nav-social nav-link">
                                <Instagram></Instagram>
                            </a>
                            <a href="" className="nav-social nav-link">
                                <Facebook></Facebook>
                            </a>

                            <a href="" className="nav-social nav-link">
                                <X></X>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="next"><a href="#about-me" className="btn-dowload btn-next">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-track-next"
                    width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 5v14l8 -7z" />
                    <path d="M14 5v14l8 -7z" />
                </svg>
            </a></div>
        </main>
    )
}
