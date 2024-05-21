import type { FormProps } from 'antd';
import { Col, Row, Card, Typography, Button, Form, Input } from 'antd';
import Layout from '@/components/layout/layout';
import Link from 'next/link'
import charactersServices from '@/services/characters.services';

const { Title } = Typography;
type CharacterType = {
    name: string;
    breed: string;
    weight: number;
    height: number;
    power: string;
};

const onFinish: FormProps<CharacterType>['onFinish'] = (values) => {
    charactersServices.post(values).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
};

const onFinishFailed: FormProps<CharacterType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const FormCharacter = (props: any) => {
    const style = { padding: '10px 10px' };
    return (
        <Layout>
            <Row>
                <Col span={20} style={style}>
                    <Title>Crear Registro</Title>
                </Col>
            </Row>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
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