const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const departmentRoutes = express.Router();
const PORT = 4000;

let Department = require('./depart.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/departments', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

departmentRoutes.route('/').get(function(req, res) {
    Department.find(function(err, department) {
        if (err) {
            console.log(err);
        } else {
            res.json(department);
        }
    });
});

departmentRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Department.findById(id, function(err, department) {
        res.json(department);
    });
});

departmentRoutes.route('/add').post(function(req, res) {
    let department = new Department(req.body);
    department.save()
        .then(department => {
            res.status(200).json({'department': 'department added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new department failed');
        });
});


departmentRoutes.route('/update/:id').post(function(req, res) {
    Department.findById(req.params.id, function(err, department) {
        if (!department)
            res.status(404).send('data is not found');
        else
            department.d_ID = req.body.d_ID;
            department.dep_emp_num = req.body.dep_emp_num;
            department.dep_req_emp = req.body.dep_req_emp;
            department.dep_spec = req.body.dep_spec;
            department.Status = req.body.Status;


            department.save().then(department => {
                res.json('Department updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

departmentRoutes.delete("/delete/:id", async (req,res)=>
{
    // Look for a Department in the database by ID and delete it if found.
    const department = await Department.findByIdAndRemove(req.params.id);
    // Error if not found
    if(!department) return res.status(404).send("The Department with the given ID cannot be found.");
    
    // if all is well, simply delete then return the genre to the client
    res.send(department);
});



app.use('/departments', departmentRoutes);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
