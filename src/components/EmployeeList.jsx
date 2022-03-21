import React from 'react';
import "./EmployeeInput.css";

const EmployeeList = ({data}) => {
  return (
      <>
        <h3>Employee Data</h3>
        {
            data.map((e) => 
                <div key = {e.id} className = "empData">
                    <h5>Name : {e.name}</h5>
                    <h5>Gender : {e.gender}</h5>
                    <h5>Department : {e.dept}</h5>
                    <h5>Role : {e.role}</h5>
                    <h5>Salary : {e.salary}</h5>
                </div>
            )
        }
      </>
  )
}

export default EmployeeList;