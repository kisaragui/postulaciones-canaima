import React from 'react'
import ReactDOM from 'react-dom'
import {Grid, Row, Col} from 'react-bootstrap'

class PlantillaPaquete extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
  
    return (

        <Row className="show-grid">
          <Col  md={7}>
          <p> {this.props.repositorio}</p>
          </Col>
          <Col  md={4}>
          <p> {this.props.nombre}</p>
          </Col>
          <Col  md={1}>
          <p> {this.props.status}</p>
          </Col>
        </Row>
    );
  }
}

class FilaPaquetes extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      paquetes: []
    }
  }

  componentWillMount() {
    fetch('http://127.0.0.1:8000/API/')
      .then((response) => {
        return response.json()
      })
      .then((paquetes) => {
        this.setState({ paquetes: paquetes })
      })
  }; 

  render() {

    return (
      <Grid fluid >
        {
          this.state.paquetes.map((paquete) => {

            return <PlantillaPaquete key= {paquete.id}
                                repositorio= {paquete.repository}
                                nombre= {paquete.name_package}
                                status= {paquete.status} />
          })
        }
      </Grid>
    )
  }
}

class AcordionPaquetes extends React.Component {
  
   constructor(props) {
    super(props)
  }

  render() {

  
  }

}

ReactDOM.render(<FilaPaquetes  />, document.getElementById('index'))
