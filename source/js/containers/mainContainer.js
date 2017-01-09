import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import store from 'js/store';
import Header from 'js/components/header';

class MainContainer extends Component {

	static propTypes = {
		children: PropTypes.node
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<MuiThemeProvider>
				<Provider store={store}>
					<div className="app">
						<Header title="Test: Obama - Clinton" />
						<main className="container">
							{this.props.children}
						</main>
					</div>
				</Provider>
			</MuiThemeProvider>
		);
	}

}

export default MainContainer;
