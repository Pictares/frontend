import { useContext } from 'react'
import s from './Admin.module.css'
import { AuthContext } from '../../context'
import { Navigate } from 'react-router-dom'

export const Admin = (props) => {
  const { isAuth, authUserData } = useContext(AuthContext)
  if (!isAuth) return <Navigate to="/login" />
  if (authUserData.role !== 'admin') return <Navigate to="/" />

  return (
    <div className={s.admin}>
      <h1>Admin panel</h1>
    </div>
  )
}
