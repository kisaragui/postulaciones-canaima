import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col} from  'react-bootstrap';
import "../css/style.css";

class Partefooter extends React.Component {
	
	render(){

	return (
		<div>
			<div className="footer-1">
				<div className="container-fluid">
					<Grid fluid>
						<Row className="show-grid">
							<Col md={4} mdOffset={1}>
								<h5>Canaima GNU/Linux</h5>
								<p>	
								Es un proyecto socio-tecnológico abierto, construido de forma
                  				colaborativa, centrado en el desarrollo de herramientas y modelos productivos
                  				basados en las Tecnologías de Información (TI)
                  				</p>
							</Col>
							<Col md={3}>
								<h5>Sitios de Interes:  </h5>
								<div><p><a href="http://canaima.softwarelibre.gob.ve">Canaima GNU</a></p></div>
                				<div><p><a href="http://wiki.canaima.softwarelibre.gob.ve">Wiki Canaima</a></p></div>
                				<div><p><a href="http://canaima.softwarelibre.gob.ve/foro">Foros Canaima</a></p></div>	
							</Col>
							<Col md={2} mdOffset={1}>
								<h5> Siguenos:</h5>
								<div><a href="https://twitter.com/CanaimaGNULinux" target="_blank" className="color-twitter"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i>Twitter Canaima</a></div>
								<div><a href="https://www.youtube.com/user/CanaimaGNULinux"  target="_blank" className="color-youtube"><i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i>Youtube Canaima</a></div>
							</Col>
						</Row> 
					</Grid>
				</div>
			</div>
			<div className="footer-2">
				<div>Portal desarrollado y administrado por el Equipo Canaima GNU/Linux.</div>
			</div>	
		</div>
		)

	}

}

ReactDOM.render(<Partefooter  />, document.getElementById('footer'));