import Footer from "../Footer/Footer"


export default function Connect() {
    // Event.preventDefault()
    return(
        <div>
            <h1>Connexion</h1>
            <form action="">
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Mot de passe"/>
                <button type="submit">Connexion</button>
            </form>
        </div>
        
    )
}