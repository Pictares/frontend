import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { PostList } from '../../components/PostList/PostList'
import s from './Posts.module.css'
import { CreatePostForm } from '../../components/CreatePostForm/CreatePostForm'
import { Modal } from '../../components/UI/Modal/Modal'
import { MyButton } from '../../components/UI/MyButton/MyButton'
import { UpdatePostForm } from '../../components/UpdatePostForm/UpdatePostForm'

export const Posts = (props) => {
  const { authUserData, isAuth } = useContext(AuthContext)
  const [posts, setPosts] = useState([])
  const [createPostModal, setCreatePostModal] = useState(false)
  const [updatePostModal, setUpdatePostModal] = useState(false)
  const [editablePost, setEditablePost] = useState({
    id: '',
    title: '',
    body: '',
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = () => {
    axios.get('http://asrhgr9h.beget.tech/api/posts').then((res) => {
      setPosts(res.data.posts)
    })
  }

  if (!isAuth) return <Navigate to="/login" />

  return (
    <div className={s.posts}>
      <h1>Post list</h1>
      <hr />
      <MyButton onClick={() => setCreatePostModal(true)}>Create post</MyButton>
      <Modal
        visible={createPostModal}
        title="Create post"
        setVisible={setCreatePostModal}
      >
        <CreatePostForm
          posts={posts}
          setPosts={setPosts}
          token={authUserData.token}
          setVisible={setCreatePostModal}
        />
      </Modal>
      <Modal
        visible={updatePostModal}
        setVisible={setUpdatePostModal}
        title="Update post"
      >
        <UpdatePostForm
          posts={posts}
          post={editablePost}
          setEditablePost={setEditablePost}
          setPosts={setPosts}
          setUpdatePostModal={setUpdatePostModal}
        />
      </Modal>
      <PostList
        posts={posts}
        setPosts={setPosts}
        setEditablePost={setEditablePost}
        setUpdatePostModal={setUpdatePostModal}
      />
    </div>
  )
}
