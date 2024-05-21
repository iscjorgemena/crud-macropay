import React, { useEffect, useState } from 'react';
import type { FormProps } from 'antd';
import { Col, Row, Card, Typography, Button, Form, Input } from 'antd';
import Layout from '@/components/layout/layout';
import Link from 'next/link'
import charactersServices from '@/services/characters.services';
import { useRouter } from 'next/router'

const { Title } = Typography;

type CharacterType = {
    name: string;
    breed: string;
    weight: number;
    height: number;
    power: string;
};



;

const FormCharacter = (props: any) => {
    const style = { padding: '10px 10px' };
    const { id, character } = props;
    const router = useRouter()
    const [form] = Form.useForm();

    useEffect(() => {
        if(character !== null){
            form.setFieldsValue(character);
        }else{
            if(id !== 'new'){
                router.push('/');
                return;
            }
        }
        return () => {
        };
    }, []);

    const onFinish: FormProps<CharacterType>['onFinish'] = (values) => {
        if(id === 'new'){
            charactersServices.post(values).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }else{
            charactersServices.put(values, id).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    return (
        <Layout>
            <Row>
                <Col span={20} style={style}>
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
                    <Col span={12} style={style}>
                        <Form.Item<CharacterType>
                            label="Nombre"
                            name="name"
                            rules={[{ required: true, message: 'Nombre es obligatorio!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={style}>
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
                    <Col span={12} style={style}>
                        <Form.Item<CharacterType>
                            label="Peso"
                            name="weight"
                            rules={[{ required: true, message: 'Peso es obligatorio!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={style}>
                        <Form.Item<CharacterType>
                            label="Altura"
                            name="height"
                            rules={[{ required: true, message: 'Altura es obligatorio!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} style={style}>
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
                    <Col span={2} style={style}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Guardar
                            </Button>
                        </Form.Item>
                    </Col>
                    <Col span={12} style={style}>
                        <Form.Item>
                            <Link href="/">
                                <Button type="default">
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

export default FormCharacter;