import React, { Component } from 'react';
import './footer.scss';

import Email from '../../assets/Mail_white.svg';
import LinkedIn from '../../assets/LinkedIN_white.svg';
import GitHub from '../../assets/Github_white.svg';

class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <ul className="contactList">
                    <li className="contactList__item"><img className="footer__icon" src={Email} alt="Email:"></img><p>arnolddonpaul@gmail.com</p></li>
                    <li className="contactList__item"><img className="footer__icon" src={LinkedIn} alt="LinkedIn:"></img><p>LinkedIn</p></li>
                    <li className="contactList__item"><img className="footer__icon" src={GitHub} alt="GitHub:"></img><p>GitHub</p></li>
                </ul>
            </section>
        );
    }
}

export default Footer;