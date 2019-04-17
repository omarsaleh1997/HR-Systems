import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://localhost:4000/departments/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.d_ID}
          </td>
          <td>
            {this.props.obj.dep_emp_num}
          </td>
          <td>
            {this.props.obj.dep_req_emp}
          </td>
          <td>
            {this.props.obj.dep_spec}
          </td>
          <td>
            {this.props.obj.Status}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;