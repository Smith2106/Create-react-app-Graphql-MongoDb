import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FuzzySearch from './components/FuzzySearch';
import TableComponent from './components/TableComponent';

class App extends Component {
  constructor(){
    super();
  this.state = {
    request: '',
    response: '',
    searchText: '',
    title: '',
    content: '',
  };
};

  selectKitty (t) { this.setState( { searchText: t }) }




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
        title="Material ui, Graphql, MongoDb starter Kit"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />

    <FuzzySearch selectKitty= {this.selectKitty.bind(this)}/>
    <TableComponent/>

      </div>

    );
  }
}

export default App;
