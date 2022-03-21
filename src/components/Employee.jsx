import React, {useState, useEffect} from 'react';
import EmployeeInput from './EmployeeInput';
import EmployeeList from './EmployeeList';

const Employee = () => {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [dept, setDept] = useState('');
    const [role, setRole] = useState('');
    const [sal, setSal] = useState('');
    const [data, setData] = useState([]);

    const handleChange1 = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
    }

    const handleChange2 = (e) => {
        // console.log(e.target.value);
        setGender(e.target.value);
    }

    const handleChange3 = (e) => {
        // console.log(e.target.value);
        setDept(e.target.value);
    }

    const handleChange4 = (e) => {
        // console.log(e.target.value);
        setRole(e.target.value);
    }

    const handleChange5 = (e) => {
        // console.log(e.target.value);
        setSal(e.target.value);
    }

    //------------------------------------------------------------------------------

    const postData = async () => {
        let payload = {
            name : name,
            gender : gender,
            dept : dept,
            role : role,
            salary : sal
        };
        try {
            let res1 = await fetch(`http://localhost:3004/data`, {
                method : "POST",
                body : JSON.stringify(payload),
                headers : {"Content-Type" : "application/json"}
            })
            getData();
        } catch (error) {
            console.log(error);
        }
    }

    const getData = async () => {
        let data = await fetch(`http://localhost:3004/data`);
        data = await data.json();
        console.log(data)
        setData(data);
    }

    useEffect(() => {
        getData();
    }, []);

    //------------------------------------------------------------------------------

    const AllDept = () => {
        getData();
    }

    const Marketing = () => {
        let item = data.filter((emp) => emp.dept == "Marketing");
        console.log(item)
        setData(item);
    }

    const HR = () => {
        let item = data.filter((emp) => emp.dept == "HR");
        console.log(item)
        setData(item);
    }

    const IT = () => {
        let item = data.filter((emp) => emp.dept == "IT");
        console.log(item)
        setData(item);
    }

    const Finance = () => {
        let item = data.filter((emp) => emp.dept == "Finance");
        console.log(item)
        setData(item);
    }

    const Ascending = () => {
        let item = data.sort((a,b) => a.salary - b.salary)
        console.log(item);
        setData(item);
    }

    const Descending = () => {
        let item = data.sort((a,b) => b.salary - a.salary)
        console.log(item);
        setData(item);
    }

  return (
    <>
        <EmployeeInput handleChange1={handleChange1} handleChange2={handleChange2} handleChange3={handleChange3} handleChange4={handleChange4} handleChange5={handleChange5} postData={postData} AllDept={AllDept} Marketing = {Marketing} HR={HR} IT={IT} Finance = {Finance} Ascending={Ascending} Descending={Descending}/>

        <EmployeeList data={data}/>
    </>
  )
}

export default Employee;