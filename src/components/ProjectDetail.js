import React from "react";

export default class ProjectDetail extends React.Component {
    render() {
        return(
        <article className="media box">
            <div className="media-left">
                <a href={this.props.url} target="_blank" rel="noreferrer" className="image is-128x128">
                    <img src={this.props.image} alt="Logo" />
                </a>
            </div>

                <div className="media-content">
                    <div className="content">
                        <p>
                            <h1><a href={this.props.url} target="_blank" rel="noreferrer" className="title is-4">{this.props.title}</a></h1>
                            {this.props.children}
                        </p>
                    </div>
                </div>
            </article>
        )
    }
}