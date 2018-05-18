import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Detta letar upp ett element med id='root' (det är en div som ligger i index.html) och sedan byter ut den med komponenten vi döpt till 'app'.

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
