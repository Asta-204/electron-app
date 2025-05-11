// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import MainPage from './components/Mainpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* <Route path="/Panier" element={<PanierPage />} />
            <Route path="/Villes/:id" element={<SecondPage />} />
            <Route path="/Inscription" element={<Inscription />} />
            <Route path="/Connexion" element={<Connexion />} />
            <Route path="/DashBoard" element={<DashBoardAdmin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/reçu" element={<RecuPaiement />} /> */}
          </Routes>
        </Router>
    </>
  )
}

export default App
