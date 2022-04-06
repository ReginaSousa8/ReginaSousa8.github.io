import './App.css';
import 'antd/dist/antd.css'
import About from './Views/About'
import Academic from './Views/Academic'
import Background from './Views/Background'
import Research from './Views/Research'
import Contact from './Views/Contact'
import Publications from './Components/Publications';
import Activities from './Components/Activities';
import Projects from './Components/Projects';
import { Layout, Avatar, Row, Col } from 'antd';
import { LinkedinOutlined, GithubOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons'
import NavBar from './Components/NavBar';

import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}><Layout style={{ backgroundColor: 'white' }}>
        <Header style={{ backgroundColor: '#97afa3' }}>
          <NavBar button0={'About'} button1={'Regina Sousa'} button2={'Background'} button3={'Research'} button4={'Academic'} button5={'Contact Me'} />
        </Header>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/background" element={<Background />} />
          <Route path="/research" element={<Research />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/pubs" element={<Publications />} />
        </Routes>


        <Footer style={{ backgroundColor: '#97afa3' }}>
          <Row justify="center">
            <Col ><Avatar shape="square" size='small' icon={<LinkedinOutlined />} /></Col>
            <Col offset={1}><Avatar shape="square" size='small' icon={<GithubOutlined />} /></Col>
            <Col offset={1}><Avatar shape="square" size='small' icon={<InstagramOutlined />} /></Col>
            <Col offset={1}><Avatar shape="square" size='small' icon={<FacebookOutlined />} /></Col>
          </Row>




        </Footer>
      </Layout></Router>
    </div>
  );
}

export default App;
