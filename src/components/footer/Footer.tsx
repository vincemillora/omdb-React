import { Image } from 'antd';
import HeaderIcon from '../../logo.svg';

import './Footer.css';

export const Footer = () => (
  <div className='footer-container'>
      <a className='logo-avatar' href="#top">
        <Image 
          alt={`App's logo`}
          src={HeaderIcon}
          preview={false}
          height={50}
        />
      </a>
      <div className='logo-text'>
        <div>
          Copyright © 2023
        </div>
        <div>
          by
          <a
            className='font-weight-bold'
            style={{ color: "#d03050" }}
            href="https://www.vcmillora.me/"
            target='_blank'
            rel="noreferrer"
          >
            {" vcmillora.me"}
          </a>
        </div>
      </div>
  </div>
)