import { Auth } from './Auth/Auth'
import s from './Header.module.css'
import image from '../../img/logo.png'
import { NavLink } from 'react-router-dom'

export const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <NavLink to="/">
          <img src={image} alt="img" />
        </NavLink>
      </div>
      <Auth />
    </div>
  )
}
