import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    // fetchOptions: {
    //     credentials: true
    // },
    // request: operations => {
    //     const token = localStorage.getItem('token')
    //     operations.setContext({
    //         authorization: token
    //     })
    // },
    // onError: ({ Gr })
})



ReactDOM.render(
    <ApolloProvider client = { client } >
        <App />
    </ApolloProvider>
, document.getElementById('root'));


