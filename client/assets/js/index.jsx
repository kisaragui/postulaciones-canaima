import React from 'react'
import ReactDOM from 'react-dom'
import { Menu } from 'semantic-ui-react'

function handleTouchTap() {
  ;
}



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

			 <div>
        <Menu.Header>

          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
        </Menu.Header>
        </div>
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