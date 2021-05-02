import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { useState } from 'react';

const Login = ({signIn}) => {
  const [userName, setName] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!userName){
      alert('Please enter your username')
      return
    }
    signIn({userName, password, remember})
    setName('')
    setPassword('')
    setRemember(false)
  }
  return (

    <form className='basic' onSubmit={onSubmit}>
      <div className='form'>
        <label>UserName</label>
        <input type='text' className='text' placeholder='UserName'
        value={userName} onChange={(e) =>
        setName(e.target.value)}
        />
      </div>
      <div className="form">
        <label>Password</label>
        <input type='text' className='text' placeholder='Password'
        value={password} onChange={(e) =>
        setPassword(e.target.value)}
        />
      </div>
      <div className="form">
        <label>Remember Me</label>
        <input type='checkbox'
        checked={remember}
        value={remember} onChange={(e) =>
        setRemember(e.currenttarget.value)}
        />
      </div>
      <input type='submit' value='Sign In'
      className='btn btn-block' />
    </form> 
  );
};


export default Login;