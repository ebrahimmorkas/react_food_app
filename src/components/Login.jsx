import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    const [login, setlogin] = useState({ email: "", password: "" })

    const loginHandler = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
        })

        

        const json = await response.json()
        if (json.success) {
            // console.log("Success is true")
            navigate('/');
        }
        else {
            // console.log("Success is false");
            navigate('/login');
            setlogin({ email: "", password: "" })
        }
    }

    const onchange = (event) => {
        setlogin({ ...login, [event.target.name]: event.target.value })
    }
    return (
        <div>
            <form onSubmit={loginHandler}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={login.email} onChange={onchange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={login.password} onChange={onchange} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <Link to="/signup">Create Account</Link>
        </div>
    )
}
