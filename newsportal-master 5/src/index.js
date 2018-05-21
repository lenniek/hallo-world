import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker(); // Letar upp elementet med id='root' (en div i index.html) och byter ut det med komponenten vi har döpt till 'App'.
