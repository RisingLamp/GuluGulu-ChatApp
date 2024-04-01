import React from 'react'

const login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Gulu Gulu </span>
        <span className="title">login</span>
       <form>
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <button>Sign In</button>
         
        </form>
        <p>
          You don't have an account? Register
        </p>
      </div>
    </div>
  );
};

export default login;
