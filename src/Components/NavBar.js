import { Row, Col, Button, Typography, Menu, Dropdown } from 'antd';
import {
    Link,
    BrowserRouter as Router
} from "react-router-dom";

function NavBar(props) {
    const menu = (
        <Menu style={{ fontSize: '1.1rem' }}>
            <Menu.Item>
            <Link to="/pubs">
                    Publications
                </Link>
            </Menu.Item>
            <Menu.Item>
            <Link to="/projects">
                    Projects
             </Link>
            </Menu.Item>
            <Menu.Item>
            <Link to="/activities">
                    Activities
               </Link>
            </Menu.Item>
        </Menu>
    )
    return (

        <Row justify="end">
            <Col span={4}>
                <Link to="/">
                    <Button shape="round" style={{ backgroundColor: '#97afa3', fontSize: '1.3rem' }} type="text">
                        {props.button1}
                    </Button>
                </Link>
            </Col>
            <Col span={3} offset={7}>
                <Link to="/">
                    <Button shape="round" style={{ backgroundColor: '#97afa3', fontSize: '1.1rem' }} type="text">
                        {props.button0}
                    </Button>
                </Link>
            </Col>
            {/* <Col span={3}>
            <Link to="/background">
                <Button shape="round" style={{ backgroundColor:'#97afa3', fontSize:'1.1rem'}} type="text">
                    {props.button2}
                </Button>
                </Link>
            </Col> */}
            <Col span={3}>

                <Link to="/background">
                    <Button shape="round" style={{ backgroundColor: '#97afa3', fontSize: '1.1rem' }} type="text">
                        {props.button2}
                    </Button>
                </Link>

            </Col>
            <Col span={3}>
                <Dropdown overlay={menu} placement="bottom" arrow={{ pointAtCenter: true }}>
                    <Link to="/research">
                        <Button shape="round" style={{ backgroundColor: '#97afa3', fontSize: '1.1rem' }} type="text">
                            {props.button3}
                        </Button>
                    </Link>
                </Dropdown>
            </Col>
            <Col span={3}>
                <Link to="/academic">
                    <Button shape="round" style={{ backgroundColor: '#97afa3', fontSize: '1.1rem' }} type="text">
                        {props.button4}
                    </Button>
                </Link>
            </Col>
            {/* <Col span={3}>
            <Link to="/contact">
                <Button shape="round" style={{ backgroundColor:'#97afa3', fontSize:'1.1rem'}} type="text">
                    {props.button5}
                </Button>
                </Link>
            </Col> */}
        </Row>
    );
}

export default NavBar;
