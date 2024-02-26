import React, { useState } from 'react'
import { GitHub } from './Icons/GitHub';
import { Linkedin } from './Icons/Linkedin';

export const Nav = () => {
    const [darkMode, setDarkMode] = useState(false)

    const darkModeFunction = () => {
        const body = document.body;
        const btnMode = window.document.getElementById('btn-mode-dark');

        var SVGDark = `
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="24"
            height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
            strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        </svg>  
        `;

        var SVGLight = `
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun" width="24"
            height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
            strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path
                d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
        </svg>  
        `
        if (localStorage.getItem('modoOscuro') === 'enabled') {
            document.body.classList.add('dark');
            btnMode.innerHTML = SVGLight;
        }

        if (darkMode) {
            setDarkMode(false)
            localStorage.setItem('modoOscuro', 'disabled');
            body.classList.remove('dark')
            btnMode.innerHTML = SVGDark;

        } else {
            setDarkMode(true)
            localStorage.setItem('modoOscuro', 'enabled');
            body.classList.add('dark')
            btnMode.innerHTML = SVGLight;
        }
    }

    return (
        <header className="container-fluid header">
            <nav className="container nav">
                <h3 className="logo"><a href="#home-me">LZ</a></h3>

                <button className="nav-social nav-link" id="btn-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24"
                        height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                </button>

                <div className="nav-center nav-n" id="nav-none">
                    <ul className="nav-links">
                        <li className="nav-item">
                            <a href="#about-me" className="nav-link">Sobre Mi</a>
                        </li>
                        <li className="nav-item">
                            <a href="#my-portfolio" className="nav-link">Portafolio</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills-me" className="nav-link">Habilidades</a>
                        </li>
                        <li className="nav-item">
                            <a href="#service-me" className="nav-link">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact-me" className="nav-link">Contacto</a>
                        </li>
                    </ul>
                </div>

                <div className="nav-end nav-n" id="nav-none1">
                    <ul className="nav-links">
                        <li className="nav-item">
                            <a href="#" className="nav-social nav-link">
                                <GitHub></GitHub>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-social nav-link">
                                <Linkedin></Linkedin>
                            </a>
                        </li>
                        <li className="nav-item">
                            <button className="nav-social btn-link" id="btn-mode-dark" onClick={darkModeFunction}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="24"
                                    height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
