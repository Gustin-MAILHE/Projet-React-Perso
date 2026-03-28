import logo from '../assets/images/logo.svg';
import { BtnTheme } from '../services/theme.js'
import { useContext } from "react";
import { TacheContext } from "../services/tachesManager";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
import { ETATS } from "../data/status";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieGraphique = () => {
    const { taches } = useContext( TacheContext );
    const repartition = getRepartion( taches );
    const data = {
        labels: ['Non Assigné', 'Nouveau', 'En cours', 'Réussi', 'En Attente', 'Abandonné'],
        datasets: [{
            data: repartition,
            backgroundColor: ['#252525', '#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'],
            borderColor: 'transparent',
        }]
    }

    const options = {
        plugins: {
            legend: {
                display: false,
            }
        }
    }

    return <Pie data={data} options={options}/>
}
function getRepartion( taches ) {
    let repartition = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < taches.length; i++){
        switch (taches[i].etat){
            case ETATS.NOUVEAU:
                repartition[1]++;
                break;
            case ETATS.EN_COURS:
                repartition[2]++;
                break;
            case ETATS.REUSSI:
                repartition[3]++;
                break;
            case ETATS.EN_ATTENTE:
                repartition[4]++;
                break;
            case ETATS.ABANDONNE:
                repartition[5]++;
                break;
            default:
                repartition[0]++;
                break;
        }
    }
    return repartition;
}

export const Header = () => {
    const { taches } = useContext( TacheContext );


    return (
        <header>
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <BtnTheme/>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{marginRight: '1em'}}>
                    <p>Nombre total de taches : {taches.length}</p>
                    <p>Nombre de taches en cours : {getEnCours( taches )}</p>
                </div>
                <div style={{width:'5em', height:'5em'}}><PieGraphique/></div>
            </div>
            
            <div className="lienPages">
                <p>Acceuil</p>
                <p>Dossier</p>
            </div>
        </header>
    );
}
function getEnCours( taches ) {
    let nbEnCours = 0;
    for (let i = 0; i < taches.length; i++){
        if (taches[i].etat === ETATS.EN_COURS){ nbEnCours++; }
    }
    return nbEnCours;
}

export const Footer = (props) => {

}