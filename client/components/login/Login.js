import React from 'react';
import { connect } from 'react-redux';

const _Login = ({ auth }) =>
  <div>
    Home - welcome { auth.username }
    <button onClick={ logout }>Logout</button>
  </div>;

const Login = connect(({ auth }) => {
  return {
    auth
  };
})(_Login);

export default Login;
