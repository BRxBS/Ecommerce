import React, { useEffect, useState, } from "react";
import { Link } from "react-router-dom";

import './styles.scss'
import subscribe from './inscreva-se.png'



export function Login() {

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  // console.log("email", email)
  // console.log("pwd", pwd)

  const { user, userLogin } = useUser();

  console.log("user", user)

  function handleAddUser(email) {


    userLogin(email);

   console.log("email handleAddUser", email)
  };

  // useEffect(() => {
  //   setLogin(email, pwd)

  //   console.log("login after set", login)

  // },[pwd])
    

  return (
    <>
      <div className="loging_conatiner">
        <img src={subscribe} alt="" />
        
      
        <form className="form_login">
          <h2>Login</h2>
          <label className="text-2xl">Email</label>
          <br />
          <input
            className="email_pass"
            type="email"
            placeholder="Email"
            onChange={(e) => setLogin((prevstate) => ({...prevstate, email: e.target.value}))}
          /> 
          <br />
          <label>Senha</label>
          <br />
          <input
            className="email_pass"
            type="password"
            placeholder="Senha"
            onChange={(e) => setLogin((prevstate) => ({...prevstate, pwd: e.target.value}))}
          /> 
          <br />
          <div className="options_wrapper">
            <div>
              <input
                type="checkbox"
                id="logCheck"
          
              />
              <label htmlFor="logCheck" className="text-sm cursor-pointer ">
               Lembre-me
              </label>
            </div>
            <a href="#">
              Esqueceu a senha?
            </a>
          </div>
          <br />
    
        
          <input
          className="sand"
            onClick={() => handleAddUser(login)}
            type="button" 
            value="Enviar"

        />
         
  


          <br />
          <div className="register">
            <span>
              Não é membro? {" "}
              <Link className="link" to={"/register"}>
                Criar conta.
              </Link>
            </span>
          </div>
        </form>
 
      </div>
    </>
  );
}
