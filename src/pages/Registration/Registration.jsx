import { useContext, useState } from 'react'
import s from './Registration.module.css'
import { AuthContext } from '../../context'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { MyInput } from '../../components/UI/MyInput/MyInput'
import { MyButton } from '../../components/UI/MyButton/MyButton'
import { MyForm } from '../../components/UI/MyForm/MyForm'

export const Registration = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { isAuth } = useContext(AuthContext)
  const router = useNavigate()
  if (isAuth) return <Navigate to="/" />

  const onRegistration = (e) => {
    e.preventDefault()
    axios
      .post('http://asrhgr9h.beget.tech/api/registration', {
        username,
        password,
      })
      .then((res) => {
        // console.log(res)
        router('/auth_success')
      })
      .catch((err) => {
        // express error
        console.log(err.response.data.message)
        setError(err.response.data.message)
        // db error
        console.log(err.response.data.error)
      })
  }

  return (
    <div className={s.registration}>
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
        <MyButton onClick={onRegistration}>Registration</MyButton>
        <div>{error && error}</div>
      </MyForm>
    </div>
  )
}
