import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500, pink400} from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

const styles = { 
	img:{
    	margin: "5px",
    },
    Toolbar:{
    	backgroundColor: "#622F96",
    	padding:"2px",
    }	
}

function handleTouchTap() {
  ;
}
class BarraNav extends React.Component {

	constructor(props) {
    super(props)
  } 
 
	render() {
  
    	return (
    	<MuiThemeProvider >
    		<Toolbar style={styles.Toolbar} >
    			<a href="/" style={styles.img}> <Logo /> </a>
    			<ToolbarGroup >
    				<Menu >
        				<MenuItem anchorOrigin={horizontal} primaryText="Maps" />
        				<MenuItem primaryText="Books" />
        				<MenuItem primaryText="Flights" />
        				<MenuItem primaryText="Apps" />
      				</Menu>
    			<ToolbarTitle text="Canaima" />
  				</ToolbarGroup>
			</Toolbar>
    	</MuiThemeProvider>	
    	);
  	}
}

const Logo = props => <img src="/assets/imagenes/canaima-logo_white.png" width="60%" alt="canaima-logo-Blanco" />;


	/**return (	
		<MuiThemeProvider >
			<RaisedButton  label="botonsito" backgroundColor={cyan500} labelColor={pink400} />
		</MuiThemeProvider>
	);**/


ReactDOM.render(<BarraNav  />, document.getElementById('nav'));