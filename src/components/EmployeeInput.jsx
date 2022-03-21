import React from 'react';
import "./EmployeeInput.css"

const EmployeeInput = ({handleChange1, handleChange2, handleChange3, handleChange4, handleChange5, postData, AllDept, Marketing, HR, IT, Finance, Ascending, Descending}) => {
  return (
    <>
        <div className="addEmp">
          <input onChange = {handleChange1} type="text" placeholder = 'Name'/>
          <input onChange = {handleChange2} type="text" placeholder = 'Gender'/>
          <input onChange = {handleChange3} type="text" placeholder = 'Department'/>
          <input onChange = {handleChange4} type="text" placeholder = 'Role'/>
          <input onChange = {handleChange5} type="text" placeholder = 'Salary'/>
          <button onClick = {postData}>ADD EMPLOYEE</button><br />
        </div>
        
        <h3>Filters</h3>
        <button onClick = {AllDept}>Show All Departments</button>
        <button onClick = {Marketing}>Show Marketing</button>
        <button onClick = {HR}>Show HR</button>
        <button onClick = {IT}>Show IT</button>
        <button onClick = {Finance}>Show Finance</button><br />
        
        <h3>Sorting</h3>
        <button onClick = {Ascending}>Sort By Salary Ascending</button>
        <button onClick = {Descending}>Sort By Salary Descending</button><br />
    </>
  )
}

export default EmployeeInput