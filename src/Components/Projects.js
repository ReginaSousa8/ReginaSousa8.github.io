import Slide from 'react-reveal/Slide';
import { Typography, Row, Col, Button, Card, Divider } from 'antd';
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function Projects() {
  return (
    <div>
      <br/>
      <h1 style={{ fontFamily: 'Lato', fontSize: '5vh' }} id='proj'>Projects</h1>
      <div style={{ width: '90%', marginLeft: '5%' }}>
        <Row>
          <Col span={10} offset={1}>
            <div>
              <Card style={{ borderRadius: "20px", textAlign: 'justify', height: '27vh', backgroundColor: '#f7f7f7' }}>
                <h3>DRIVES - Development and Research on Innovative Vocational Education Skills</h3>
                <Divider />
                <h4>591988-EPP-1-2017-1CS-EPPKA2-SSA-B</h4>
                <h5>Research Colaborator: 2020 - 2021</h5>
                <Link to="//www.project-drives.eu/en/aboutus" target='_blank'><Button style={{ backgroundColor: '#97afa3', float: 'right' }} type="text" value="small"><ArrowRightOutlined /></Button>  </Link>
              </Card><br />
              <Card style={{ borderRadius: "20px", textAlign: 'justify', height: '27vh', backgroundColor: '#f7f7f7' }}>
                <h3>DS&AI - Curriculum Development in Data Science an Artificial Intelligence</h3>
                <Divider />
                <h4>599600-EPP-1-2018-1-TH-EPPKA2-CBHE-JP </h4>
                <h5>Research Colaborator: 2020 - 2021</h5>
                <Link to="//dsai-project.eu/site/" target='_blank'><Button style={{ backgroundColor: '#97afa3', float: 'right' }} type="text" value="small"><ArrowRightOutlined /></Button>  </Link>
              </Card>
            </div>
            <br />
          </Col>
          <Col span={10} offset={2}>

            <div>
              <Card style={{ borderRadius: "20px", textAlign: 'justify', height: '27vh', backgroundColor: '#f7f7f7' }}>
                <h3>Factory of The Future - Smart Facturing<br /><br /></h3>
                <Divider />
                <h4>FACTORYOFTHEFUTURE/5_55-01/2019</h4>
                <h5>Research Fellow: 2020 - 2021</h5>
                <Link to="//www.eng.uminho.pt/pt/investigareinovar/projetoscomempresas/Paginas/projetoFactoryFuture.aspx" target='_blank'><Button style={{ backgroundColor: '#97afa3', float: 'right' }} type="text" value="small"><ArrowRightOutlined /></Button>  </Link>
              </Card><br />
              <Card style={{ borderRadius: "20px", textAlign: 'justify', height: '27vh', backgroundColor: '#f7f7f7' }}>
                <h3>Integrated and Innovative Solutions for the well-being of people in complex urban centers</h3>
                <Divider />
                <h4>NORTE-01-0145-FEDER-000086</h4>
                <h5>Research Fellow: 2022 - Present</h5>
              </Card>
            </div>
          </Col>
        </Row>
      </div>      
      <br />
    </div>
  );
}

export default Projects;

