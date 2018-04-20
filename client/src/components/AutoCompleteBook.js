import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import AutoComplete from 'material-ui/AutoComplete';




class AutoCompleteBook extends Component {
  state=
{
  searchText: '',
};
handleSelect (t) { this.setState( { searchText: t }) }

render() {
  return (
  <Query
    query={gql`
      {
        books {
          title
          author
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :</p>;
        if (data) {
          var dsConfig = {
          text: 'title',
          value: 'book',
          };

        return  <AutoComplete
        floatingLabelText="Type 'h', fuzzy search"
        filter={AutoComplete.fuzzyFilter}
        dataSource={data.books}
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
export default AutoCompleteBook;
