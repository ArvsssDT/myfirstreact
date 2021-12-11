import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
    
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [roles, setRoles] = useState("");
    const navigate = useNavigate();
    const {employee_id} = useParams();

    const saveEmployee = (e) =>{
        e.preventDefault(); //to prevent refresh
        
        const employee = {employee_id, name, nickname, roles};

        if(employee_id){
            //update employee
            EmployeeService.putEmployee(employee) //promise
            .then(response => {
                console.log("Employee updated!");
                navigate("/employees");
            })
            .catch(error =>{
                console.log("Something went wrong!")
            })
        }
        else{
            //add employee
            EmployeeService.postEmployee(employee) //promise
            .then(response => {
                console.log("Employee added!");
                navigate("/employees");
            })
            .catch(error =>{
                console.log("Something went wrong!")
            })
        }
    }
    
    useEffect(
        () => {
            if(employee_id){
                EmployeeService.getEmployee(employee_id)
                .then(
                    employee => {
                        setName(employee.data.name);
                        setNickname(employee.data.nickname);
                        setRoles(employee.data.roles);
                    }
                )
                .catch(
                    error =>{
                        console.error("Something went wrong.", error)
                    }
                )
            }
        },[]
    )

    return(
        <div className="container mb-2">
            <h3>Add a new employee</h3>
            <form>
                <div class="mb-3">
                    <label for="addName" class="form-label">Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter the name of the employee"
                        value= {name}
                        className="form-control" 
                        id="name" 
                        aria-describedby="nameHelp"
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        />
                </div>
                <div class="mb-3">
                    <label for="addNickname" class="form-label">Nickname</label>
                    <input 
                        type="text" 
                        placeholder="Enter the nickname of the employee"
                        value= {nickname}
                        className="form-control" 
                        id="nickname" 
                        onChange={
                            (e) => setNickname(e.target.value)
                        }
                        />
                </div>
                <div class="mb-3">
                    <label for="addRoles" class="form-label">Roles</label>
                    <input 
                        type="text" 
                        placeholder="Enter the roles of the employee"
                        value= {roles}
                        className="form-control" 
                        id="roles" 
                        onChange={
                            (e) => setRoles(e.target.value)
                        }
                        />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
            </form>
        </div>
    );
}

export default AddEmployee;