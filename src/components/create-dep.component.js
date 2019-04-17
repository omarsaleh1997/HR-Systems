import React, { Component } from "react";
import axios from "axios";
export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.onChangeDepartmentID = this.onChangeDepartmentID.bind(this);
        this.onChangeDepartmentEmployeeNum = this.onChangeDepartmentEmployeeNum.bind( this);
        this.onChangeDepartmentRequireEmployee = this.onChangeDepartmentRequireEmployee.bind( this );
        this.onChangeDepartmentSpec = this.onChangeDepartmentSpec.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            d_ID: Number,
            dep_emp_num: Number,
            dep_req_emp: Number,
            dep_spec: "",
            Status: ""
        };
    }
    onChangeDepartmentID(e) {
        this.setState({
            d_ID: e.target.value
        });
    }

    onChangeDepartmentEmployeeNum(e) {
        this.setState({
            dep_emp_num: e.target.value
        });
    }

    onChangeDepartmentRequireEmployee(e) {
        this.setState({
            dep_req_emp: e.target.value
        });
    }
    onChangeDepartmentSpec(e) {
        this.setState({
            dep_spec: e.target.value
        });
    }
    onChangeStatus(e) {
        this.setState({
            Status: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Department ID: ${this.state.d_ID}`);
        console.log(`Employee Number: ${this.state.dep_emp_num}`);
        console.log(`Required Employee: ${this.state.dep_req_emp}`);
        console.log(`Department Specification: ${this.state.dep_spec}`);
        console.log(`Department Status: ${this.state.Status} `);

        const newDepartment = {
            d_ID: this.state.d_ID,
            dep_emp_num: this.state.dep_emp_num,
            dep_req_emp: this.state.dep_req_emp,
            dep_spec: this.state.dep_spec,
            Status: this.state.Status
        };
        axios
            .post("http://localhost:4000/departments/add", newDepartment)
            .then(res => console.log(res.data));

        this.state = {
            d_ID: Number,
            dep_emp_num: Number,
            dep_req_emp: Number,
            dep_spec: "",
            Status: ""
        };
    }
    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <h3>Create New Department</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Department ID: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.d_ID}
                            onChange={this.onChangeDepartmentID}
                        />
                    </div>
                    <div className="form-group">
                        <label>Department Specification </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.dep_spec}
                            onChange={this.onChangeDepartmentSpec}
                        />
                    </div>
                    <div className="form-group">
                        <label>Department Capacity: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.dep_emp_num}
                            onChange={this.onChangeDepartmentEmployeeNum}
                        />
                    </div>
                    <div className="form-group">
                        <label>Department Required: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.dep_req_emp}
                            onChange={this.onChangeDepartmentRequireEmployee}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="statusOptions"
                                id="statusFull"
                                value="Full"
                                checked={this.state.Status === "Full"}
                                onChange={this.onChangeStatus}
                            />
                            <label className="form-check-label">Full</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="statusOptions"
                                id="statusNotFull"
                                value="NotFull"
                                checked={this.state.Status === "NotFull"}
                                onChange={this.onChangeStatus}
                            />
                            <label className="form-check-label">Not Full</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input
                            type="submit"
                            value="Create Department"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}
