import { useEffect, useState } from "react"
import EmployeeService from "../services/EmployeeService"


const Employee = () => {

    const[employees, setEmployees] = useState([])

    useEffect(
        () => {
            EmployeeService.getEmployees()
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
    )
    return(
        <div>
            <h3>List of Cherry Bullet Members🍒</h3>
            <div>
                <table border ="1">
                    <tr>
                        <td>Name</td>          
                        <td>Location</td>
                        <td>Department</td>
                    </tr>
                    {
                        employees.map(
                            employee => (
                                <tr>
                                    <td>{employee.name}</td>          
                                    <td>{employee.location}</td>
                                    <td>{employee.department}</td>
                                </tr>
                            )
                        )
                    }
                </table>
            </div>
        </div>
    )
}

export default Employee