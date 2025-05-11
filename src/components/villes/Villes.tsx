
import React, { Component, useRef, useEffect, Fragment } from 'react'
import VillesTemplate from './VillesTemplate/VillesTemplate'
import './Villes.css'
import * as api from '../../../api_client/api_client';

// import abidjan from '../../Assets/Abidjan1.jpg'
// import yamoussoukro from '../../Assets/yamoussoukro.jpeg'
// import bouake from '../../Assets/bouake.jpeg'
// import daloa from '../../Assets/daloa.jpeg'
// import sanspedro from '../../Assets/sans pedro.jpeg'
// import korhogo from '../../Assets/korhogo.jpeg'
// import aboisso from '../../Assets/Aboisso.jpg'
// import gagnoa from '../../Assets/gagnoa.jpeg'

export default class Villes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listvilles: []
    }

  }

  componentDidMount() {
    var token = localStorage.getItem("token")
    var listvilles = api.getVilles(token)
    listvilles.then(response => this.setState({ listvilles: response }))
    console.log(listvilles);
  }



  render() {
    return (
      <div id='anchor_ville'>
      <div className='pt-5' >
        <h1 className='h1'> Nos services</h1>
        <div className="album py-5">
          <div className="container">
            <div className="m-auto p-2">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 g-3">
                {
                  this.state.listvilles.length > 0 ? (
                    this.state.listvilles.map((ville) => {
                      // console.log(ville);

                      return <VillesTemplate key={ville.id} >{ville}</VillesTemplate>
                    })
                  ) : (
                    <p>Pas encore de villes...</p>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )

  }
}