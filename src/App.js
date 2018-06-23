import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAsUkVeDfc15mftb2kDAMt0lrBOxsiervY',
            authDomain: 'manager-438f8.firebaseapp.com',
            databaseURL: 'https://manager-438f8.firebaseio.com',
            projectId: 'manager-438f8',
            storageBucket: 'manager-438f8.appspot.com',
            messagingSenderId: '332362859936'
        };
        firebase.initializeApp(config);
    }


    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
