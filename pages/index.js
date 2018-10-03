import React from 'react';
import { Provider } from 'redux-zero/react';
import Dashboard from 'components/dashboard';
import { store } from 'components/dashboard/store';

import 'styles/bulma.sass';

export default () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);
