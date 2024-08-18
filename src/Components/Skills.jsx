import React from 'react'
import { Java } from './Lang/Java'
import { IconNode } from './Lang/IconNode'
import { Python } from './Lang/Python'
import { HTML } from './Lang/HTML'
import { Css } from './Lang/Css'
import { Js } from './Lang/Js'
import { Ts } from './Lang/Ts'
import { Bootstrap } from './Lang/Bootstrap'
import { Astro } from './Lang/Astro'
import { IconReact } from './Lang/IconReact'
import { Angular } from './Lang/Angular'
import { Django } from './Lang/Django'
import { Mysql } from './Lang/Mysql'
import { Mongo } from './Lang/Mongo'
import { Postgres } from './Lang/Postgres'
import { Git } from './Lang/Git'
import { GitHub } from './Icons/GitHub'
import { Tailwind } from './Lang/Tailwind'
import { Express } from './Lang/Express'
import { IconVSCode } from './Lang/IconVSCode'
import { Postman } from './Lang/Postman'
import { Eclipse } from './Lang/Eclipse'

export const Skills = () => {
    return (
        <section className="container skills observer" id="skills-me" dataObserverId='observer3'>
            <header>
                <span className="badge rounded-pill home-badge">Conocimiento</span>
                <h1><strong className="s-info">M</strong>is Habilidades</h1>
            </header>

            {/* <section className="row skill-row text-center">
                <div className="col-7 col-sm-5 skill-col">

                    <div className="skills-items">
                        <article className="item-skill">
                            <div className="item-badge">
                                <span>Java</span>
                            </div>

                            <div className="skill-icon">
                                <Java></Java>
                            </div>
                        </article>

                        <article className="item-skill">

                            <div className="item-badge">
                                <span>NodeJS</span>
                            </div>

                            <div className="skill-icon">
                                <IconNode></IconNode>
                            </div>
                        </article>

                        <article className="item-skill">

                            <div className="item-badge">
                                <span>Python</span>
                            </div>

                            <div className="skill-icon">
                                <Python></Python>
                            </div>
                        </article>

                        <article className="item-skill">

                            <div className="item-badge">
                                <span>ExpressJS</span>
                            </div>

                            <div className="skill-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24">
                                    <path fill="#fff"
                                        d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" />
                                </svg>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="col-5 col-sm-7 skill-col">
                    <div className="skills-items">
                        <article className="item-skill">

                            <div className="item-badge">
                                <span>HTML5</span>
                            </div>

                            <div className="skill-icon">
                                <HTML></HTML>
                            </div>
                        </article>

                        <article className="item-skill">

                            <div className="item-badge">
                                <span>CSS3</span>
                            </div>

                            <div className="skill-icon">
                                <Css></Css>
                            </div>
                        </article>

                        <article className="item-skill">

                            <div className="item-badge">
                                <span>JavaScript</span>
                            </div>

                            <div className="skill-icon">
                                <Js></Js>
                            </div>
                        </article>

                        <article className="item-skill">

                            <div className="item-badge">
                                <span>TypeScript</span>
                            </div>

                            <div className="skill-icon">
                                <Ts></Ts>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="col-7 col-sm-7 skill-col">

                    <div className="skills-items">
                        <article className="item-skill">

                            <div className="item-badge">
                                <span>Bootstrap</span>
                            </div>

                            <div className="skill-icon">
                                <Bootstrap></Bootstrap>
                            </div>
                        </article>

                        <article className="item-skill">

                            <div className="item-badge">
                                <span>Astro</span>
                            </div>

                            <div className="skill-icon">
                                <Astro></Astro>
                            </div>
                        </article>
                        <article className="item-skill">

                            <div className="item-badge">
                                <span>ReactJs</span>
                            </div>

                            <div className="skill-icon">
                                <IconReact></IconReact>
                            </div>
                        </article>

                        <article className="item-skill">

                            <div className="item-badge">
                                <span>Angular</span>
                            </div>

                            <div className="skill-icon">
                                <Angular></Angular>
                            </div>
                        </article>

                        <article className="item-skill">

                            <div className="item-badge">
                                <span>Django</span>
                            </div>

                            <div className="skill-icon">
                                <Django></Django>
                            </div>
                        </article>

                    </div>
                </div>

                <div className="col-5 col-sm-5 skill-col">
                    <div className="skills-items">
                        <article className="item-skill">

                            <div className="item-badge">
                                <span>MongoDB</span>
                            </div>

                            <div className="skill-icon">
                                <Mongo></Mongo>
                            </div>
                        </article>

                        <article className="item-skill">

                            <div className="item-badge">
                                <span>MySQL</span>
                            </div>

                            <div className="skill-icon">
                                <Mysql></Mysql>
                            </div>
                        </article>

                        <article className="item-skill">

                            <div className="item-badge">
                                <span>Postgres</span>
                            </div>

                            <div className="skill-icon">
                                <Postgres></Postgres>
                            </div>
                        </article>

                        <article className="item-skill">

                            <div className="item-badge">
                                <span>GIT</span>
                            </div>

                            <div className="skill-icon">
                                <Git></Git>
                            </div>
                        </article>
                        <article className="item-skill">

                            <div className="item-badge">
                                <span>GitHub</span>
                            </div>

                            <div className="skill-icon">
                                <GitHub></GitHub>
                            </div>
                        </article>
                    </div>
                </div>
            </section> */}

            <section className="row skill-row text-center">
                <section className="container-skills">
                    <strong>Frontend</strong>
                    <div className='list-skills'>
                        <article className='article-skill'>
                            <div className='icon-skill'>
                                <HTML />
                            </div>
                            <div className='about-skill'>
                                <strong>HTML</strong>
                                <small>Estructura web</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill'>
                                <Css />
                            </div>
                            <div className='about-skill'>
                                <strong>CSS</strong>
                                <small>Estilo web</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <Js />
                            </div>
                            <div className='about-skill'>
                                <strong>Javascript</strong>
                                <small>Lenguaje web</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <Ts />
                            </div>
                            <div className='about-skill '>
                                <strong>Typescript</strong>
                                <small>Lenguaje web</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <IconReact />
                            </div>
                            <div className='about-skill '>
                                <strong>ReactJS</strong>
                                <small>Libreria UI</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <Angular />
                            </div>
                            <div className='about-skill '>
                                <strong>Angular</strong>
                                <small>Framework</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon express-icon'>
                                <Astro />
                            </div>
                            <div className='about-skill '>
                                <strong>Astro</strong>
                                <small>Sitio statico</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <Bootstrap />
                            </div>
                            <div className='about-skill '>
                                <strong>Boostrap</strong>
                                <small>CSS Framework</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <Tailwind />
                            </div>
                            <div className='about-skill '>
                                <strong>Tailwind CSS</strong>
                                <small>CSS Framework</small>
                            </div>
                        </article>
                    </div>
                </section>

                <section className='container-skills'>
                    <strong>Backend</strong>
                    <div className='list-skills'>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <Python />
                            </div>
                            <div className='about-skill '>
                                <strong>Python</strong>
                                <small>Machine Learning</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <Java />
                            </div>
                            <div className='about-skill '>
                                <strong>Java</strong>
                                <small>POO</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <IconNode />
                            </div>
                            <div className='about-skill'>
                                <strong>Node JS</strong>
                                <small>JS Tool</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon express-icon'>
                                <Express />
                            </div>
                            <div className='about-skill '>
                                <strong>Express.js</strong>
                                <small>REST APIs</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <Django />
                            </div>
                            <div className='about-skill '>
                                <strong>Django</strong>
                                <small>Ph Framework</small>
                            </div>
                        </article>
                    </div>
                </section>

                <section className='container-skills'>
                    <strong>DataBases</strong>
                    <div className='list-skills'>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <Postgres />
                            </div>
                            <div className='about-skill '>
                                <strong>PostgreSQL</strong>
                                <small>DB Relacional</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <Mysql />
                            </div>
                            <div className='about-skill '>
                                <strong>MySQL</strong>
                                <small>DB Relacional</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <Mongo />
                            </div>
                            <div className='about-skill '>
                                <strong>Mongo DB</strong>
                                <small>DB No Relacional</small>
                            </div>
                        </article>
                    </div>
                </section>

                <section className='container-skills'>
                    <strong>Herramientas</strong>
                    <div className='list-skills'>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <IconVSCode/>
                            </div>
                            <div className='about-skill '>
                                <strong>VSCode</strong>
                                <small>Tool</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <GitHub/>
                            </div>
                            <div className='about-skill '>
                                <strong>GitHub</strong>
                                <small>Repository</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <Git/>
                            </div>
                            <div className='about-skill '>
                                <strong>Git</strong>
                                <small>Tool</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <Postman/>
                            </div>
                            <div className='about-skill '>
                                <strong>Postman</strong>
                                <small>API Tool</small>
                            </div>
                        </article>
                        <article className='article-skill'>
                            <div className='icon-skill java-icon'>
                                <Eclipse />
                            </div>
                            <div className='about-skill '>
                                <strong>Eclipse</strong>
                                <small>Java IDE</small>
                            </div>
                        </article>
                    </div>
                </section>
            </section>

        </section>
    )
}
