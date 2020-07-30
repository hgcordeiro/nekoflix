import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [ categorias, setCategorias ] = useState([]);
  const [ categoria, setCategoria] = useState({});

  function setChaveCategoria(key, value) {
    setCategoria({
      ...categoria,
      [key]: value
    });
  }

  function handleChange({ target }) {
    setChaveCategoria(target.getAttribute('name'), target.value);
  }

  return (
      <PageDefault>
        <h1>Cadastro de Categoria: {categoria.nome}</h1>

        <form onSubmit={function handleSubmit(event) {
          // Evita comportamento padrão do form (não recarrega a página)
          event.preventDefault();
          setCategorias([
            ...categorias,
            categoria
          ]);
          setCategoria(valoresIniciais);
        }}>
          <FormField 
            label="Nome da Categoria"
            name="nome"
            type="text"
            value={categoria.nome}
            onChange={handleChange}
          />
          <FormField 
            label="Descrição"
            name="descricao"
            type="textarea"
            value={categoria.descricao}
            onChange={handleChange}
          />
          <FormField 
            label="Cor"
            name="cor"
            type="color"
            value={categoria.cor}
            onChange={handleChange}
          />

          <button>Cadastrar</button>

          <ul>
            {
              categorias.map((categoria, indice) => {
                return (
                  <li key={`${categoria.nome}${indice}`}>
                    {categoria.nome}
                  </li>
                )
              })
            }
          </ul>

        </form>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;