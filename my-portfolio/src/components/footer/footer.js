import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <ul>
                    <li>arnolddonpaul@gmail.com</li>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                </ul>
            </section>
        );
    }
}

export default Footer;