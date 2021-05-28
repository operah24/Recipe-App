import React from 'react';
import Input from './Input';
import Button from './Button';

function Form({name, email, password, handleChange,handleSubmit}) {
  return (
    <form onSubmit = {handleSubmit}>
          <Input type="text" name="name" value={name} label="Name" handleChange={handleChange} />
          <Input type="email" name="email" value={email} label="Email" handleChange={handleChange} />
          <Input type="password" name="password" value={password} label="Password" handleChange={handleChange} />
          <center>
            <Button name="Signup" className="register-btn" type="submit"/>
          </center>

    </form>
  );
}

export default Form;
