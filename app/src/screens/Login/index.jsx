import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import './styles.scss'
import subscribe from './inscreva-se.png'


export function Login() {
  return (
    <>
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
          <label>Senha</label>
          <br />
          <input
            className="email_pass"
            type="password"
            placeholder="Senha"
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
          <button
            type="submit"
          >
            Entrar
          </button>
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
