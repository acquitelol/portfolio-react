import React from 'react';
import ReactDOM from 'react-dom';
import { IonReactRouter } from '@ionic/react-router';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <IonReactRouter>
      <App />
    </IonReactRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
