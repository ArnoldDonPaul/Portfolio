import React, { Component } from 'react';
import './about.scss';

class About extends Component {
    render() {
        return (
            <section className="about">
                <h1 className="about__header">About</h1>
                    <p className="about__text">Arnold Don Paul is a web developer based in Toronto, ON.</p>
                    <h2 className="about__subheader">Education</h2>
                    <p className="about__text">BrainStation / Certificate, User Experience Design / 2020</p>
                    <p className="about__text">BrainStation / Diploma, Web Development / 2020</p>
                    <p className="about__text">Humber College / Bachelor of Social Science, Criminal Justice / 2016</p>
            </section>
        );
    }
}

export default About;