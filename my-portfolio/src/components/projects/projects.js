import React, { Component } from 'react';
import './projects.scss';

// import joannaTO from '../../assets/images/joannaTO.gif'

class Projects extends Component {
    render() {
        //Opens any external links as a new tab
        // const openInNewTab = (url) => {
        //     const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        //     if (newWindow) newWindow.opener = null
        // }
        return (
            <section id="projects" className="projects">
                <h1 className="projects__header">Projects</h1>

                <div className="projectBox">
                    {/* <img className="projectBox__image" onClick={() => { openInNewTab('http://www.joanna.to') }} src={joannaTO} alt="joanna.to"></img> */}
                    <div className="projectBox__textBox">
                        <p className="projectBox__text">Designed by: Joanna Don Paul</p>
                        <p className="projectBox__text">Built by: Arnold Don Paul</p>
                        <p className="projectBox__text">HTML - SCSS - React</p>
                    </div>
                </div>

            </section>
        );
    }
}

export default Projects;