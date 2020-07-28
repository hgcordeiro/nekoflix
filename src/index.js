import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

// Fazer a página de erro 404
const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      {/* Carrega se não encontrar nenhuma outra rota */}
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  document.getElementById('root')
);
