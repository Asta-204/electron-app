// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Main from './vues/Mainpage1';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Auth from './vues/Auth';
import AuthLogin from './vues/AuthLogin';
import Login from './vues/Login';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="auth-login" element={<AuthLogin />}>
                <Route path="login" element={<Login />}></Route>
                <Route path="auth" element={<Auth />}></Route>
              </Route>
            </Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
