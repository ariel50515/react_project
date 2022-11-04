import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ auth, setAuth }) {
  const navigate = useNavigate()

  return (
    <>
      <div>Login</div>
      <button
        onClick={() => {
          const newAuth = !auth

          setAuth(newAuth)

          // 呈現歡迎訊息
          alert(newAuth ? 'xxx，歡迎!!' : '再見！')

          // 連至關於我們頁面(about)
          navigate('/about')
        }}
      >
        {auth ? '登出~~' : '登入!'}
      </button>
    </>
  )
}

export default Login