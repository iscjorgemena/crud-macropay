import React, { useState } from 'react'
import { Col, Row, Card, Typography, Button, Modal } from 'antd'
import Layout from '@/components/layout/layout'
import Link from 'next/link'
import Swal from 'sweetalert2'
import charactersServices from '@/services/characters.services'
import { useRouter } from 'next/navigation'

const { Title } = Typography;

const Home = (props: any) => {
    const style = { padding: '10px 10px' };
    const { characters } = props;
    const router = useRouter()


    const deleteCharacter = async (id: string) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "No se puede revertir el cambio!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                charactersServices.delete(id).then(() => {
                    Swal.fire({
                        title: "Eliminado!",
                        text: "El registro ha sido eliminado correctamente.",
                        icon: "success",
                        confirmButtonText: "OK",
                    }).then(() =>{
                        router.refresh()
                    })
                }).catch((error) => {
                    Swal.fire({
                        title: "Error!",
                        text: "No se pudo eliminar el registro.",
                        icon: "error"
                    })
                    console.log(error)
                });
            }
        });
    }

    return (
        <Layout>
            <Row>
                <Col span={20} style={style}>
                    <Title>Listado de registros</Title>
                </Col>
                <Col span={4} style={style}>
                    <Link href="/form-character/new">
                        <Button type="primary">Crear</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                {characters.length === 0 && <Title level={4}>No hay registros</Title>}
                {characters.map((character: any) => (
                    <Col md={8} xs={24} key={character.id} style={style}>
                        <Card title={character.name}>
                            <div>Raza: {character.breed}</div>
                            <div>Edad: {character.weight}</div>
                            <div>Altura: {character.height}</div>
                            <div>Poder/Arma: {character.power}</div>
                            <Row>
                                <Col span={12} style={style}>
                                    <Link href={`/form-character/${character.id}`}>
                                        <Button type="primary">Editar</Button>
                                    </Link>
                                </Col>
                                <Col span={12} style={style}>
                                    <Button type="primary" danger onClick={() => deleteCharacter(`${character.id}`)}>Eliminar</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Layout>
    )
}

export default Home;