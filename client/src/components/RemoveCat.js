import React from 'react';

import gql from "graphql-tag";
import { Mutation } from "react-apollo";


const ADD_TODO = gql`
mutation removeCat($name: String!) {
  removeCat(name: $name) {
    _id
    name
  }
}
`;

const RemoveCat = () => {
  
  let input;

  return (
    <Mutation mutation={ADD_TODO}>
      {(removeCat, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              removeCat({ variables: { name: input.value } });
              input.value = "";
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
            <button type="submit">Remove Kitty</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};
export default RemoveCat;
