import React, { Component } from 'react';
import './nav.scss';

class Hero extends Component {
    render() {
        return (
            <section className="navBar">
                <h1 className="header">Arnold Don Paul</h1>
                <div className="nav">
                    <p>projects</p>
                    <p>/</p>
                    <p>about</p>
                </div>
            </section>
        );
    }
}

export default Hero;