import React, { Component } from 'react';
import './footer.scss';

import Email from '../../assets/Mail_white.svg';
import LinkedIn from '../../assets/LinkedIN_white.svg';
import GitHub from '../../assets/Github_white.svg';

class Footer extends Component {
    render() {
        //Opens any external links as a new tab
        const openInNewTab = (url) => {
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null
        }
        return (
            <section className="footer">
                <ul className="contactList">
                    <li className="contactList__item"><a className="footer__email" href="mailto:arnolddonpaul@gmail.com"><img className="footer__icon" src={Email} alt="Email:"></img><p>arnolddonpaul@gmail.com</p></a></li>
                    <li onClick={() => { openInNewTab('https://www.linkedin.com/in/arnold-don-paul-494581169/') }} className="contactList__item"><img className="footer__icon" src={LinkedIn} alt="LinkedIn:"></img><p>LinkedIn</p></li>
                    <li onClick={() => { openInNewTab('https://github.com/ArnoldDonPaul') }} className="contactList__item"><img className="footer__icon" src={GitHub} alt="GitHub:"></img><p>GitHub</p></li>
                </ul>
            </section>
        );
    }
}

export default Footer;