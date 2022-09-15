import React from "react";
import Icon from "@mdi/react";
import {mdiDownload, mdiGithub, mdiLinkedin} from "@mdi/js";
// import headshot from "../assets/headshot.jpg";

export default class Header extends React.Component {
    render() {
        return(
            <section className="hero is-info is-medium">
                <div className="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div id="navMenu" class="navbar-menu">
                            <div class="navbar-end">
                                <div class="navbar-item">
                                    <div class="buttons">
                                        <a href="https://github.com/MythicalSora" target="_blank" rel="noreferrer" class="button is-info is-inverted">
                                            <span class="icon">
                                                <Icon path={mdiGithub}/>
                                            </span>
                                            <span>Github</span>
                                        </a>

                                        <a href="https://nl.linkedin.com/in/alwin-meijboom-94908b154" target="_blank" rel="noreferrer" class="button is-info is-inverted">
                                            <span class="icon">
                                                <Icon path={mdiLinkedin}/>
                                            </span>
                                            <span>LinkedIn</span>
                                        </a>

                                        <button class="button is-info is-inverted">
                                            <span class="icon">
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
                        <h2 className="subtitle">A developer from Enschede</h2>
                    </div>
                </div>
            </section>
        )
    }
}