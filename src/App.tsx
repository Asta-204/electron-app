// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Main from './vues/Mainpage1';
import Layout from './vues/Layout.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Auth from './vues/Auth';
import AuthLogin from './vues/AuthLogin';
import Login from './components/LogIn.tsx';
import SignIn from './components/SignIn.tsx';
import SchoolInfos from './components/SchoolInfos.tsx';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<SignIn />}>
            </Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="infos" element={<SchoolInfos />}></Route>
          <Route element={<Layout />}>
              <Route path="auth" element={<Auth />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
