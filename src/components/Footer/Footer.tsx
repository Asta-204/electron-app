// import React, { Fragment } from 'react';
// import { Link } from 'react-router';
import './Footer.css';  // Assurez-vous d'inclure ce fichier pour les styles CSS globaux
import logo from '../../assets/logo.png';
// import logo_twitter from '../Assets/X-Twitter.svg'
// import logo_instagram from '../Assets/Instagram.svg'
// import logo_facebook from '../Assets/facebook.svg'
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  return (
    <div id='anchor_footer'>
      <div className="container-fluid last-div-footer">
        <footer className="row bg-footer row-cols row-cols row-cols  py-5 my-5 border-top">
          <div className='d-flex flex-row align-items-center justify-content-center'>
            <div className="col mb-3">
              <a href="/" className="d-flex align-items-center justify-content mb-3 link-body-emphasis text-decoration-none">
                <img className='' src={logo} alt='logo' width="150" height="150" />
              </a>
            </div>



            <div className="col mb-3 text-light footer-sb-div">
              <h5>Contenu site</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><HashLink className="nav-link p-0 text-light" smooth to="/#anchor_ville">Villes</HashLink></li>
                <li className="nav-item mb-2"><HashLink className="nav-link p-0 text-light" smooth to="/#anchor_process">Processus reservation</HashLink></li>
                <li className="nav-item mb-2"><HashLink className="nav-link p-0 text-light" smooth to="/#anchor_Contact">Contact</HashLink></li>
                <li className="nav-item mb-2"><HashLink className="nav-link p-0 text-light" smooth to="/Panier#anchor_Panier">Panier</HashLink></li>
              </ul>
            </div>

            <div className="col mb-3 text-light">
              <h5>Infos</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Côte d'ivoire, ci</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">kekeli.akagbor@gmail.com</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">+225 0556273199</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">+225 0142127104</a></li>
              </ul>
            </div>
          </div>


        </footer>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4  border-top">
          <p>© 2024 kekely Corporation, Inc. Tous droits réservés.</p>
          <ul className="list-inline d-flex">
            {/* <li className="ms-3"><a className="link-body-emphasis" href="#"><img className='' src={logo_twitter} alt='' width='' height='' /></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><img className='' src={logo_instagram} alt='' width='' height='' /></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><img className='' src={logo_facebook} alt='' width='' height='' /></a></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

