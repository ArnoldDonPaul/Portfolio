import React, { Component } from 'react';
import './about.scss';

class About extends Component {
    render() {
        return (
            <section className="about">
                <h1>About</h1>
                <div>
                    <p>Arnold Don Paul is a web developer based in Toronto, ON.</p>
                    <h2>Education</h2>
                    <p>BrainStation / Certificate, User Experience Design / 2020</p>
                    <p>BrainStation / Diploma, Web Development / 2020</p>
                    <p>Humber College / Bachelor of Social Science, Criminal Justice / 2016</p>
                </div>
            </section>
        );
    }
}

export default About;