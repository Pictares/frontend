import s from './MyForm.module.css'

export const MyForm = ({ children, ...props }) => {
  return <form className={s.form}>{children}</form>
}
