import React from 'react';
import { connect } from 'react-redux';


// class _Login extends React.Component{
//   constructor(){
//     super();
//   }
//    async logout(){
//      await
//    }

// }


const _Login = ({ auth }) =>
  <div>
    Home - welcome
    <button >Logout</button>
  </div>;




const Login = connect()(_Login);


// ({ auth }) => {
//   return {
//     auth
//   };
// },
export default Login;
