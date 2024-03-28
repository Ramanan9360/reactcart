import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate();
  const handleSubmit=()=>{
      navigate('/');
  }
  return (
    <div className='mb-5 mt-2'>
      <h2>Login</h2>
      <form className='m-auto w-25'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label float-start">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label float-start">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <Link to='/register'>New User?</Link>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </div>
  )
}

export default Login