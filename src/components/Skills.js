import React from "react";

export default class Skills extends React.Component {
    technologies = ['C#', 'Python', 'Java', 'JavaScript', 'TypeScript', 'Django', 'Firebase','EntityFramework', 'React', 'Angular', 'SCC', 'Git', 'Kubernetes', 'Docker', 'Docker-Compose', 'GXP', 'Unity', 'Windows', 'Linux', 'MacOS'];
    other = ['SCRUM', 'Dutch', 'English', 'Hardware']

    render() {
        return(
            <div className="Skills tile is-8 is-vertical is-parent">
                <h1 className="title">Skills</h1>
                <div className="tile is-child card">
                    <header className="card-header">
                        <p className="card-header-title">
                            Technologies
                        </p>
                    </header>

                    <div className="card-content">
                        <div className="content">
                            {this.technologies.map(tech => (
                                <span className="tag is-info tag-pad" key={tech}>{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="tile is-child card">
                <header className="card-header">
                        <p className="card-header-title">
                            Practical
                        </p>
                    </header>

                    <div className="card-content">
                        <div className="content">
                            {this.other.map(practical => (
                                <span className="tag is-info tag-pad" key={practical}>{practical}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}