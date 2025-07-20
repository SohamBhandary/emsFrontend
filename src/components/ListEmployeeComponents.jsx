import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../services/empService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponents = () => {
  const [emp, setEmp] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees()
   
  }, []);
  function getAllEmployees(){
     listEmployees()
      .then((response) => {
        setEmp(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function addNewEmployee() {
    navigator('/add-employee');
  }
  function updateEmployee(id){
    navigator(`/edit-employee/${id}`)
  }
 function removeEmployee(id){
  deleteEmployee(id).then((res)=>{getAllEmployees()}).catch(err=>{console.log(err);
  })
 }
  return (
    <div className='container'>
      <h2 className='text-center'>List of Employees</h2>
      <button className='btn btn-primary mb-2' onClick={addNewEmployee}>
        Add Employee
      </button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((i) => (
            <tr key={i.id}> 
              <td>{i.id}</td>
              <td>{i.firstName}</td>
              <td>{i.lastName}</td>
              <td>{i.email}</td>
              <td><button className='btn btn-info' onClick={()=>{updateEmployee(i.id)}}>Update</button></td>
              <td><button className='btn btn-danger' onClick={()=>{removeEmployee(i.id)}}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponents;
