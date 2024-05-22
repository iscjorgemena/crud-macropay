import React, { useEffect, useState } from 'react'
import type { FormProps } from 'antd'
import { Col, Row, Card, Typography, Button, Form, Input } from 'antd'
import Layout from '@/components/layout/layout'
import Link from 'next/link'
import charactersServices from '@/services/characters.services'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

const { Title } = Typography

type CharacterType = {
    name: string
    breed: string
    weight: number
    height: number
    power: string
}

const FormCharacter = (props: any) => {
    const style = { padding: '10px 10px' }
    const { id, character } = props
    const router = useRouter()
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(character !== null){
            form.setFieldsValue(character)
        }else{
            if(id !== 'new'){
                router.push('/')
                return
            }
        }
        return () => {
        }
    }, [])

    const messageAlert = (type:any, message:string, title:string,  redirect:boolean) => {
        Swal.fire({
            title: title,
            text: message,
            icon: type,
            confirmButtonText: "OK",
        }).then(() =>{
            if(redirect){
                router.push('/')
            }
        })
      }

    const onFinish: FormProps<CharacterType>['onFinish'] = async (values) => {
        setLoading(true)
        if(id === 'new'){
            await charactersServices.post(values).then((response) => {
                messageAlert('success', 'Registro creado correctamente!', 'Creado!', true)
            }).catch((error) => {
                console.log(error)
                messageAlert('error', 'Error al crear el registro!', 'Error!', false)
            })
        }else{
            await charactersServices.put(values, id).then((response) => {
                messageAlert('success', 'Registro actualizado correctamente!', 'Actualizado!', true)
            }).catch((error) => {
                messageAlert('error', 'Error al actualizar el registro!', 'Error!', false)
            })
        }
        setLoading(false)
    }

    return (
        <Layout>
            <Row>
                <Col span={24} style={style}>
                    <Title>{id !== 'new' ? 'Editar':'Crear'} Registro</Title>
                </Col>
            </Row>
            <Form
                name="basic"
                onFinish={onFinish}
                autoComplete="off"
                form={form}
            >
                <Row>
                    <Col md={12} xs={24} style={style}>
                        <Form.Item<CharacterType>
                            label="Nombre"
                            name="name"
                            rules={[{ required: true, message: 'Nombre es obligatorio!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={12} xs={24} style={style}>
                        <Form.Item<CharacterType>
                            label="Raza"
                            name="breed"
                            rules={[{ required: true, message: 'Raza es obligatorio!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={24} style={style}>
                        <Form.Item<CharacterType>
                            label="Peso"
                            name="weight"
                            rules={[{ required: true, message: 'Peso es obligatorio!' }]}
                        >
                            <Input placeholder='40 kg' />
                        </Form.Item>
                    </Col>
                    <Col md={12} xs={24} style={style}>
                        <Form.Item<CharacterType>
                            label="Altura"
                            name="height"
                            rules={[{ required: true, message: 'Altura es obligatorio!' }]}
                        >
                            <Input placeholder='1.50 m' />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={24} style={style}>
                        <Form.Item<CharacterType>
                            label="Poder/Arma"
                            name="power"
                            rules={[{ required: true, message: 'Poder/Arma es obligatorio!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>


                <Row>
                    <Col md={2} xs={12} style={style}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={loading} disabled={loading}>
                                Guardar
                            </Button>
                        </Form.Item>
                    </Col>
                    <Col md={12} xs={12} style={style}>
                        <Form.Item>
                            <Link href="/">
                                <Button type="default" loading={loading} disabled={loading}>
                                    Cancelar
                                </Button>
                            </Link>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Layout>
    )
}

export default FormCharacter