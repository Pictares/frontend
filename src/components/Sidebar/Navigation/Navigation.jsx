import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'

export const Navigation = (props) => {
  return (
    <div className={s.navigation}>
      <div>
        <NavLink className={s.item} to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink className={s.item} to="/login">
          Login
        </NavLink>
      </div>
      <div>
        <NavLink className={s.item} to="/registration">
          Registration
        </NavLink>
      </div>
      <div>
        <NavLink className={s.item} to="/posts">
          Posts
        </NavLink>
      </div>
      <div>
        <NavLink className={s.item} to="/admin">
          Admin panel
        </NavLink>
      </div>
    </div>
  )
}
