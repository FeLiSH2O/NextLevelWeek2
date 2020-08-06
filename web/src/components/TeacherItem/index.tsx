import React from 'react';

import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://thumbs.jusbr.com/imgs.jusbr.com/publications/images/302cfaadec5c9ebf8f5afa463f4f0a26" alt="Felismar Teixeira"/>
        <div>
            <strong>Felismar Teixeira</strong>
            <span>Física</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          <br/><br/>
        Laudantium, ratione esse veritatis, iste porro libero eligendi voluptate explicabo, veniam sunt voluptatibus vitae? 
        Fugit, vel dolore delectus deserunt veritatis incidunt quaerat.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={WhatsAppIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;