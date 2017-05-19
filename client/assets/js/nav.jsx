import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavbarHeader, Nav, NavItem, NavDropdown, MenuItem, Image, DropdownToggle, Dropdown } from 'react-bootstrap';
import {Link} from "react-router-dom"
import "../css/style.css";


const tema = {
   	img: {
		width: "8em",
		margin:"15px 0px"
	}		
}


class BarraNav extends React.Component {

	constructor(props) {
    super(props)

    }

	render() {

  		return (
			<Navbar fluid >
   				<Navbar.Header>
   					<a href="/"><Logo /></a>
   				</Navbar.Header>
   				<Nav pullRight >  
      			<NavDropdown eventKey={1} title={<span><i className="fa fa-user fa-2x" aria-hidden="true"></i>Usuarios</span>} id="dropdown-1">
        				<MenuItem>Iniciar Sesion</MenuItem>
        				<MenuItem eventKey={1.2}>Registrarse</MenuItem>
        				<MenuItem eventKey={1.3}>Cerrar Sesion</MenuItem>
      				</NavDropdown>
      			<NavDropdown eventKey={2} title={<span><i className="fa fa-file-code-o fa-2x" aria-hidden="true"></i>Paquetes</span>} id="dropdown-2">
        				<MenuItem eventKey={2.1}>Listado de Paquetes</MenuItem>
        				<MenuItem eventKey={2.2}>Postular un paquete</MenuItem>
      				</NavDropdown>
      			<NavDropdown eventKey={3} title={<span><i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>Actualizar</span>} id="dropdown-3">
        				<MenuItem eventKey={3.1}>Status</MenuItem>
        				<MenuItem eventKey={3.2}>Evaluaciones</MenuItem>	
      				</NavDropdown>
    			</Nav>
    		</Navbar>
		)
	}
}


const Logo = () => <Image src="/assets/imagenes/canaima-logo_white.png" style={tema.img} alt="canaima-logo-Blanco" />;

ReactDOM.render(<BarraNav  />, document.getElementById('nav'));