import { PostItem } from '../PostItem/PostItem'
import s from './PostList.module.css'

export const PostList = ({
  posts,
  setPosts,
  setEditablePost,
  setUpdatePostModal,
}) => {
  return (
    <div className={s.postList}>
      {posts.map((post, index) => (
        <PostItem
          key={post.id}
          post={post}
          posts={posts}
          setPosts={setPosts}
          setEditablePost={setEditablePost}
          setUpdatePostModal={setUpdatePostModal}
        />
      ))}
    </div>
  )
}
