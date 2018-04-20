import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import AutoCompleteBook from './components/AutoCompleteBook';

import BookComponent from './components/BookComponent';


class App extends Component {
  state = {
    request: '',
    response: '',
    searchText: '',
    title: '',
    content: '',
  };





  componentDidMount() {

    //this.callApi()
    //  .then(res => this.setState({ title: res.title }))
    //  .catch(err => console.log(err));
  }
/*
  callApi = async () => {
    const response = await fetch('http://localhost:3001');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
*/
  render() {
    return (
      <div className="App">
        <AppBar
        title="Books"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />

    <AutoCompleteBook/>
    <BookComponent/>
      </div>

    );
  }
}

export default App;
