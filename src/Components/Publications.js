
import Slide from 'react-reveal/Slide';
import { Typography, Row, Col, Button, Card, Divider } from 'antd';
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons';

function Publications() {
    return (
        <div>
            <br/>
        <h1 style={{ fontFamily: 'Lato', fontSize: '5vh' }} id='pubs'>Publications</h1>
        <p>Ciencia ID:8819-AA22-657F  </p>
        <p>ORCID:0000-0002-2988-196X </p>
        <br />
        <Row style={{ width: '80%', marginLeft: '10%' }}>
          <Col span={8}><Link to="//scholar.google.com/citations?user=dTrhniIAAAAJ&hl=pt-PT" target='_blank'><Button style={{ backgroundColor: '#97afa3', fontSize: '3vh', height: '6vh' }} type="text" value="large"> Google Scholar</Button></Link></Col>
          <Col span={8}><Link to="//orcid.org/0000-0002-2988-196X" target='_blank'><Button style={{ backgroundColor: '#97afa3', fontSize: '3vh', height: '6vh' }} type="text" value="large"> Scopus</Button></Link></Col>
          <Col span={8}><Link to="//www.researchgate.net/profile/Regina-Sousa-7" target='_blank'><Button style={{ backgroundColor: '#97afa3', fontSize: '3vh', height: '6vh' }} type="text" value="large"> Research Gate</Button></Link></Col>
        </Row>
        <br />
        <div style={{ width: '90%', marginLeft: '5%' }}>
          <Row>
            <Col span={10} offset={1}>
              <div> <h2>Patent</h2>
                <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7' }}>1. Patent Pending Approval (Confidencial)</Card>
              </div>
              <br />
              <div><h2>Book</h2>
                <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7' }}>1. José Machado. Hugo Peixoto and Regina Sousa (eds). Big Data Analytics and Artificial Intelligence in the Healthcare Industry. IGI Global. 2022 (in Press)</Card>
              </div><br/>
              <div><h2>Book Chapter</h2>
                <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7' }}>1.Sousa R., Ferreira D., Abelha A., Machado J. (2020) Step Towards Monitoring Intelligent Agents in Healthcare Information Systems. In: Rocha Á., Adeli H., Reis L., Costanzo S., Orovic I., Moreira F. (eds) Trends and Innovations in Information Systems and Technologies. WorldCIST 2020. Advances in Intelligent Systems and Computing, vol 1161. Springer, Cham. https://doi.org/10.1007/978-3-030-45697-9_50 </Card> <br />
                <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7' }}>2.Sousa R., Jesus T., Alves V., Machado J. (2021) Contactless Human-Computer Interaction Using a Deep Neural Network Pipeline for Real-Time Video Interpretation and Classification. In: Guarda T., Portela F., Santos M.F. (eds) Advanced Research in Technologies, Information, Innovation and Sustainability. ARTIIS 2021. Communications in Computer and Information Science, vol 1485. Springer, Cham. https://doi.org/10.1007/978-3-030-90241-4_17</Card><br />
                <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7' }}>3.Lopes J.,Sousa R., Abelha A., Machado J. (2021) Big Data in Healthcare Institutions: An Architecture Proposal. in Proceedings of EAI BDTA 2021. Springer. (Accepted).</Card><br />
                <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7' }}>4.Nunes F., Sousa R.,Abelha A., Machado J. (2021) New Generation of Interoperable Artifacts in Medical Informatics. in Transactions on Computational Science and Computational Intelligence. Springer. CSCE. (Accepted) </Card><br />
              </div>
            </Col>
            <Col span={10} offset={2}>
              
              <div><h2>Journal</h2>
                <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7' }}>1. Sousa R, Lima T, Abelha A, Machado J. Hierarchical Temporal Memory Theory Approach to Stock Market Time Series Forecasting. Electronics. 2021; 10(14):1630. https://doi.org/10.3390/electronics10141630  </Card><br />
                <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7' }}>2. Nogueira F., et al. Integrating a New Generation of Interoperability Agents into the AIDA Platform. J. Digit. Sci. 3(1), 54-64 (2021). https://doi.org/10.33847/2686-8296.3.1_5</Card><br />
                <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7' }}>3. Miranda F., Sousa R., Duarte J., Abelha A,Machado J. (2021) Machine Learning Applied to Health Information Exchange. International Journal of Reliable and Quality E-Healthcare (IJRQEH). Volume 11. Issue 1. Article 6. IGI. </Card><br />
                <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7' }}>4. Sousa R, Miranda R, Moreira A, Alves C, Lori N, Machado J. Software Tools for Conducting Real-Time Information Processing and Visualization in Industry: An Up-to-Date Review. Applied Sciences. 2021; 11(11):4800. https://doi.org/10.3390/app11114800 </Card><br />
              </div>
              <div><h2>Conference</h2>
                <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7' }}>1. "Sistema de Alerta, Gestão e Monitorização". Paper presented in Jornadas Ibéricas de Infraestruturas de Dados Espaciais, Cáceres, 2019.</Card><br />
                <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7' }}>2. "Steps Towards Intelligent Diabetic Foot Ulcer Follow-up based on deep Learning". Paper Submitted to 34th International Conference on Advanced Information Systems Engineering, LEUVEN, 2022.</Card><br />
                <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7' }}>3. "Prediction models applied to lung cancer using Data Mining". Paper Submitted to IDC'22 - Intelligent Distributed Computing</Card>
              </div>
            </Col>
          </Row>
        </div></div>
        
    );
}

export default Publications;
