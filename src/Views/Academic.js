import { Row, Col, Card } from 'antd';

function Academic() {
    return (
      <div>
        <br/>
      <h1 style={{fontFamily:'Lato', fontSize:'5vh'}}>Teaching</h1>
      <div style={{ width: '90%', marginLeft: '5%' }}>
        <Row>
          <Col span={10} offset={1}>
            <div>
              <Card style={{ borderRadius: "20px", textAlign: 'justify', height: '10vh', backgroundColor: '#f7f7f7' }}>
                <center><h3>Bases de Dados</h3></center>
              </Card><br />
              <Card style={{ borderRadius: "20px", textAlign: 'justify', height: '10vh', backgroundColor: '#f7f7f7' }}>
              <center><h3>Análise Inteligente em Sistemas de Big Data</h3></center>
               </Card>
            </div>
            <br />
          </Col>
          <Col span={10} offset={2}>

            <div>
              <Card style={{ borderRadius: "20px", textAlign: 'justify', height: '10vh', backgroundColor: '#f7f7f7' }}>
              <center> <h3>Seminários de Engenharia Biomédica</h3></center>
            </Card><br />
              <Card style={{ borderRadius: "20px", textAlign: 'justify', height: '10vh', backgroundColor: '#f7f7f7' }}>
              <center><h3>Projeto Integrador em Engenharia Biomédica</h3></center>
               </Card>
            </div>
          </Col>
        </Row>
      </div> 
      </div>
    );
  }
  
  export default Academic;