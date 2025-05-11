import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ModalPaiement() {

    // const navigate = useNavigate()
    // const [DateTime, setDateTime] = useState('');
    // const [number, setNumber] = useState('');
    // const location = useLocation();

    // Accès à l'URL actuelle
    // const currentUrl = location.pathname;
    // Extraire l'ID de l'URL
    // const villeId = currentUrl.split('/')[2];

    // setsate(state)
    const handleSubmit = () => {
    //     e.preventDefault();
    //     var datetime = document.querySelector("#ModalDateHeure2").querySelector("#datetime").value;
    //     var number = document.querySelector("#ModalDateHeure2").querySelector("#number").value;
    //     var dataService = localStorage.getItem("dataservice");

    //     console.log("datetime",datetime);
    //     console.log("number",number);
        
    //     const datetimeformat = new Date(datetime + 'T00:00:00.000Z').toISOString();
    //     console.log(datetimeformat);
    //     // setsate(sates)
    //     // console.log("Date et heure sélectionnées :", DateTime + sate);
    //     var json = {};
    //     json.DateTime = datetimeformat;
    //     // json.idService = idService;
    //     json.villeId = villeId;
    //     json.dataReservation = JSON.parse(dataService);
    //     json.nbreTotal = number;

    //     var token = localStorage.getItem("token")
    //     console.log(token);
    //     console.log(json, 'js');


    //     // requête pour sauvegarder la date dans la base de données
    //     fetch('http://localhost:3000/reservation/', {
    //         method: 'POST',
    //         body: JSON.stringify(json),
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //             'Content-Type': 'application/json'
    //         },
    //     }).then(response => response.json())
    //         .then((data) => {
    //             window.location.reload();
    //             if (data.statusCode == '401') {

    //                 window.alert("Vous n'êtes pas auorisé à reserver: Veuillez-vous inscrire!")
    //                 navigate(`/Inscription`);
    //             }
    //         })
    //         .catch(error => console.error('Erreur lors de la reservation de service:', error));

    };

    return (
        <div>
            {/* <!-- Modal --> */}
            <div className="modal fade " id="welcomeModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">   
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Definir l'heure et la date</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-md-7 col-lg-8 d-flex ">

                                <input
                                    type="date"
                                    id="datetime"
                                    className='input-modal-heure'
                                    // onChange={(e) => setDateTime(e.target.value)}
                                />
                                <input
                                    type="number"
                                    name='nbreTotal'
                                    id="number"
                                    className='input-number'
                                    min="0"
                                    // onChange={(e) => setNumber(e.target.value)}
                                />


                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={()=>handleSubmit()}>Confirmer reservation</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            {/* <button type="button" className="btn btn-primary">Understood</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
