import React from 'react';
import {Link} from 'react-router-dom';

import LogoIcon from '../../assets/images/logo.svg';
import BackIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => { //FunctionComponent
  return(
    <header className="page-header">
        <div className="top-bar-container">
          <Link to="/" >
            <img src={BackIcon} alt="Voltar"/>
          </Link>
          <img src={LogoIcon} alt="Proffy"/>
        </div>

        <div className="header-content">
          <strong>{props.title}</strong>
        </div>

        {props.children}
    </header>
  );
}

export default PageHeader;