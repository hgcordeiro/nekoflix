import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Img404 from '../../assets/img/404.gif';
import './index.css';

function Erro404() {
    return (
      <PageDefault>
        <Link to="/">
                Ir para home
                </Link> 
        <div>
            <h2>Uh-oh!</h2> 
            <h2>O gato derrubou a página e não conseguimos encontrá-la.</h2>
            
            <p>
                <img src={Img404} alt="Erro 404" />
                
            </p>
            
        </div>
      </PageDefault>
    );
}

export default Erro404;