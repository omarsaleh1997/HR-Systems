import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Department = props => (
    <tr>
        <td>{props.department.d_ID}</td>
        <td>{props.department.dep_spec}</td>
        <td>{props.department.dep_emp_num}</td>
        <td>{props.department.dep_req_emp}</td>
        <td>{props.department.Status}</td>
        <td>
            <Link to={"/edit/"+props.department._id}>Edit</Link>
        </td>
    </tr>
)


export default class DepartmentList extends Component {

    constructor(props) {
        super(props);
        this.state = {departments: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/departments/')
            .then(response => {
                this.setState({departments: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    depList() {
        return this.state.departments.map(function(currentDepartment, i) {
            return <Department department={currentDepartment} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Departments List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Department ID</th>
                            <th>Department Specification</th>
                            <th>Department Capacity</th>
                            <th>Department Required</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        { this.depList() }
                    </tbody>
                </table>
            </div>
        )
    }
}