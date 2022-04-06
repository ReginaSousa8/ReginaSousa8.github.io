import { Typography, Row, Col, Button, Card, Divider } from 'antd';
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons';


function Activities() {
    return (
        <div>
            <br/>
<h1 style={{ fontFamily: 'Lato', fontSize: '5vh' }} id='act'>Other Activities</h1>
      <div style={{ width: '90%', marginLeft: '5%' }}>
        <Row>
          <Col span={10} offset={1}>
            <div><h2>Events</h2>
              <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7', height: '28vh' }}>
                <h3>ENNEB XIII - Encontro Nacional de Estudantes de Engenharia Biomédica</h3>
                <Divider />
                <h4>01/03/2018-04/03/2018</h4>
                <h4>ISEP - Porto, Portugal</h4>
                <Link to="" target='_blank'><Button style={{ backgroundColor: '#97afa3', float: 'right' }} type="text" value="small"><ArrowRightOutlined /></Button>  </Link>

              </Card>
            </div><br />
            <div>
              <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7', height: '28vh' }}>
                <h3>Next Driving Tomorrow | Bosch em Portugal<br /><br /> </h3>
                <Divider />
                <h4> 09/11/2021 - 10/11/2021  </h4>
                <h4> Altice Forum, Braga, Portugal </h4>
                <Link to="//www.bosch.pt/a-nossa-empresa/bosch-em-portugal/braga/t-eventdetailpage-1.html" target='_blank'><Button style={{ backgroundColor: '#97afa3', float: 'right' }} type="text" value="small"><ArrowRightOutlined /></Button>  </Link>
              </Card>
            </div><br />
            <div>
              <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7', height: '28vh' }}>
                <h3>DeepLearn 2022 Spring School</h3>
                <Divider />
                <h4>18/04/2022 - 22/04/22</h4>
                <h4>Guimarães, Portugal</h4>
                <Link to="//irdta.eu/deeplearn/2022sp/" target='_blank'><Button style={{ backgroundColor: '#97afa3', float: 'right' }} type="text" value="small"><ArrowRightOutlined /></Button>  </Link>

              </Card>
            </div>

          </Col>
          <Col span={10} offset={2}>

            <div><h2>Committees</h2>
              <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7', height: '28vh' }}>
                <h3>2nd EAI International Conference on AI-assisted Solutions for COVID-19 and Biomedical Applications in Smart-Cities</h3>
                <Divider />
                <h4> Web Chair  </h4>
                <h4> Held Online </h4>
                <Link to="//aiscovid19.eai-conferences.org/2021/" target='_blank'><Button style={{ backgroundColor: '#97afa3', float: 'right' }} type="text" value="small"><ArrowRightOutlined /></Button>  </Link>
              </Card>
            </div><br />
            <div>
              <Card style={{ borderRadius: "20px", textAlign: 'justify', backgroundColor: '#f7f7f7', height: '28vh' }}>
                <h3>IEEE Computational Intelligence Society Chapter, Portugal <br /><br /></h3>
                <Divider />
                <h4> Organizational Chair  </h4>
                <h4> Held Online </h4>
                <Link to="//www.ieee-pt.org/chapters/" target='_blank'><Button style={{ backgroundColor: '#97afa3', float: 'right' }} type="text" value="small"><ArrowRightOutlined /></Button>  </Link>
              </Card>
            </div>
          </Col>
        </Row>
      </div><br/>
      </div>
        
    );
}

export default Activities;
