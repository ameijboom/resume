import React from "react";
import foster from "../assets/foster.png";
import mediamarkt from "../assets/mediamarkt-logo.jpg";
import nederlandEet from "../assets/nederland-eet.png";
import rootisp from "../assets/root.png";
import zt from "../assets/zt_systems.jpg";

import ExperienceCard from './ExperienceCard';

export default class Experience extends React.Component {
    render() {
        return(
            <div className="Experience has-text-centered">
                <h1 className="title">Past Experiences</h1>
                <ExperienceCard logo={foster} title="Foster" time="2018 - 2019 (6 months)" tags={['C#', 'Angular', 'MSSQL']}>
                    During my time at Foster, I was mostly responsible for the backend of the applications. <br />
                    This mostly consisted of things like setting up the environment, building APIs, building services <br />
                    and learning about new technologies like Angular.
                </ExperienceCard>

                <ExperienceCard logo={nederlandEet} title="Nederland-Eet" time="2020 (6 months)" tags={['Python', 'Django', 'Vue3']}>
                    While working at Nederland-Eet, I was responsible for the development of an internal project <br />
                    that used Django to compare data from different sources with the data stored in the production <br />
                    database. While employed, I also gained low-level helpdesk/support experience (calling customers, calling restaurants, etc.)
                </ExperienceCard>

                <ExperienceCard logo={mediamarkt} title="MediaMarkt" time="2019 - 2020 (6 months)" tags={[]}>
                    I was a Smartbar employee at the MediaMarkt in Zwolle. My job consisted of offering support to customers in a wide variety. <br />
                    From setting up their smartphones to updating their navigation to troubleshooting their computers. I mostly learned how to properly diagnose problems, <br />
                    how to interact with customers & how to cooperate in stressfull situations.
                </ExperienceCard>

                <ExperienceCard logo={zt} title="ZT Systems" time="2023" tags={[]}>
                    For a short period of time (about 3 weeks to a month) I worked as a Quality
                    Control Operator at ZT Systems, a manufacturer of server racks and much more
                    for data centers. My job was to take 1 or several racks, attach them to our
                    testing suite and make sure everything about the server was working. This work
                    includes performing diagnostics & repairing servers manually if needed.
                    However, due to the harsh working conditions, unconventional work hours &
                    unreliability of the agency I worked through, I decided to leave within the
                    trial period.
                </ExperienceCard>

                <ExperienceCard logo={rootisp} title="ROOT" time="2023 - current" tags={['Python', 'Ansible', 'Kubernetes']}>
                    I’ve been working for ROOT since last August as a cloud engineer, but the role
                    itself comprises of many other roles as well. From DevOps to customer support
                    to Cloud engineer. While the company and its culture are great, the scope of my
                    work and the broad range of different tasks combined with the lack of
                    creativeness has made me want to switch roles.
                </ExperienceCard>
            </div>
        )
    }
}