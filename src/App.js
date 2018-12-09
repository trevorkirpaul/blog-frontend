import React from 'react';
import ApolloClient from 'apollo-boost';

import Router from './Router';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

console.log(client);

const App = () => <Router />;

export default App;
