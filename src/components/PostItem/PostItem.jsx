import { useNavigate } from 'react-router-dom'
import { MyButton } from '../UI/MyButton/MyButton'
import s from './PostItem.module.css'
import axios from 'axios'

export const PostItem = ({
  post,
  posts,
  setPosts,
  setEditablePost,
  setUpdatePostModal,
}) => {
  const router = useNavigate()

  const onChangePost = (postId) => {
    setEditablePost(post)
    setUpdatePostModal(true)
  }

  const onDeletePost = (postId) => {
    axios
      .delete(`http://localhost:5000/api/posts/${postId}`)
      .then((res) => {
        setPosts([...posts.filter((p) => p.id !== postId)])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className={s.postItem}>
      <div className={s.content}>
        <div className={s.image}>
          <img src={`http://localhost:5000/${post.image}`} alt="" />
        </div>
        <strong>{post.title}</strong>
      </div>
      <div className={s.btns}>
        <div>
          <MyButton onClick={() => router(`/posts/${post.id}`)}>Open</MyButton>
        </div>
        <div>
          <MyButton
            onClick={() => {
              onChangePost(post.id)
            }}
          >
            Change post
          </MyButton>
        </div>
        <div>
          <MyButton
            onClick={() => {
              onDeletePost(post.id)
            }}
          >
            Delete post
          </MyButton>
        </div>
      </div>
    </div>
  )
}
