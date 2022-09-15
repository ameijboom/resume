import React from "react";

export default class Education extends React.Component {
    render() {
        return(
            <div className="Education">
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <strong>Thorbecke SG Zwolle</strong> <p className="subtitle">2012 - 2016</p>
                            MAVO
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <strong>Deltion College Zwolle</strong> <p className="subtitle">2016 - 2019</p>
                            MBO Media/Application Developer 
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <strong>Saxion Enschede</strong> <p className="subtitle">2021</p>
                            HBO Creative Media and Gaming Technologies | Ongoing
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}