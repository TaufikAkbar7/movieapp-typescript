import { Menu, Input, Row, Col } from 'antd';

const { Search } = Input;

const Navbar = () => {
    return (
        <Menu theme="dark" mode="horizontal">
            <Row align="middle" style={{ width: '100%' }}>
                <Col span={8}>
                    <h1 style={{ color: '#FFF', fontWeight: 'bold' }}>Movie App</h1>
                </Col>
                <Col span={8} offset={8}>
                    <Search style={{ width: 350, marginTop: 10 }} placeholder="input search text" onSearch={() => console.log('click')} enterButton />
                </Col>
            </Row>
        </Menu>
    )
}

export default Navbar
