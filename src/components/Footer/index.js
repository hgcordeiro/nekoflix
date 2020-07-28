import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <p>
        Freya, Naruto, Canjica, Billy e Binha apresentam:
      </p>
      <img className="Logo" src={Logo} alt="NekoFlix logo" />
      <p>
        Projeto em desenvolvimento durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
        {' '}
        por
        {' '}
        <a href="https://www.linkedin.com/in/henrique-gabriel-rodrigues-cordeiro-95137530/">
          Henrique Cordeiro
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
