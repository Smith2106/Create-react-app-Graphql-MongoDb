import React, {Component} from 'react';
import TableComponent from './components/TableComponent';

class CustomTable extends Component {


    render(){
        return(

            <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>StringStore</TableCell>
          <TableCell>Add/Remove</TableCell>
        </TableRow>
      </TableHead>

        <TableComponent/>
        </Table>
        </Paper>
        
        );
    }
}

export default CustomTable;