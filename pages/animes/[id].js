import Pagina from '@/Components/Pagina';
import apiAnime from '@/services/apiAnime';
import Link from 'next/link';
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill,  } from "react-icons/bs";

const Detalhes = ({ detalhes }) => {
    return (
        <Pagina titulo={detalhes.data.title}>

            <Row>
            <Col md={3}>
            <Card.Header className="bg-danger text-white">Foto</Card.Header>
            <Card.Body>
            <Card.Img   variant="top" src={detalhes.data.images.jpg.image_url} />
            <Card.Text>
                    <Link className="btn btn-primary mt-3" href={detalhes.data.images.webp.image_url}>
                    <BsFillArrowRightCircleFill />
                      Ampliar
                    </Link>
                  </Card.Text>
            </Card.Body>
            <Link className="btn btn-success mt-3" href={"/animes/"}>
            < BsFillArrowLeftCircleFill />
                Voltar
              </Link>
          </Col>

          <Col md={6}>
              <Card border="danger">
                <Card.Header className="bg-danger text-white">
                  {detalhes.data.title}
                </Card.Header>
                <Card.Body>
            <p><strong>Episódios </strong>{detalhes.data.episodes}</p>
            <p><strong>Status </strong>{detalhes.data.status}</p>
            <p><strong>Duração </strong>{detalhes.data.duration}</p>            
            <p><strong>Ano </strong>{detalhes.data.year}</p>           
            <p><strong>Score </strong>{detalhes.data.score}</p>
            <strong>Sinopse </strong>{detalhes.data.synopsis}   
            </Card.Body>        
            </Card>
            </Col>                
            </Row>
            </Pagina>
    )
}

export default Detalhes;
  
export async function getServerSideProps(context) {
  const id = context.params.id;

  const resultado = await apiAnime.get("/anime/" + id);

  const detalhes = resultado.data;

  return {
    props: { detalhes },
  };
}