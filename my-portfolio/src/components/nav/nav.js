import React, { Component } from 'react';
import './nav.scss';

class Nav extends Component {
    render() {
        return (
            <section className="navBar">
                <h1 className="header">Arnold Don Paul</h1>
                <div className="nav">
                    <a href="#projects"><p className="nav__link">projects</p></a>
                    <p>/</p>
                    <a href="#about"><p className="nav__link">about</p></a>
                </div>
            </section>
        );
    }
}

export default Nav;