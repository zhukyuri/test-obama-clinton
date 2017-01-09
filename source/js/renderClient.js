import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../scss/style.scss';

injectTapEventPlugin();

render(
	<AppContainer>
		<Routes />
	</AppContainer>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept('./routes', () => {
		const NextRoutes = require('./routes').default;

		render(
			<AppContainer>
				<NextRoutes />
			</AppContainer>,
			document.getElementById('root')
		);
	});
}
