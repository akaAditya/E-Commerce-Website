import React, {useState} from 'react'
import AuthContext from './auth-context'

const AuthProvider = (props) => {
    const initialTokenLocalStorage = localStorage.getItem('token')
    const initialEmailLocalStorage = localStorage.getItem('email')
    const [token, setToken] = useState(initialTokenLocalStorage);
    const [email, setEmail] = useState(initialEmailLocalStorage);
    const userIsLoggedIn = !!token

    const loginHandler =(token)=>{
        setToken(token)
        localStorage.setItem('token', token)
    }
    const logoutHandler = ()=>{
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('email')
    }
    const emailHandler = (email) => {
        setEmail(email)
        localStorage.setItem('email', email)
    }

    const authContext = {
        token : token,
        email : email,
        emailStore : emailHandler,
        isLoggedIn : userIsLoggedIn,
        login : loginHandler,
        logout : logoutHandler
    }

  return (
    <AuthContext.Provider value={authContext}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider