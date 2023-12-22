import s from './Modal.module.css'

export const Modal = ({ title, children, visible, setVisible }) => {
  const rootCasses = [s.modal]
  if (visible) {
    rootCasses.push(s.active)
  }

  return (
    <div onClick={() => setVisible(false)} className={rootCasses.join(' ')}>
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className={s.modalContent}
      >
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}
