import React from 'react'

export default function StudentDisplay(props) {
    const tableHeaders = ['ID#', 'First', 'Last'];
    return (
        <div>
            <h1 className='text-center my-3'>
                Kekambas Students
            </h1>
            <table>
                <thead>
                    <tr>
                        {tableHeaders.map((headerName, i) => <th key={i}>{headerName}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.students.map( student => (
                        <tr key={student.id}>
                            <th>{student.id}</th>
                            <th>{student.first_name}</th>
                            <th>{student.last_name}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}