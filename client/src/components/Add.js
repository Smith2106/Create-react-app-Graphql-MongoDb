import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import {refetch } from "react-apollo";

const ADD = gql`
mutation createDBString($name: String!) {
  createDBString(name: $name) {
    _id
    name
  }
}
`;
class Add extends Component {
  constructor(props){
    super(props);

  }



render(){
  var handleToUpdate  =   this.props.handleToUpdate;
  let input;
  var reFetch= this.props.reFetch;
  return (
    
    <Mutation mutation={ADD}>
      {(createDBString, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              createDBString({ variables: { name: input.value } });
              input.value = "";
              handleToUpdate("yes");
              reFetch();
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
          <Button variant="outlined"  type="submit">Add</Button>
          </form>
        </div>
      )}
    </Mutation>
  );
};
}
export default Add;
