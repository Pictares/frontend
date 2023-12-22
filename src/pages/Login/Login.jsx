import { useContext, useState } from 'react'
import s from './Login.module.css'
import { AuthContext } from '../../context'
import { NavLink, Navigate } from 'react-router-dom'
import axios from 'axios'
import { Modal, Module } from '../../components/UI/Modal/Modal'
import { MyForm } from '../../components/UI/MyForm/MyForm'
import { MyInput } from '../../components/UI/MyInput/MyInput'
import { MyButton } from '../../components/UI/MyButton/MyButton'

export const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { authUserData, setAuthUserData, isAuth, setIsAuth } =
    useContext(AuthContext)
  if (isAuth) return <Navigate to="/" />

  const onLogin = (e) => {
    e.preventDefault()
    axios
      .post('http://asrhgr9h.beget.tech/api/login', {
        username,
        password,
      })
      .then((res) => {
        // console.log(res)
        setAuthUserData(res.data)
        setIsAuth(true)
        localStorage.setItem('auth', JSON.stringify(res.data))
      })
      .catch((error) => {
        // express error
        console.log(error.response.data.message)
        setError(error.response.data.message)
        // db error
        console.log(error.response.data.error)
      })
  }

  return (
    <div className={s.login}>
      <MyForm>
        <div>
          <MyInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            type="text"
          />
        </div>
        <div>
          <MyInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>
        <MyButton onClick={onLogin}>Login</MyButton>
        <div style={{ color: 'red' }}>{error && error}</div>
      </MyForm>
      <NavLink to="/registration">Don't have account?</NavLink>
    </div>
  )
}
