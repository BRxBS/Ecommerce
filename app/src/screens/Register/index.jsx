import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { CheckCircle, Info, XCircle } from "phosphor-react";
import { Login } from "../Login";
import axios from "axios";

const USER_REGEX = /^[a-zA-Z][a-zA-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const url = "http://localhost:8000/users";

export function Register() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPdw] = useState(false);
  const [PwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValiMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPdw(result);
    const match = pwd === matchPwd;
    setValiMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, email, pwd, matchPwd]);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };
  async function handleSubmit() {
    const postData = {
      username: user,
      email: email,
      password: pwd,
    };

    try {
      const response = await axios.post(
        url,
        postData
        //  JSON.stringify({username:user, email:email, password: pwd}),
        // {

        //     headers: {'Contetent-Type' : 'application/json'},
        //     withCredentials:true

        // }
      );

      const result = {
        status: response.status,
        data: response.data,
      };

      fortmatResponse(result);

      console.log(response.data);
      console.log(JSON.stringify(response));
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("User Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  }

  return (
    <>
      <Header />
      {success ? (
        <p>
          {" "}
          congrets
          <Login />
        </p>
      ) : (
        <div className="block relative w-[28rem] max-h-[40rem] h-[38rem] m-auto mt-2 border-8 border-black p-2 text-2xl rounded">
          <p
            ref={errRef}
            className={errMsg ? "border border-black" : "hidden"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <p className="text-4xl font-bold m-2">Login</p>
          <hr />
          <form onSubmit={handleSubmit} className="h-[23rem] p-10 ">
            <label htmlFor="name" className="flex items-center ">
              Name
              <span className={validName ? "" : "hidden"}>
                <CheckCircle size={20} className="m-1 mt-2" />
              </span>
              <span className={validName || !user ? "hidden" : ""}>
                <XCircle size={20} className="m-1 mt-2" />
              </span>
            </label>
            <input
              type="text"
              className="border-2 border-black p-1 w-[100%] mb-1"
              id="name"
              ref={userRef}
              autoComplete="off"
              placeholder="Username"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName
                  ? "flex p-1 text-white bg-gray-600 text-sm rounded-md"
                  : "hidden"
              }
            >
              <Info size={16} className="m-[0.15rem]" /> 4 to 24 characters.{" "}
              <br />
              Must begin with a letter. <br />
              Letters, numbers, underscores, hyphen allowed.
            </p>

            <label htmlFor="email" className="flex">
              Email
              <span className={validEmail ? "" : "hidden"}>
                <CheckCircle size={20} className="m-1 mt-2" />
              </span>
              <span className={validEmail || !email ? "hidden" : ""}>
                <XCircle size={20} className="m-1 mt-2" />
              </span>
            </label>
            <input
              type="email"
              className="border-2 border-black p-1 w-[100%]  mb-1"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnoteEmail"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p
              id="uidnoteEmail"
              className={
                emailFocus && email && !validEmail
                  ? "flex p-1 text-white bg-gray-600 text-sm rounded-md"
                  : "hidden"
              }
            >
              <Info size={16} className="m-[0.15rem]" />
              Must have @. <br />
              Letters, numbers, underscores, hyphen allowed.
            </p>

            <label htmlFor="password" className="flex">
              Create Password
              <span className={validPwd ? "" : "hidden"}>
                <CheckCircle size={20} className="m-1 mt-2" />
              </span>
              <span className={validPwd || !pwd ? "hidden" : ""}>
                <XCircle size={20} className="m-1 mt-2" />
              </span>
            </label>
            <input
              type="password"
              className="border-2 border-black p-1 w-[100%]  mb-1"
              id="password"
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={
                PwdFocus && pwd && !validPwd
                  ? "flex p-1 text-white bg-gray-600 text-sm rounded-md"
                  : "hidden"
              }
            >
              <Info size={16} className="m-[0.15rem]" />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase, a number and a special
              character. <br />
              Allowes special characters:
              <span aria-label="exclamation marks">!</span>
              <span aria-label="at symbol">@</span>
              <span aria-label="hastag">#</span>
              <span aria-label="dollar sign">$</span>
              <span aria-label="percent">%</span>
            </p>

            <label htmlFor="confirm_pwd" className="flex">
              Email
              <span className={validMatch && matchPwd ? "" : "hidden"}>
                <CheckCircle size={20} className="m-1 mt-2" />
              </span>
              <span className={validMatch || !matchPwd ? "hidden" : ""}>
                <XCircle size={20} className="m-1 mt-2" />
              </span>
            </label>
            <input
              type="password"
              className="border-2 border-black p-1 w-[100%]  mb-1"
              id="confirm_pwd"
              placeholder="Confirm Password"
              onChange={(e) => setMatchPwd(e.target.value)}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch
                  ? "flex p-1 text-white bg-gray-600 text-sm rounded-md"
                  : "hidden"
              }
            >
              <Info size={16} className="m-[0.15rem]" /> Must match the first
              password input filed.
            </p>

            <button
              disabled={
                !validName || !validEmail || !validPwd || !validMatch
                  ? true
                  : false
              }
              className="border relative top-5 left-24 w-32 h-10 border-black bg-black rounded text-white "
              type="submit"
            >
              Register
            </button>
          </form>
          <p className="absolute bottom-3 right-5">
            <Link to={"/login"}>
              I Have Account <strong className="underline">Login</strong>
            </Link>
          </p>
        </div>
      )}
    </>
  );
}
