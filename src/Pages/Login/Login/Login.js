import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
const Login = () => {
  const {googleLogin} = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectUri = location.state?.from || '/home';
  const handleGoogle = () =>{
    googleLogin()
    .then(result => {
     history.push(redirectUri);
  })
  }
    return (
            <div class="container login-area">
              <section class="mx-auto my-5">
                <div class="card card-form mt-2 mb-4">
                  <div class="card-body rounded-top pink darken-4 p-4">
                    <h3 class="font-weight-bold text-center text-uppercase text-white my-4">Welcome To Travelo</h3>
                  </div>
                  <div class="card card-form-2 mb-0 z-depth-0">
                    <div class="card-body">
                      <form class="text-center">
                        <div class="form-check red-checkbox my-3">
                          <h4>Please login with Google</h4>
                        </div>
                        <button onClick={handleGoogle} type="button" class="btn btn-outline-danger btn-rounded btn-block my-4 z-depth-0"
                          >Login with <i class="fab fa-lg fa-google  px-2"></i></button>
                        <hr/>
                        <p>By clicking
                          <em> Login,</em> you agree to our 
                            <a class="pink-accent-text" href="#!" target="_blank"> terms of service</a> and
                            <a class="pink-accent-text" href="#!" target="_blank"> conditions</a>. </p>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
          </div>
    );
};

export default Login;