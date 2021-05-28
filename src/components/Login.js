import React from 'react';
import Input from './Input';
import Button from './Button';

function Login({email, password, handleChange, handleOpeSubmit}) {
  return (
    <div>
      <form onSubmit = {handleOpeSubmit}>
          <Input type="text" name="email" value={email} label="Email" handleChange={handleChange} />
          <Input type="password" name="password" value={password} label="Password" handleChange={handleChange} />
          <center>
            <Button name = "Login" className="login-btn" type= "submit" />
          </center>

    </form>
    </div>
  );
}

export default Login;
