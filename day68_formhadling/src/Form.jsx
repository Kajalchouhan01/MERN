import React, { useState } from 'react'
useState

const Form = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [profile,setProfile] = useState("");

    const submitHandler =(e) =>{
        e.preventDefault();
        alert("your form has been subited"+name+email+password+profile);
        setEmail("");
        setName("");
        setPassword("");
        setProfile("");
    };
   
    return (
        <div>
            <div className="container my-5 bg-black text-light p-3" style={{ width: '650px', borderRadius: '10px', border: '2px solid blue' }}>
                <h1 className='text-center'>Register user</h1>
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control bg-black text-light" />

                    </div>
                   
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-light">Email address</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control bg-black text-light" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control bg-black text-light" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-light">Profile</label>
                        <input value={profile} onChange={(e)=>setProfile(e.target.value)} type="file" className="form-control bg-black text-light" />
                    </div>
                    <div className="d-grid col-6 mx-auto mt-5">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form