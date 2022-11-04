import React from 'react'
import { useAuth } from '../utils/useAuth'

function LoginButton() {
  const { auth, setAuth } = useAuth()

  return (
    <button
      class="btn btn-outline-success"
      type="button"
      onClick={() => {
        const newAuth = !auth

        setAuth(newAuth)

        // 呈現歡迎訊息
        alert(newAuth ? 'xxx，歡迎!!' : '再見！')
      }}
    >
      {auth ? '登出~~' : '登入!'}
    </button>
  )
}

export default LoginButton