import React from "react";
import ProjectDetail from "./ProjectDetail";
import catom from "../assets/phosphorus.png"
import streak from "../assets/streak.png"
import stem from "../assets/SheCanSTEM.png"

export default class Project extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="tile is-child">
                    <ProjectDetail title="Catoms" url="https://ameijboom.github.io/PFA-SPA" image={catom}>
                        Catoms is a game me and some other students have been working on for around 2 weeks. <br />
                        It was our final result for that study quarter's project, and it's primary theme was physics. <br />
                        The game was designed to teach people about collision theory in a fun and engaging way. <br />
                    </ProjectDetail>

                    <ProjectDetail title="Streak" url="https://github.com/ameijboom/Project-Lift-Off" image={streak}>
                        Streak is a simple game where you fight wave after wave of enemies. This was also made <br />
                        by me and some fellow students, as the final result for another study quarter's project. <br />
                        The game itself focussed heavily on movement, and thus we decided to focus heavily <br />
                        on implementing our own physics system.
                    </ProjectDetail>

                    <ProjectDetail title="She Can VR" url="https://github.com/Unrealitix/Project-Customer" image={stem}>
                        "She Can VR" is our newest project, in which we're creating a 3D interactive application in VR <br />
                        to help the She Can STEM campaign with spreading their message.  <br />
                        The application can run on any headset such as the Meta Quest <br />
                        and gives you a view into the different female geniuses who helped shape our modern world. <br />
                        <strong>The image is property of <a href="https://shecanstem.org/" target="_blank" rel="noreferrer">"She Can STEM"</a> and does not belong to me personally.</strong>
                    </ProjectDetail>

                    <ProjectDetail title="PokeDB" url="https://github.com/ameijboom/pokedb">
                        PokeDB is a new project I started recently in collaboration with my partner.
                        It’s a project to digitize my Pokemon TCG collection on an online platform,
                        consisting of an API written in Go, a PostgreSQL database, a Vue3 web
                        application & all running on my Kubernetes cluster. It’s still in the early
                        stages, but I’m making progress day by day.
                    </ProjectDetail>

                    <ProjectDetail title="NeoGXPv2">
                        NeoGXP is a project I’m running/maintaining with several other people. It’s a
                        revised version of Saxion’ proprietary GXP Engine game engine, with the main
                        focus on cross-compatibility and ease-of-use. As of right now, we’re back in the
                        drawing/planning phase, with some exciting ideas being formed. I’m personally
                        responsible for writing a new graphics/lighting engine that the game engine will
                        use.
                    </ProjectDetail>
                </div>
            </div>
        )
    }
}