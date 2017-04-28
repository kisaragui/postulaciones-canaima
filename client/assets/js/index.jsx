import React from 'react'
import ReactDOM from 'react-dom'
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import Ripple from 'react-toolbox/lib/ripple';
import theme from 'react-toolbox/lib/ripple/theme';
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

 const actions = [
  { label: 'Alarm', raised: true},
  { label: 'Location', raised: true, accent: true}
];

const RippleLink = Ripple({spread: 1})(Link); 

class BarraNav extends React.Component {

	constructor(props) {
    super(props)
  }
 

	render() {
  		
		return (
			<AppBar>
				 <Navigation type='horizontal' actions={actions} />
				<Navigation type='horizontal'>

					<RippleLink href='#' label='Inbox' theme={theme.prorippleWrapper}></RippleLink>
					<RippleLink href='#' active label='Profile' />
				</Navigation>
			</AppBar>
		)
	}
}

const Logo = props => <img src="/assets/imagenes/canaima-logo_white.png" width="60%" alt="canaima-logo-Blanco" />;


	/**return (	
		<MuiThemeProvider >
			<RaisedButton  label="botonsito" backgroundColor={cyan500} labelColor={pink400} />
		</MuiThemeProvider>
	);**/


ReactDOM.render(<BarraNav  />, document.getElementById('nav'));