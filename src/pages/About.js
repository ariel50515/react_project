import React from 'react'

function About({ auth }) {
  return (
    <>
      <div>About</div>
      {auth ? '會員已登入' : '未登入'}
    </>
  )
}

export default About