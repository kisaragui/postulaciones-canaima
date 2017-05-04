import React from 'react'
import ReactDOM from 'react-dom'
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import Ripple from 'react-toolbox/lib/ripple';
import theme from '../css/index.css';
import { ThemeProvider } from 'react-css-themr';
import { Menu, MenuItem } from 'react-toolbox/lib/menu';
function handleTouchTap() {
  ;
}



class BarraNav extends React.Component {

	constructor(props) {
    super(props)
    	this.state = { 
    		active: false 
    	}
  	
    	this.handleButtonClick = this.handleButtonClick.bind(this);
    	this.handleMenuHide = this.handleMenuHide.bind(this)
  	}
 
  	handleButtonClick() {
  		this.setState({ 
  			active: true 
  		})
  	};
  
  	handleMenuHide() {
  		this.setState({ 
  			active: false 
  		})
	};

	render() {
  		
		return (

			<AppBar theme={theme}>
				<Logo/>
				<Navigation type='horizontal' className={theme.navigation}>
				<ul>
					<li>
						<Link href='#' onClick={this.handleButtonClick} label='Usuarios' className={theme.link} icon="person" />
        					<Menu  theme={theme} position="static" active={this.state.active} onHide={this.handleMenuHide} >
        						<MenuItem value='download' icon='get_app' caption='Download' />
    							<MenuItem value='help' icon='favorite' caption='Favorite' />
    							<MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
    							<MenuItem value='signout' icon='delete' caption='Delete' disabled />
							</Menu>
					</li>

					<li><Link href='#' label='Paquetes' className={theme.link} /></li>
					
				</ul>
				</Navigation>
			</AppBar>
		)
	}
}

const Logo = () => <img src="/assets/imagenes/canaima-logo_white.png" width="13%" alt="canaima-logo-Blanco" />;


	/**return (	
		<MuiThemeProvider >
			<RaisedButton  label="botonsito" backgroundColor={cyan500} labelColor={pink400} />
		</MuiThemeProvider>
	);**/


ReactDOM.render(<BarraNav  />, document.getElementById('nav'));