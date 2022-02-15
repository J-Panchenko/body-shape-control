import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/error-boundary';
import './index.css';
import App from './components/app';
import NinjasService from './services/ninjas-service';
import { NinjasServiceProvider } from './components/service-context';
import store from './store';

const ninjasService = new NinjasService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <NinjasServiceProvider value={ninjasService}>
        <HashRouter>
          <App />
        </HashRouter>
      </NinjasServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
