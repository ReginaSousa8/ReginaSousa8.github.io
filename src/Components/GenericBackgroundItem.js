import Slide from 'react-reveal/Slide';
import { Typography, Row, Col, Button, Card, Divider } from 'antd';
import { Link } from "react-router-dom";

import { motion, useViewportScroll, useTransform } from "framer-motion";
function GenericBackgroundItem(props) {
    const { scrollY } = useViewportScroll();
    const opacity = useTransform(scrollY, [1500, 1500,0], [3,0,1]);
    return (
        
        <div>
            <Row>
                <Card style={{ width: '30%', marginLeft: '10%', alignContent: 'center' }}>
                    <h3>{props.date}</h3>
                    <h3>{props.place}</h3>
                </Card>
                <Card style={{ width: '50%' }}>
                    <h1>{props.position}</h1>
                    <h5>{props.description}</h5>
                </Card>
            </Row><br />
        </div>
        // <motion.nav 
        // animate={true}
        //    style={{
        //    opacity: opacity,
        //    //scale: scale,
        //    //y: moveDown,
        //  }}
        //  >
        // </motion.nav>
    );
}

export default GenericBackgroundItem;