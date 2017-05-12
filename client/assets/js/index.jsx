import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar, NavbarHeader, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';



class BarraNav extends React.Component {

	constructor(props) {
    super(props)
    	this.state = { 
    		activeItem: 'home' 
    	}
  	
    	this.handleItemClick = this.handleItemClick.bind(this);
    	
  	}
 
  	handleItemClick(e, { name }) {
  		this.setState({ activeItem: name })
  	};
  
  	handleMenuHide() {
  		this.setState({ 
  			active: false 
  		})
	};

	
	render() {

  		const { activeItem } = this.state

		return (
			<Navbar>
   				<Navbar.Header>
   					<Logo />
   				</Navbar.Header>
   				<Nav>
      			<NavItem eventKey={1} href="#">Link</NavItem>
      			<NavItem eventKey={2} href="#">Link</NavItem>
      				<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        				<MenuItem eventKey={3.1}>Action</MenuItem>
        				<MenuItem eventKey={3.2}>Another action</MenuItem>
        				<MenuItem eventKey={3.3}>Something else here</MenuItem>
        				<MenuItem divider />
        				<MenuItem eventKey={3.4}>Separated link</MenuItem>
      				</NavDropdown>
    			</Nav>
    		</Navbar>
		)
	}
}

const tema = {
    nav:{
    	background: "#622F96",
    	minHeight: "4em"	
    },
   	img: {
		width: "8em"
	},
	navItems:{
		position: "initial",

		hover:{
			background: "#aaa",

		}
	},
			
}


const Logo = () => <img src="/assets/imagenes/canaima-logo_white.png" style={tema.img} alt="canaima-logo-Blanco" />;




ReactDOM.render(<BarraNav  />, document.getElementById('nav'));