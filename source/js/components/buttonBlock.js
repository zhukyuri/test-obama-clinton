import React, { Component, PropTypes } from 'react';
import { Paper, RaisedButton } from 'material-ui'


export default class ButtonBlock extends Component {

	static propTypes = {
		onVote: PropTypes.func.isRequired
	};


	render() {
		return (
			<Paper style={styles.paper} zDepth={1}>
				<RaisedButton label="vote for Obama" primary={true} style={styles.button} onClick={this.props.onVote.bind(this, 0)}/>
				<RaisedButton label="vote for Clinton" primary={true} style={styles.button} onClick={this.props.onVote.bind(this, 1)}/>
			</Paper>
		)
	}
}

const styles = {
	chip: {
		margin: 0,
		padding: 0
	},
	wrapper: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	paper: {
		width: 400,
		height: 60
	},
	button: {
		margin: 12
	}
};

