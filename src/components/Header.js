import React from "react";
import Icon from "@mdi/react";
import {mdiDownload, mdiGithub, mdiLinkedin} from "@mdi/js";
// import headshot from "../assets/headshot.jpg";

export default class Header extends React.Component {
    render() {
        return(
            <section className="hero is-info is-medium" id="Header">
                <div className="hero-head">
                    <nav className="navbar">
                        <div className="container">
                            <div id="navMenu" className="navbar-menu">
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="buttons">
                                        <a href="https://github.com/MythicalSora" target="_blank" rel="noreferrer" className="button is-info is-inverted">
                                            <span className="icon">
                                                <Icon path={mdiGithub}/>
                                            </span>
                                            <span>Github</span>
                                        </a>

                                        <a href="https://nl.linkedin.com/in/alwin-meijboom-94908b154" target="_blank" rel="noreferrer" className="button is-info is-inverted">
                                            <span className="icon">
                                                <Icon path={mdiLinkedin}/>
                                            </span>
                                            <span>LinkedIn</span>
                                        </a>

                                        <button className="button is-info is-inverted" onClick={window.print}>
                                            <span className="icon">
                                                <Icon path={mdiDownload}/>
                                            </span>
                                            <span>Download</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">Hi, I'm Alwin Meijboom!</h1>
                        <h2 className="subtitle">A developer & student from Enschede</h2>
                    </div>
                </div>
            </section>
        )
    }
}