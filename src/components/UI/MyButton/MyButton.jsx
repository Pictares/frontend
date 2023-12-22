import s from './MyButton.module.css'

export const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={s.button}>
      {children}
    </button>
  )
}
