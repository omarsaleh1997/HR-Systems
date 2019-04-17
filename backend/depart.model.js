const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let department= new Schema({
   d_ID: {
        type: Number
    },
    dep_emp_num: {
        type: Number
    },
    dep_req_emp: {
        type: Number
    },
    dep_spec: {
        type: String
    },
    Status: {
        type:String
    }
    
});

module.exports = mongoose.model('department', department);