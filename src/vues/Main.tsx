
import { Link } from "react-router";
export default function Main(){
    return(
        <>
            <>
                <h1>SCHOOLO</h1>
                <p>
                    SCHOOLO esst destiné à la gestion des écoles et universités.
                </p>
                <p>
                    Cliquez sur le texte <Link to={{pathname: "login"}} state={{disp: "true" }}>inscrivez-vous</Link> ou connectez-vous pour poursuivre l'aventure!
                </p>
                
            </>
        </>
    )
}