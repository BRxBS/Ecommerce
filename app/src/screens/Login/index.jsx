import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import './styles.scss'
import subscribe from './inscreva-se.png'


export function Login() {
  return (
    <>
      <Header />
      <div className="loging_conatiner">
        <img src={subscribe} alt="" />
        
      
        <form className="form_login">
          <h2>Login</h2>
          <labe className="text-2xl">Email</labe>
          <br />
          <input
            className="email_pass"
            type="email"
            placeholder="Email"
          /> 
          <br />
          <label>Password</label>
          <br />
          <input
            className="email_pass"
            type="password"
            placeholder="Password"
          /> 
          <br />
          <div className="options_wrapper">
            <div>
              <input
                type="checkbox"
                id="logCheck"
          
              />
              <label htmlFor="logCheck" className="text-sm cursor-pointer ">
                Remember Me
              </label>
            </div>
            <a href="#">
              Forgot Password?
            </a>
          </div>
          <br />
          <button
            type="submit"
          >
            Login
          </button>
          <br />
          <div className="register">
            <span>
              Not a Member? {" "}
              <Link className="link" to={"/register"}>
                Create Account
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
