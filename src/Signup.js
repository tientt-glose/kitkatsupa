  import React from 'react';
  import logo from './logo.svg';
  import './App.css';
  import './Signup.css';


  function SignUp() {
    return (
      <div className="App">
          <div className="signup-form">
            <form action="/examples/actions/confirmation.php" method="post">
            <h2>SignUp</h2>
            <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                <div className="form-group">
                    <input type="name" className="form-control" name="name" placeholder="name" required="required"></input>
                </div>
                <div className="form-group">
                    <input type="fullname" className="form-control" name="fullname" placeholder="fullname" required="required"></input>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" placeholder="Email" required="required"></input>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password" placeholder="Password" required="required"></input>
                </div>
                    
                <div className="form-group">
                    <input type="SDT" className="form-control" name="password" placeholder="SDT" required="required"></input>
                </div>
                  
            
            
            
            <div className="form-group">
            <button type="submit" className="btn btn-success btn-lg btn-block">SignUp Now</button>
            </div>
            </form>
          <div className="text-center">Already have an account? <a href="#">Sign in</a></div>
          </div>
      </div>
      );
  }

  export default SignUp;
