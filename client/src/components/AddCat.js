import React from 'react';

import gql from "graphql-tag";
import { Mutation } from "react-apollo";


const ADD_TODO = gql`
mutation createCat($name: String!) {
  createCat(name: $name) {
    _id
    name
  }
}
`;

const AddTodo = () => {
  let input;

  return (
    <Mutation mutation={ADD_TODO}>
      {(createCat, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              createCat({ variables: { name: input.value } });
              input.value = "";
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
          <button type="submit">Add Kitty</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};
export default AddTodo;
