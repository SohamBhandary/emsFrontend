import React, { useState } from 'react';
import { createEmployee } from '../services/empService';
import { useNavigate } from 'react-router-dom';

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigator = useNavigate();

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const saveEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, email };
    console.log("Sending employee:", employee);

    createEmployee(employee)
      .then((response) => {
        console.log("Employee created:", response.data);
        navigator('/employees'); 
      })
      .catch((error) => {
        console.error("Error creating employee:", error);
      });
  };

  return (
    <div className='container'>
      <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
          <h2 className='text-center'>Add Employee</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input
                  type="text"
                  placeholder='Enter Employee First Name'
                  value={firstName}
                  className='form-control'
                  onChange={handleFirstName}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input
                  type="text"
                  placeholder='Enter Employee Last Name'
                  value={lastName}
                  className='form-control'
                  onChange={handleLastName}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input
                  type="email"
                  placeholder='Enter Employee Email'
                  value={email}
                  className='form-control'
                  onChange={handleEmail}
                />
              </div>

              <button className='btn btn-success' onClick={saveEmployee}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
