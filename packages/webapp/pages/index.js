import React from 'react';
import { Provider } from 'redux-zero/react';
import Dashboard from 'components/dashboard';
import { store } from 'store/tickets';

import 'styles/bulma.sass';

export default () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);
