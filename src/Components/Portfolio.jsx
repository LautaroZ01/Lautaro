import React from 'react'

export const Portfolio = () => {
    return (
        <section className="container portfolio" id="my-portfolio">
            <header className="portfolio-title">
                <span className="badge rounded-pill home-badge">Desarrollo</span>
                <h1><strong className="s-info">M</strong>is Proyectos</h1>
                <p>Algunos de los proyectos que realice como desarrollador web.</p>
            </header>

            <section className="row row-portfolio">
                <div className="portofolio-desc">
                    <h3><strong className="s-info">D</strong>esarrollando proyectos</h3>
                    <p>
                        Actualmente me encuentro en el trabajo de desarrollar
                        proyectos para ampliar mis conocimientos.
                    </p>
                </div>
            </section>
        </section>
    )
}
