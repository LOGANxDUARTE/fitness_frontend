import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

import { registerUser, loginUser } from '../api';

const LoginRegister = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  return (
    <div id="forms">
      <h1
          style={{
          textAlign: 'center',
          }}>Login/Register</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          margin: '5px'
        }}
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            await loginUser(username, password);

            history.push("/");
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <div className="form-group"
                  style={{
                    margin: '5px',
                  }}>
          <h3>Login</h3>
          <label htmlFor="loginInputUsername"></label>
          <input
            type="text"
            id="loginInputUsername"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group"
                  style={{
                    margin: '5px',
                  }}>
          <label htmlFor="loginInputPassword"></label>
          <input
            type="password"
            id="loginInputPassword"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Button 
          outline color="secondary"
          style={{
            width: '25%',
            margin: '5px',
          }}>Login</Button>{' '}
      </form>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          margin: '5px'
        }}
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            await registerUser(username, password);

            history.push("/");
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <div className="form-group"
                  style={{
                    margin: '5px',
                  }}>
          <h3> New User / Register</h3>
          <label htmlFor="registerInputUsername"></label>
          <input
            type="text"
            id="registerInputUsername"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group"
                  style={{
                    margin: '5px',
                  }}>
          <label htmlFor="registerInputPassword"></label>
          <input
            type="password"
            id="registerInputPassword"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Button 
        outline color="secondary"
        style={{
          width: '25%',
          margin: '5px'
        }}>Register</Button>{' '}
      </form>
    </div>
  );
};

export default LoginRegister;