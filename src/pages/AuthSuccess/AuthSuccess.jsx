import { NavLink } from 'react-router-dom'
import s from './AuthSuccess.module.css'

export const AuthSucces = (props) => {
  return (
    <div className={s.authSucces}>
      Registration completed successfully.
      <NavLink to="/login">Go to the login page</NavLink>
    </div>
  )
}
