import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
        const btnEmail = document.getElementById('email-sund');
        const btnEmailNot = document.getElementById('email-not-sund');

        e.preventDefault();
        let datos = e.target


        emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            form.current, {
            publicKey: PUBLIC_KEY,
        }
        ).then(
            () => {
                btnEmail.classList.add('email-ready')

                setTimeout(() => {
                    btnEmail.classList.remove('email-ready')
                }, 3000)

                datos.user_name.value = ''
                datos.user_email.value = ''
                datos.message.value = ''
            },
            (error) => {
                btnEmailNot.classList.add('email-ready')
                setTimeout(() => {
                    btnEmailNot.classList.remove('email-ready')
                }, 3000)
            },
        );
    };

    return (
        <div>
            <section className="container contact observer" id="contact-me" dataObserverId='observer4'>

                <div className="row">
                    <div className="col-12 col-md-6 form-col form-info">
                        <header>
                            <span className="badge rounded-pill home-badge">Contáctame</span>
                            <h1><strong className="s-info">M</strong>is Contactos</h1>
                        </header>
                        <section className="info-contact">
                            <h2><strong className="s-info">I</strong>nfo</h2>
                            <div className="info-item">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="48"
                                    height="48" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                </svg>
                                <div className="info-more">
                                    <span className="badge rounded-pill home-badge">Teléfono</span>
                                    <p>3875192845</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="48"
                                    height="48" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                    <path d="M3 7l9 6l9 -6" />
                                </svg>
                                <div className="info-more">
                                    <span className="badge rounded-pill home-badge">Correo electrónico</span>
                                    <p>lautarozule80@gmail.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="48"
                                    height="48" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </svg>

                                <div className="info-more">
                                    <span className="badge rounded-pill home-badge">Dirección </span>
                                    <p>Salta Capital, Salta, Argentina</p>
                                </div>
                            </div>
                        </section>
                        <section className="info-redes">
                            <div className="info-a">
                                <a href="" className="nav-social nav-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                        <path d="M16.5 7.5l0 .01" />
                                    </svg>
                                </a>
                                <a href="" className="nav-social nav-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                    </svg>
                                </a>

                                <a href="" className="nav-social nav-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-x"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                    </svg>
                                </a>

                                <a href="" className="nav-social nav-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                        <path d="M8 11l0 5" />
                                        <path d="M8 8l0 .01" />
                                        <path d="M12 16l0 -5" />
                                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                    </svg>
                                </a>
                            </div>
                        </section>
                    </div>

                    <div className="col-12 col-md-6 form-col form-data">
                        <h2><strong className="s-info">E</strong>nvía tu consulta aquí </h2>
                        <form className="form" ref={form} onSubmit={sendEmail}>
                            <div className="form-item">
                                <input type="text" placeholder="Escribe tu Nombre" name='user_name' required />
                            </div>
                            <div className="form-item">
                                <input type="email" placeholder="Escribe tu Correo Electronico" name='user_email' required />
                            </div>
                            <div className="form-item">
                                <textarea name="message" id="" cols="30" rows="10" placeholder="Escribe tu Mensaje" required />
                            </div>
                            <div className="form-btn">
                                <button className="btn-dowload">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </div>
    )
}
