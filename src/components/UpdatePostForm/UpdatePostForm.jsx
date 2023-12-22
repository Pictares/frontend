import axios from 'axios'
import { MyButton } from '../UI/MyButton/MyButton'
import { MyInput } from '../UI/MyInput/MyInput'
import s from './UpdatePostForm.module.css'

export const UpdatePostForm = ({
  posts,
  post,
  setPosts,
  setEditablePost,
  setUpdatePostModal,
}) => {
  const onSaveChanges = (e) => {
    e.preventDefault()
    axios
      .put('http://asrhgr9h.beget.tech/api/posts', {
        id: post.id,
        title: post.title,
        body: post.body,
      })
      .then((res) => {
        const arr = posts.map((p) => {
          if (p.id == post.id) {
            return { ...p, title: post.title, body: post.body }
          }
          return p
        })
        setPosts(arr)
        setUpdatePostModal(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form className={s.updatePostForm}>
      <div>
        <MyInput
          value={post.title}
          onChange={(e) => {
            setEditablePost({ ...post, title: e.target.value })
          }}
        />
      </div>
      <div>
        <MyInput
          value={post.body}
          onChange={(e) => {
            setEditablePost({ ...post, body: e.target.value })
          }}
        />
      </div>
      <MyButton onClick={onSaveChanges}>Save changes</MyButton>
    </form>
  )
}
