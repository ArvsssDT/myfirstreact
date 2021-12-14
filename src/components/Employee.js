import { useEffect, useState, } from "react"
import { Link } from "react-router-dom"
import EmployeeService from "../services/EmployeeService"


const Employee = () => {

    const[employees, setEmployees] = useState([]) //useState HOOKS

    useEffect(() => {
        refreshEmployeeTable();
    })

    const refreshEmployeeTable = () => {
        EmployeeService.getEmployees() //promise
        .then(
            response => {
                setEmployees(response.data)
            }
        )
        .catch(
            () => {
                console.log("Sorry, Lullet. The local server can't connect right now.")
            }
        )
    }

    const deleteEmployee = (employee_id) => {
        EmployeeService.deleteEmployee(employee_id)
        .then(
            response => {
                console.log("Successfully deleted an employee")
                refreshEmployeeTable();
            }
        )
        .catch(
            error => {
                console.error("Something went wrong.", error)
            }
        )
    }

    return(
        <div className="container">
            <h3>List of Cherry Bullet Members🍒</h3>
            <div>
                <Link to="/myyfirstreact/add" className="btn btn-primary mb-2">Add Employees</Link>
                <table className="table table-hover table-light  table-stripped" >
                    <thead>
                    <tr className="table-danger">
                        <td>Name</td>          
                        <td>Nickname</td>
                        <td>Roles</td>
                        <td>Action</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map( //breaks down each variable
                            employee => (
                                <tr key={employee.employee_id}>
                                    <td>{employee.name}</td>          
                                    <td>{employee.nickname}</td>
                                    <td>{employee.roles}</td>
                                    <td>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Link className="btn btn-primary" to={`/edit/${employee.employee_id}`}>Update</Link>
                                            <button className="btn btn-danger" onClick={(e) => deleteEmployee(employee.employee_id)}>Delete</button>
                                        </div>

                                    </td>
                                    
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee