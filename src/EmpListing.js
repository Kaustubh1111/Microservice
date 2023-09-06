import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes,Link, useNavigate } from 'react-router-dom';
const EmpListing = () => {

    const [empData, empDataChange] = useState(null);
    const navigate = useNavigate();


    const LoadDetail = (id) => {
        navigate("/employee/" + id);
    }

    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }

    const removeFunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:5000/employee/" + id, {
                method: "DELETE"
            }).then((res) => {
                //alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:5000/employee");
            const json = await response.json();
            empDataChange(json);
        }
        fetchData();

    }, []);
    
    // useEffect(() => {
    //     fetch("http://localhost:5000/employee").then((res) => {
    //         return res.json();
    //     }).then((resp) => {
    //         empDataChange(resp);
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })
    // }, [])

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employees Listing</h2>
                </div>
                <div className="card-body">

                    <div>
                        <Link to="/employee/create" className="btn btn-success mx-2">Add New </Link>
                    </div>

                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {   empData &&
                                empData.map(item => (
                                    <tr key={item.id}>
                                        <td>{ item.id }</td>
                                        <td>{ item.name }</td>
                                        <td>{ item.email }</td>
                                        <td>
                                            <a onClick={ ()=>{LoadEdit(item.id)}}  className="btn btn-success mx-3">Edit</a>
                                            <a onClick={ ()=>{removeFunction(item.id)}} className="btn btn-danger mx-3">Remove</a>
                                            <a onClick={ ()=>{LoadDetail(item.id)}} className="btn btn-primary mx-3">Details</a>
 
                                            {/* <Link className="btn btn-success mx-3" to={ `/employee/detail/${item.id}`}>Dtls </Link> */}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmpListing
