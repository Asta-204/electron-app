// import "../Header/header.css"
import React, { useEffect, useState } from 'react'
import logo from '../Assets/logo.png'
import background_img from '../Assets/img-header.jpg'
import vue_drone from '../Assets/vue_drone.jpg'
import parc_exposition from '../Assets/parc_exposition.jpg'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './header.css'

function Header({ styles }) {
  // console.log(styles)
  const [count, setCount] = useState('');
  // const [tokens, settokens] = useState('');

  var token = localStorage.getItem('token');
  // settokens(token)
  const CountReservation = () => {
    fetch("http://localhost:3000/reservation/count", {
      method: 'GET',
      // body: JSON.stringify(json),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
      .then(data => {
        console.log(data, "dat");
        localStorage.setItem("count", data)
        setCount(data);

      })
  }

  useEffect(() => {
    if (token) {

      CountReservation();
    }
  }, [])

  return (

    // <!-- Navbar-->
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="d-flex flex-row container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="img-fluid" width="70px" />
            <span className='span-logo'>AKWABA <strong className='indice1'>C</strong><strong className='indice'>I</strong></span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='ms-auto d-flex'>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item me-5">
                  <HashLink className="nav-link" to="/#top">Accueil</HashLink>
                </li>
                <li className="nav-item me-5">
                  {/* <a className="nav-link" onClick={scrollerClick}>Villes</a> */}
                  <HashLink className="nav-link" smooth to="/#anchor_ville">
                    Villes
                  </HashLink>;
                  {/* <a className="nav-link" onClick={scrollerClick}>Villes</a> */}
                </li>
                <li className="nav-item me-5">
                  <HashLink className="nav-link" smooth to="/#anchor_process">
                    Processus reservation
                  </HashLink>;
                </li>
                <li className="nav-item me-5">
                  <HashLink className="nav-link" smooth to="/#anchor_Contact">
                    Contact
                  </HashLink>;
                </li>
                <li className="nav-item me-5">
                  <Link to='/Panier' className='text-decoration-none'><button type="button" className="btn btn-primary btn-primar position-relative">
                    Package {(token && token !== "undefined") ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill back-color">+{count} <span className="visually-hidden">unread messages</span></span> : null}
                  </button></Link>

                </li>

              </ul>
              {

                (token !== null && token !== undefined) ? (

                  <Link to='/profile' className="text-decoration-none text-reset"><button className="btn btn-secondary me-2" type="button">Profile</button></Link>

                ) : (
                  <>
                    <Link to='/Inscription' className="text-decoration-none text-reset"><button className="btn btn-secondary me-2" type="button">S'inscrire</button></Link>
                    <Link to='/Connexion' className="text-decoration-none text-reset"><button className="btn btn-secondary" type="button">Se connecter</button></Link>
                  </>
                )
              }
            </div>
          </div >
        </div >
      </nav >
      <div className="card text-bg-dark" style={styles}>
        {/* <img src={background_img} className="card-img-bottom baniere" alt="" ></img> */}
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">

              <img src={background_img} className="baniere" alt="" ></img>
            </div>
            <div className="carousel-item">
              <img src={vue_drone} className="baniere" alt="..."></img>
            </div>
            <div className="carousel-item">
              <img src={parc_exposition} className=" baniere" alt="..."></img>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-img-overlay">
          <h1 className="h1 text-center title">Bienvenue  en <strong className="indice1"> c</strong>ôte d'<strong className="indice">I</strong>voire : Votre voyage commence ici !</h1>
          {/* style={{color:"#36FF04"}} */}
          <h4 className=' text-center text-wrap text mt-5'>Préparez-vous pour une aventure inoubliable !</h4>
          <h4 className=' text-center text-wrap  text'>Réservez votre hébergement et véhicule en ligne et partez à la découverte des merveilles ivoiriennes.</h4>
          {/* <div className='btn-sr d-flex'>
         <button className="btn-service">Proposer un service</button>
         <button className="btn-reserver">Reserver</button>
       </div> */}
          {
            (!(token && token !== "undefined")) ? (<div className="d-flex w-100 flex-row align-items-center justify-content-center gap-3 mt-5">
              <Link to='/Inscription' state={{ value: "services" }}><button className="btn btn-primary d-inline-flex align-items-center" type="button">
                Proposer service
              </button></Link>
              <Link to='/Inscription' state={{ value: "reserver" }}><button className="btn btn-secondary d-inline-flex align-items-center" type="button">
                Reserver
              </button></Link>
            </div>) : null
          }
        </div>
      </div>
    </div >


  )
}

export default Header;
