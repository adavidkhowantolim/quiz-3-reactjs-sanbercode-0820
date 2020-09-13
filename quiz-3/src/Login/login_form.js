import React, {useContext} from "react"
import {LoginContext} from "./login_context"

const LoginForm = () =>{
  const [tempUser, setTempUser]= useContext(LoginContext);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    setTempUser({...tempUser, isLoggedIn: true});

    window.sessionStorage.setItem("isUserLogged", true);
    // change state and keep in session storage
  }

  return (
    <form className="form_edit" onSubmit={handleSubmit} id="editForm">
      <table className="table_form">
        <tr>
          <td><label className="label">Username:  </label></td>
          <td><input type="text" value={tempUser.username} onChange={e => setTempUser({...tempUser,username:e.target.value})}></input></td>
        </tr>
        <tr>
          <td><label className="label">Password: </label></td>
          <td><input type="password" value={tempUser.password} onChange={e => setTempUser({...tempUser,password:e.target.value})}></input></td>
        </tr>
      </table>
      <input type="submit"></input>
    </form>
  )
}

export default LoginForm