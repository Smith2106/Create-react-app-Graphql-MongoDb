import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const BookComponent = () => (

  <Query
    query={gql`
      {
        allCats {
          _id
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.allCats.map(({ _id, name }) => (
        <div key={_id}>
          <p>{`${_id}: ${name}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default BookComponent;
