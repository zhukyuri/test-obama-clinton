import React, { Component, PropTypes } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, PieChart, Pie, Cell, Legend } from 'recharts';
import Slider  from 'react-slick';

export default class RechartsBlock extends Component {

	constructor(props) {
		super(props);
		this.confirmData = this.confirmData.bind(this);
	}

	static propTypes = {
		vote: PropTypes.array.isRequired
	};

	render() {

		const data = this.props.vote;
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		const COLORS = ['#0088FE', '#FF3737'];

		return(

			<div style={styles.slider}>
				<Slider {...settings}>
					<div>
						<LineChart width={600} height={400} data={this.confirmData()}>
							<Line
								type="monotone"
								dataKey={data[0].name}
								stroke="#8884d8"
							/>
							<Line
								type="monotone"
								dataKey={data[1].name}
								stroke="#FF3737"
							/>
							<Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
							<CartesianGrid stroke="#ccc" />
							<XAxis dataKey="name" />
							<YAxis />
						</LineChart>
					</div>

					<div>
						<PieChart width={600} height={300}>
							<Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
							<Pie
								isAnimationActive={false}
								data={data}
								nameKey="name"
								valueKey="vote"
								cx="50%"
								cy="50%"
								innerRadius={50}
								outerRadius={100}
								fill="#82ca9d"
								legendType="circle"
							  label
							>
								{
									data.map((entry, index) => <Cell fill={COLORS[index]} />)
								}
							</Pie>
						</PieChart>
					</div>
				</Slider>
			</div>

		)
	}

	confirmData() {
		const data = this.props.vote;
		let res = [];
		res[0] = {
			[data[0].name]: data[0].vote,
			[data[1].name]: data[1].vote,
		};
		res[1] = res[0];
		console.log(res);
		return res;
	};

}

const styles = {
	slider: {
		margin: '20 auto',
		padding: 40,
		width: '100%',
		color: '#3de21a',
		background: '#fefbff'
	},
	paper: {
		width: 700,
		height: 350
	}
}
