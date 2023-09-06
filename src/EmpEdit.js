import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {

    const { empid } = useParams();
    const [id, idChange] = useState("");
    const [name, nameChange] = useState("");
    const [email, emailChange] = useState("");
    const [validation, setValidation] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idChange(resp.id);
            nameChange(resp.name);
            emailChange(resp.email);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const empdata = { id, name, email };


        fetch("http://localhost:5000/employee/" + empid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card">
                            <div className="card-title">
                                <h2>Create Employee</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input value={name} required onMouseDown={e => setValidation(true)} onChange={e => nameChange(e.target.value)} type="text" className="form-control" />
                                            {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div></div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e => emailChange(e.target.value)} type="email" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="btn btn-success my-2 mx-3" type="submit" name="Save" />
                                            <Link className="btn btn-danger my-2 mx-3" to="/">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default EmpEdit
