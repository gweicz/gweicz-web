import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ForumIcon from 'public/assets/icons/blog.svg';

function Footer() {
  return (
    <div className="section section-footer">
      <div className="footer-wrapper">
        
        <h2>Máte zájem vědět víc?</h2>
        <h3>Přidejte se do naší komunity!</h3>
        
        <div className="footer-social-icons">
          <a href="https://forum.gwei.cz/" className="social-icon">
            <ForumIcon />
          </a>

          <a href="https://discord.gg/FpxwbnM" className="social-icon">
            <FontAwesomeIcon icon={['fab', 'discord']} style={{ color: 'rgb(114, 137, 218)' }} />
          </a>

          <a href="https://twitter.com/gweicz" className="social-icon">
            <FontAwesomeIcon icon={['fab', 'twitter']} style={{ color: 'rgb(29,161,242)' }} />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Footer;
