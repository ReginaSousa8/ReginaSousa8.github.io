
import { Avatar, Button } from 'antd';
import { Tabs, Card } from 'antd';
import { PaperClipOutlined, ContactsOutlined,UserOutlined,HomeOutlined,CalendarOutlined,PhoneOutlined,GlobalOutlined } from '@ant-design/icons';
import { Statistic, Row, Col } from 'antd';
import { Typography } from 'antd';
import { Link } from "react-router-dom";
import './about.css';
import me from '../me.jpg';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;
function About() {
  return (
    <div>
      <br />
      <Avatar
        size={{
          xs: 48,
          sm: 64,
          md: 80,
          lg: 128,
          xl: 160,
          xxl: 200,
        }}
        src={me} />
      <h1 style={{ fontFamily: 'Lato', fontSize: '5vh' }}>Regina Sousa</h1>
      <Title level={5}>Msc in Biomedical Engineer, PhD Student in Biomedical Engineering</Title>
      <br />
      <Row>
        <Col span={8} >
          <Card style={{ width: '50%', marginLeft: '30%' }}>
            <Statistic title="Projects" value={4} />
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ width: '50%', marginLeft: '20%' }}>
            <Statistic title="Publications" value={12} />
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ width: '50%', marginLeft: '20%' }}>
            <Statistic title="Committes" value={2} />
          </Card>
        </Col>
      </Row>
      <br />

      <Title level={2} align='left' style={{ marginLeft: '10%' }}>About me</Title>

      <Card style={{ width: '80%', marginLeft: '10%' }}>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span style={{ fontSize: '1.1rem' }}>
                <PaperClipOutlined />
                Resume
              </span>
            }
            key="1"
            size='large'
          >
            <Paragraph align='justify' style={{ fontSize:'2vh'}}>
              Regina Sousa has a MSc in Biomedical Engineering and is a student of the PhD Program in Biomedical Engineering at the Minho where she has worked for more than three years in scientific research at the ALGORITMI Research Center, Knowledge Engineering Group (KEG).
              Throughout her academic career, she worked on several academic projects in which she gained valuable knowledge in the field of information systems work.
              She acquired knowledge in the areas of knowledge engineering, systems analysis, data mining, software development, data warehousing, data analysis and data mining, artificial and business intelligence, interoperability, and systems integration.
              Over the past years, she has participated in several R&D projects in the context of the design and integration of different IS in several Portuguese hospitals.
            </Paragraph>

          </TabPane>
          <TabPane
            tab={
              <span style={{ fontSize: '1.1rem' }}>
                <ContactsOutlined />
                Personal Information
              </span>
            }
            key="2"
            style={{textAlign:'left'}}
          >
             <Paragraph level={5} style={{ fontSize:'2vh'}}><UserOutlined /> Name: Regina Sousa</Paragraph> 
             <Paragraph level={5} style={{ fontSize:'2vh'}}><HomeOutlined /> Address: Braga, Portugal</Paragraph>
             <Paragraph level={5} style={{ fontSize:'2vh'}}><CalendarOutlined /> Birthday: 3th April</Paragraph>
             <Paragraph level={5} style={{ fontSize:'2vh'}}><PhoneOutlined />Phone: +351 934788935</Paragraph>
             <Paragraph level={5} style={{ fontSize:'2vh'}}><GlobalOutlined /> Languages: Portuguese, English, French</Paragraph>
          </TabPane>
        </Tabs></Card>
      <br></br>

      <Title level={2} align='left' style={{ marginLeft: '10%' }}>Expertise and Specialisations</Title>
        <Card style={{ width: '80%', marginLeft: '10%' }}>
          <Title level={4} align="left">Topics</Title>
          <Row gutter={[8, 16]}>
            <Col span={6}>
              <Card>Artificial Intelligence</Card>
            </Col>
            <Col span={6}>
              <Card>Big Data</Card>
            </Col>
            <Col span={6}>
              <Card>Interoperability</Card>
            </Col>
            <Col span={6}>
              <Card>Health Information Systems</Card>
            </Col>
          </Row>
          <br />
          <Title level={4} align="left">Others</Title>
          <Row gutter={[8, 16]}>
            <Col span={6}>
              <Card>NextGen - Mirth</Card>
            </Col>
            <Col span={6}>
              <Card>Docker</Card>
            </Col>
            <Col span={6}>
              <Card>RapidMiner</Card>
            </Col>
            <Col span={6}>
              <Card>Apache Spark</Card>
            </Col>
          </Row>
          <br />
        </Card>
      <br />
      <div style={{ width: '80%', marginLeft: '10%' }}>
        <Row>
          <Card style={{ width: '80%', borderRadius: "20px", marginLeft: '10%' }}>
            <h1>Publications</h1>
            <h4>Publishing has given me the opportunity to network with other scholars and to fine-tune my own ideas and research projects. It's something I really enjoy, and I hope that these papers will help others advance their science. I'm also open to any opportunities to collaborate. </h4>
            <Link to="/research">
              <Button shape="round" style={{ backgroundColor: '#97afa3' }} type="text">
                READ MORE
              </Button>
            </Link>
          </Card>
        </Row>
        <br />
        <Row>
          <Card style={{ width: '80%', borderRadius: "20px", marginLeft: '10%' }}>
            <h1>Background</h1>
            <h5>Description</h5>
            <Link to='/background'>
              <Button shape="round" style={{ backgroundColor: '#97afa3' }} type="text">
                READ MORE
              </Button>
            </Link>
          </Card>
        </Row>
        <br />
        <Row>
          <Card style={{ width: '80%', borderRadius: "20px", marginLeft: '10%' }}>
            <h1>Academic</h1>
            <h5>Under Construction ... </h5>
            <Link to='/academic'>
              <Button shape="round" style={{ backgroundColor: '#97afa3' }} type="text">
                READ MORE
              </Button>
            </Link>
          </Card>
        </Row>
      </div>
      <br />
    </div>

  );
}

export default About;