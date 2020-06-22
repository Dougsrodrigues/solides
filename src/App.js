import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import { store, persistor } from './store';
import Routes from './routes';
import GlobalStyles from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyles />
      </Provider>
    </>
  );
}

export default App;
