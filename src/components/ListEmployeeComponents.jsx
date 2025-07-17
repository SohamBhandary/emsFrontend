import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/empService'

const ListEmployeeComponents = () => {

    const[emp,setEmp]=useState([])
    useEffect(()=>{

        listEmployees().then((response)=>{
            setEmp(response.data)
        }).catch(error=>{
            console.log(error);
            

        })
    },[])


    return (
        <div className='container'>
            <h2 className='text-center'>List of Employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {emp.map((i) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponents
