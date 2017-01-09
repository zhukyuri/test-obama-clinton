import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { rechartsUpdate } from 'js/actions/recharts';
import ButtonBlock from '../components/buttonBlock';
import RechartsBlock from '../components/rechartsBlock';

class HomeContainer extends Component {

	static propTypes = {
		rechartsUpdate: PropTypes.func.isRequired,
		vote: PropTypes.array.isRequired
	};

	render() {

		const {
			rechartsUpdate,
			vote
		} = this.props;

		return (
			<div>
				<ButtonBlock onVote={rechartsUpdate}/>
				<hr />
				<RechartsBlock vote={vote}/>
			</div>
		);
	}
}

const mapStateToProps = ({ vote }) => ({
	vote
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	rechartsUpdate: rechartsUpdate
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeContainer);
