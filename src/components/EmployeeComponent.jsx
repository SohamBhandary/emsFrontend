import React, { useState } from 'react';
import { createEmployee } from '../services/empService';
import { useNavigate } from 'react-router-dom';

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigator = useNavigate();
  const[errors,setErrors]= useState({firstName:'',lastName:'',email:''})

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const saveEmployee = (e) => {
    e.preventDefault();
    if(validdateform()){
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

    }
    
  };

  function validdateform(){
    let valid=true;
    const errorsCopy={...errors}
    if(firstName.trim()){
      errorsCopy.firstName=''
    }else{
      errorsCopy.firstName='Firstname is required'
      valid=false;
    }
    if(lastName.trim()){
      errorsCopy.lastName=''
    }else{
      errorsCopy.lastName='Lastname is required'
      valid=false;
    }
    if(email.trim()){
      errorsCopy.email=''
    }else{
      errorsCopy.email='Email is required'
      valid=false;
    }
    setErrors(errorsCopy)
    return valid;
  }
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
                  className={`form-control ${errors.firstName?'is-invalid':''}`}
                  onChange={handleFirstName}
                />
                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input
                  type="text"
                  placeholder='Enter Employee Last Name'
                  value={lastName}
                 className={`form-control ${errors.lastName?'is-invalid':''}`}
                  onChange={handleLastName}
                />
                  {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input
                  type="email"
                  placeholder='Enter Employee Email'
                  value={email}
                className={`form-control ${errors.email?'is-invalid':''}`}
                  onChange={handleEmail}
                />
                    {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
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
