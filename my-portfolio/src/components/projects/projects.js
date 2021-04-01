import React, { Component } from 'react';
import './projects.scss';

import nyanCat from '../../assets/images/NyanCat.gif'

class Projects extends Component {
    render() {
        // const openInNewTab = (url) => {
        //     const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        //     if (newWindow) newWindow.opener = null
        // }
        return (
            <section className="projects">
                <h1 className="projects__header">Projects</h1>
                {/* <p className="projects__text">WOOPS! This section is still being worked on.</p>
                <p className="projects__text">For now you can check out <span className="projects__link" onClick={() => { openInNewTab('http://www.joanna.to') }}>this website</span> built by Arnold.</p>
                <p className="projects__text">Please feel free to connect through any of the links at the bottom.</p> */}

                <div className="projectBox">
                    <img className="projectBox__image" src={nyanCat} alt="nyanCat"></img>
                </div>


                {/* <div className="projectBox__projectBox">
                    <h1>Project Title</h1>
                    <p> react / html / javascript</p>
                    <p>github {'>'}</p>
                    <p>live site {'>'}</p>
                </div>

                <div className="projectBox__projectBox">
                    <h1>Project Title</h1>
                    <p> react / html / javascript</p>
                    <p>github {'>'}</p>
                    <p>live site {'>'}</p>
                </div> */}
            </section>
        );
    }
}

export default Projects;