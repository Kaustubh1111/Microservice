import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
//import EmpListing from './EmpListing';

const EmpDetails = () => {

    // const { empId } = useParams();

    // const [empData, empDataChange] = useState({});

    // useEffect(() => {
    //     console.log(empId);
    //     fetch("http://localhost:5000/employee/"+empId).then((res) => {
    //         return res.json();
    //     }).then((resp) => {
    //         empDataChange(resp);
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })

    // }, []);

    const { empId } = useParams();

    const [empData, empDataChange] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:5000/employee/" + empId);
            const json = await response.json();
            empDataChange(json);
        }
        fetchData();
    }, []);

    return (
        <div className="card-body">
            <Link className="btn btn-danger my-2 mx-3" to="/">Back</Link>
            { empData &&
                <div>
            
                    <h1>Employee name: {empData.name}</h1>
                    <h1>Employee Email: {empData.email} </h1>
            
                </div>
            }
        </div>
        
    )
}

export default EmpDetails
