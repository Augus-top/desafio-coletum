import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'normalize.css'; 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
