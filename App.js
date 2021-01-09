import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './src/navigation/MainNav';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import Reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';

const App = () => {
  return (
    <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
