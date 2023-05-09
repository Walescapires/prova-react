import Pagina from '@/Components/Pagina'
import apiAnime from '@/services/apiAnime'
import Link from 'next/link';
import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { BsFillChatTextFill,  } from "react-icons/bs";


const index = ({ animes }) => {
    return (
        <Pagina titulo="Animes">
            <Row>
                <Col>
                    <Table striped bordered hover>
                    
                        <thead>
                            <tr>
                                <th>Detalhes</th>
                                <th>Titulo</th>
                                <th>Duração</th>
                                <th>Ano</th>
                            </tr>
                        </thead>
                        <tbody>
                            {animes.map(item => (
                              <tr>  
                                <td>
                                    <Link href={'/animes/' + item.mal_id}>
                          <BsFillChatTextFill/>
                      </Link>
                      </td>
                      
                      <td>{item.title}</td>
                      <td>{item.duration}</td>
                      <td>{item.year}</td>
                      </tr>
                       ))}
                        </tbody>
                        </Table>
                </Col>
            </Row>
        </Pagina>
    )
}

export default index



export async function getServerSideProps(context) {

    const resultado = await apiAnime.get('/anime')
    const animes = resultado.data.data

    return {
        props: { animes },
    }
}

