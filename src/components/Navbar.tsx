import { Menu, Input, Row, Col } from 'antd';
import { FC } from 'react';
import { useHistory } from 'react-router';
import { INavbar } from '../interfaces';

const { Search } = Input;

const Navbar: FC<INavbar> = ({ search, onSearch, handleChange }) => {

    const history = useHistory()

    return (
        <Menu theme="dark" mode="horizontal">
            <Row align="middle" style={{ width: '100%' }}>
                <Col span={8}>
                    <h1 onClick={() => history.push('/')}
                    style={{ 
                        color: '#FFF', 
                        fontWeight: 'bold', 
                        cursor: 'pointer' 
                    }}>
                        Movie App</h1>
                </Col>
                <Col span={8} offset={8}>
                    <Search 
                    style={{ 
                        width: 350, 
                        marginTop: 10 
                        }} 
                    value={search} 
                    onChange={handleChange} 
                    placeholder="search..." 
                    onSearch={() => onSearch(search)} 
                    enterButton 
                    />
                </Col>
            </Row>
        </Menu>
    )
}

export default Navbar
