
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
                    Cliquez sur le texte <Link to='/auth-login'>inscrivez-vous</Link> pour poursuivre l'aventure!
                </p>
            </>
        </>
    )
}