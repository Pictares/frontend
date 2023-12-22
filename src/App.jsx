import { Route, Routes } from 'react-router-dom'
import s from './App.module.css'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Registration } from './pages/Registration/Registration'
import { Posts } from './pages/Posts/Posts'
import { Admin } from './pages/Admin/Admin'
import { Error } from './pages/Error/Error'
import { useEffect, useState } from 'react'
import { AuthContext } from './context'
import { AuthSucces } from './pages/AuthSuccess/AuthSuccess'
import { PostIdPage } from './pages/PostIdPage/PostIdPage'
import FileUpload from './pages/UploadFiles/UploadFiles'

export const App = (props) => {
  const [authUserData, setAuthUserData] = useState({
    username: '',
    role: '',
    token: '',
  })
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      const authData = JSON.parse(localStorage.getItem('auth'))
      setAuthUserData(authData)
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        authUserData,
        isAuth,
        setAuthUserData,
        setIsAuth,
      }}
    >
      <div className={s.app}>
        <Header />
        <Sidebar />
        <div className={s.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/auth_success" element={<AuthSucces />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostIdPage />} />
            <Route path="/uploadFiles" element={<FileUpload />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </AuthContext.Provider>
  )
}
