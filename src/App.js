import React from 'react';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import Education from './components/Education';
import Project from './components/Project';


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <section className="section columns">
          <div className="column is-two-thirds">
            <Experience />
          </div>

          <div className="column">
            <div className="tile is-ancestor">
              <Skills />
            </div>
          </div>
        </section>

        <section className="section">
          <h1 className="title has-text-centered">About Me</h1>

          <div className="columns">
            
            <div className="column is-one-quarter">
              <About />
            </div>

            <div className="column is-half tile is-ancestor">
              <Project />
            </div>

            <div className="column">
              <Education />
            </div>

          </div>
        </section>
      </div>
    );
  }
}
