import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired
	};

	render() {
		const { title } = this.props;

		return (
			<AppBar title={title} iconElementLeft={<span />} iconElementRight={
				<div style={menuStyle}>
				</div>
			} />
		);
	}

}

const menuStyle = {
	display: 'flex',
	alignItems: 'center',
	height: 48
};

const menuItemStyle = {
	color: 'white'
};

export default Header;
