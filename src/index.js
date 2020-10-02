import React from 'react';
import ReactDOM from 'react-dom';
import { DataLayer } from './context/DataLayer';
import reducer, { initialState } from './context/reducer';
import App from './App';

import './index.css';
ReactDOM.render(
	<DataLayer initialState={initialState} reducer={reducer}>
		<App />
	</DataLayer>,
	document.getElementById('root')
);
