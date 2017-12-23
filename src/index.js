import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const muiTheme = getMuiTheme({
  fontFamily:'Roboto'
});
const Main = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
    <MuiThemeProvider muiTheme={muiTheme}>
      <main>
        <Switch>
                  <Route path='/' component={App}/>
        </Switch>
      </main>
    </MuiThemeProvider>
  </Router>
  </Provider>
);

ReactDOM.render(
      <Main />

  , document.getElementById('root'));
  registerServiceWorker();
