import React, { Component } from 'react';
import './nav.scss';

class Nav extends Component {
    render() {
        return (
            <section className="navBar">
                <h1 className="header">Arnold Don Paul</h1>
                <div className="nav">
                    <p className="nav__link">projects</p>
                    <p>/</p>
                    <p className="nav__link">about</p>
                </div>
            </section>
        );
    }
}

export default Nav;