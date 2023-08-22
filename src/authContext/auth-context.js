import React from 'react';

const AuthContext = React.createContext({
    token : '',
    email : '',
    emailStore : (email)=>{},
    isLoggedIn: false,
    login : (token)=>{},
    logout : ()=>{}
})
export default AuthContext;