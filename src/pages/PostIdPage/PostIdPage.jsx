import { useParams } from 'react-router-dom'
import s from './PostIdPage.module.css'

export const PostIdPage = (props) => {
  const { id } = useParams()

  return (
    <div className={s.postIdPage}>
      <h1>Post with id: {id}</h1>
    </div>
  )
}
