import React from 'react';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';

import MainContainer from 'js/containers/mainContainer';
import HomeContainer from 'js/containers/homeContainer';

export default () => (
	<Router>
		<MainContainer>
			<Match pattern="/" exactly component={HomeContainer} />
		</MainContainer>
	</Router>
);
