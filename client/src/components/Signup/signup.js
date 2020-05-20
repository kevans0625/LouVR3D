import React from 'react';

const Signup = () => {



    return (
        <div>
          <div className="container">
           <div className="row">
         <div className="col-md-6 col-md-offset-3">
        <h2>Sign Up Form</h2>
        <form className="signup">
          <div className="form-group">
            <label htmlFor="Email">Email address</label>
            <input type="email" className="form-control" id="email-input" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="password" className="form-control" id="password-input" placeholder="Password"/>
          </div>
          <div  id="alert" className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span className="sr-only">Error:</span> <span className="msg"></span>
          </div>
          <button type="submit" className="btn btn-default">Sign Up</button>
        </form>
        <br />
        <p>Or log in <a href="/login">here</a></p>
      </div>
      </div>
      </div>
      </div>
   
    )
}

export default Signup;