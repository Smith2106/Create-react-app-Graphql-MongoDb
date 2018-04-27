import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { ApolloProvider } from "react-apollo";
//import ApolloClient from "apollo-boost";
import gql from "graphql-tag";


import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql"
});
client
.query({
  query: gql`
    {
      allCats {
        name
      }
    }
  `
})
  .then(result => console.log(result));
const Root = () => (
  <MuiThemeProvider>
  <ApolloProvider client={client}>

    <App />
    </ApolloProvider>

  </MuiThemeProvider>
);

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);
