import React from "react";
import foster from "../assets/foster.png";
import mediamarkt from "../assets/mediamarkt-logo.jpg";
import nederlandEet from "../assets/nederland-eet.png";

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
            </div>
        )
    }
}