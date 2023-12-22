import { useContext } from 'react'
import s from './Home.module.css'
import { AuthContext } from '../../context'
import { Navigate } from 'react-router-dom'

export const Home = (props) => {
  const { isAuth } = useContext(AuthContext)
  if (!isAuth) return <Navigate to="/login" />

  return (
    <div className={s.home}>
      <h1>Home</h1>
    </div>
  )
}
