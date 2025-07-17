import React from 'react'

const ListEmployeeComponents = () => {

    const dummyData = [
        {
            id: 1,
            firstName: "Soham",
            lastName: "Bhandary",
            email: "Soham@google.com"
        },
        {
            id: 2,
            firstName: "Subhadip",
            lastName: "Ghosh",
            email: "Subhadip@google.com"
        }
    ]

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
                    {dummyData.map((i) => (
                        <tr key={i.id}>
                            <td>{i.id}</td>
                            <td>{i.firstName}</td>
                            <td>{i.lastName}</td>
                            <td>{i.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponents
