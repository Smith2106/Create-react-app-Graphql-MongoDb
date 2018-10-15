import React, {Component} from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Button from '@material-ui/core/Button';

const REMOVE = gql`
mutation removeDBString($name: String!) {
  removeDBString(name: $name) {
    _id
    name
  }
}
`;

class TableRemove extends Component {
 
  render(){
    var handleToUpdate  =   this.props.handleToUpdate;
    var reFetch= this.props.reFetch;

  return (
    <Mutation mutation={REMOVE}>
      {(removeDBString, { data }) => (
        
        <div>
            <Button variant="outlined" color="secondary" onClick = {() => 
              {
                removeDBString({ variables: { name: this.props.toRemove } }) 
                handleToUpdate("yes");
                reFetch();    
                console.log(this.props.toRemove);
            }}> Remove </Button>

        </div>
      )}
    </Mutation>
  );
            }
};
export default TableRemove;
