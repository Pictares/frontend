import { Navigation } from './Navigation/Navigation'
import s from './Sidebar.module.css'

export const Sidebar = (props) => {
  return (
    <div className={s.sidebar}>
      <Navigation />
    </div>
  )
}
