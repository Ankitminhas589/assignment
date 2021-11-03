import React from 'react';
import {Provider} from 'react-redux';
import {store} from './core/store';
import {RootNavigator} from './navigation';

export function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
