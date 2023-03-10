import Footer from "../Footer/Footer"


export default function Inscrit() {
    return(
        <div>
            <h1>Inscription</h1>
            <form action="">
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Mot de passe"/>
                <input type="text" placeholder="Confirmer le mot de passe"/>
                <button type="submit">s'inscrire</button>
            </form>
        </div>
        
    )
}