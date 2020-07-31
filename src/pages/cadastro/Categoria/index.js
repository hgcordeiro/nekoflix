import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [fields, setFields] = useState({});

  function setField(key, value) {
    setFields({
      ...fields,
      [key]: value,
    });
  }

  function handleChange({ target }) {
    setField(target.getAttribute('name'), target.value);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias/';
    fetch(URL)
      .then(async (response) => {
        const jsonResponse = await response.json();
        setCategorias(jsonResponse);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {fields.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        // Evita comportamento padrão do form (não recarrega a página)
        event.preventDefault();
        setCategorias([
          ...categorias,
          fields,
        ]);
        setFields(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria"
          name="nome"
          type="text"
          value={fields.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          name="descricao"
          type="textarea"
          value={fields.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={fields.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>

        {
          categorias.length === 0 && (
            <div>
              Carregando...
            </div>
          )
        }

        <ul>
          {
              categorias.map((categoria) => (
                <li key={categoria.nome}>
                  {categoria.nome}
                </li>
              ))
            }
        </ul>

      </form>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
