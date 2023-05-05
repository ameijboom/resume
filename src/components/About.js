import React from "react";
import headshot from '../assets/headshot.jpg';

export default class About extends React.Component {
    render() {
        return(
            <div className="About card">
                <div className="card-image">
                    <figure className="image">
                            <img src={headshot} alt="headshot" />
                    </figure>
                </div>

                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">Alwin Meijboom</p>
                            <p className="subtitle is-6">@mythicalsora</p>
                        </div>
                    </div>

                    <div className="content">
                        Hello! My name is Alwin Meijboom, also known online as MythicalSora,
                        a 22-year old CMGT student @ Saxion in Enschede.
                        I'm originally from Zwolle, but moved to Enschede for my study early 2022.
                    </div>
                </div>
            </div>
        )
    }
}