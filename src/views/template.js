import logo from '../assets/images/logo.svg';


export const Header = (props) => {
    const { nbTaches, nbEnCours } = props;
    return (
        <header>
            <img src={logo} className="App-logo" alt="logo" />
            
            <div className="detailTaches">
                <p>Nombre total de taches : {nbTaches}</p>
                <p>Nombre de taches en cours : {nbEnCours}</p>
                <p>0</p>
            </div>
            
            <div className="lienPages">
                <p>Acceuil</p>
                <p>Dossier</p>
            </div>
        </header>
    );
}