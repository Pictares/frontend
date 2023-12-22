import { useRef, useState } from 'react'
import { MyButton } from '../UI/MyButton/MyButton'
import { MyInput } from '../UI/MyInput/MyInput'
import s from './CreatePostForm.module.css'
import axios from 'axios'

export const CreatePostForm = ({ setPosts, token, posts, setVisible }) => {
  const [post, setPost] = useState({ title: '', body: '' })
  // для хранения загруженного файла
  const [file, setFile] = useState('')

  const el = useRef() // для доступа к инпуту

  const handleChange = (e) => {
    const file = e.target.files[0] // доступ к файлу
    setFile(file) // сохранение файла
  }

  const onAddPost = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('image', file) // добавление файла
    formData.append('title', post.title)
    formData.append('body', post.body)

    axios
      .post('http://asrhgr9h.beget.tech/api/posts', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPosts([...posts, res.data.newPost])
        setPost({ title: '', body: '' })
        setVisible(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form className={s.createPostForm}>
      <div>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Title"
        />
      </div>
      <div>
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          placeholder="Content"
        />
      </div>
      <input type="file" ref={el} onChange={handleChange} />
      <MyButton onClick={onAddPost}>Add post</MyButton>
    </form>
  )
}
