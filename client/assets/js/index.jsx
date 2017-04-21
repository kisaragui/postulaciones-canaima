import React from 'react'
import ReactDOM from 'react-dom'

class FilaPaquete extends React.Component {

  constructor(props) {
    super(props)
  }

 /* componentWillMount() {
    fetch('http://127.0.0.1:8000/API/')
      .then((response) => {
        return response.json()
      })
      .then((paquetes) => {
        this.setState({ paquetes: paquetes })
      })
  }; */

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

class ListaPaquetes extends React.Component {

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
      <Grid fluid>
        {
          this.state.paquetes.map((paquete) => {

            return <FilaPaquete key= {paquete.id}
                                repositorio= {paquete.repository}
                                nombre= {paquete.name_package}
                                status= {paquete.status} />
          })
        }
      </Grid>
    )
  }
}

ReactDOM.render(<ListaPaquetes  />, document.getElementById('index'))
