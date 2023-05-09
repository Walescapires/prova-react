import Pagina from '@/Components/Pagina'
import apiAnime from '@/services/apiAnime'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const generos = ({ generos }) => {
    return (
      <>
        <Pagina titulo="Generos">
          <ul>
            {generos.data.map((item) => (
              <li>
                {item.name} ({item.count})
              </li>
            ))}
          </ul>
        </Pagina>
      </>
    );
  };
  
  
  export default generos;
  
  
  export async function getServerSideProps(context) {
    const resultado = await apiAnime.get("/genres/anime");
    const generos = resultado.data;
  
  
    return {
      props: { generos },
    };
  }