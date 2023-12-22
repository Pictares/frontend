import { useContext } from 'react'
import s from './Auth.module.css'
import { AuthContext } from '../../../context'
import { MyButton } from '../../UI/MyButton/MyButton'

export const Auth = (props) => {
  const { isAuth, setIsAuth, authUserData } = useContext(AuthContext)

  const onLogout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className={s.auth}>
      {isAuth ? (
        <div>
          {authUserData.username} <MyButton onClick={onLogout}>Logout</MyButton>
        </div>
      ) : (
        <MyButton>Login</MyButton>
      )}
    </div>
  )
}
