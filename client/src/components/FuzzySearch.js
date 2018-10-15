import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import AutoComplete from 'material-ui/AutoComplete';




class FuzzySearch extends Component {
 
handleSelect (t) { this.setState( { searchText: t.name });this.props.selectKitty(t.name); }

render() {
  return (
  <Query
    query={gql`
      {
        allDBStrings {
          _id
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :</p>;
        if (data) {
          var dsConfig = {
          text: 'name',
          value: 'allDBStrings',
          };

        return  <AutoComplete
        floatingLabelText="Type 'h', fuzzy search"
        filter={AutoComplete.fuzzyFilter}
        dataSource={data.allDBStrings}
        maxSearchResults={5}
        onNewRequest={this.handleSelect.bind(this)}
        dataSourceConfig={dsConfig}

      />;
    }
      }}
      </Query>
    );
    }
  }
export default FuzzySearch;
