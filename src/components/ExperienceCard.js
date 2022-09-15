import React from "react";

export default class ExperienceCard extends React.Component {
    render() {
        return(
            <div className="box has-text-left">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={this.props.logo} alt="Logo" />
                        </figure>
                    </div>

                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.title}</strong> - {this.props.time} <br />
                                {this.props.children}
                            </p>
                        </div>

                        <nav className="level is-mobile">
                            <div className="level-left">
                                {this.props.tags.map(tag => (
                                    <span className="level-item" key={tag}><span className="tag is-info">{tag}</span></span>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}