import { Col, Row, Card, Typography } from 'antd';
import Layout from '@/components/layout/layout';

const { Title } = Typography;

const Home = (props:any) => {
    const style = { padding: '10px 10px' };
    const { characters } = props;
    return (
        <Layout>
        <Row>
          <Col span={24} style={style}>
            <Title>Listado de registros</Title>
          </Col>
        </Row>
        <Row>
          {characters.map((character: any) => (
            <Col span={8} key={character.id} style={style}>
                <Card title={character.name}>
                    <div>Raza: {character.breed}</div>
                    <div>Edad: {character.weight} kg</div>
                    <div>Altura: {character.height} cm</div>
                    <div>Poder/Arma: {character.power}</div>
                </Card>
            </Col>
          ))}
        </Row>
      </Layout>
    )
}

export default Home;