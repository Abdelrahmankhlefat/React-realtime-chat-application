import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import Add from './img/addAvatar.png'
import { auth } from '../firebase'

const Login = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (err) {
      setErr(true)
    }
  }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <h1>AK chat</h1>
        <p>Login</p>
        <form action='' onSubmit={handleSubmit}>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <button>Sign in</button>
          {err && (
            <span style={{ color: 'tomato', textAlign: 'center' }}>
              Something went wrong{' '}
            </span>
          )}

          <p>
            You don't have an account ? <Link to='/register'>Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
