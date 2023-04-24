import { Image } from 'antd';
import { useNavigate } from "react-router-dom";

import HeaderIcon from '../../logo.svg';

import './Header.css';

export const Header = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate('/');
  };

  return (
    <div className='header-container'>
      <a onClick={onClickLogo}>
        <Image
          className='logo-avatar'
          alt={`App's logo`}
          src={HeaderIcon}
          preview={false}
          height={50}
        />
        <span className='logo-title'>OMDb-API Assignment</span>
      </a>
    </div>
  );
};