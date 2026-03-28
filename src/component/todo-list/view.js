import "../../assets/css/todoList.css"
import { useContext } from "react";
import { TacheContext } from "../../services/tachesManager";
import { EtatTache, ViewFiltre } from "../filter/filtreTache";


export const TodoList = () => {
    const { taches } = useContext( TacheContext );

    return (
        <div style={{margin: '2em 5em'}}>
            <ViewFiltre/>
            <div className={"todoList"}>
                    {taches && taches.map((el) => (
                        <ViewTache tache={el}/>
                    ))}
            </div>
        </div>
    )
}

const ViewTache = (props) => {
    const { supprTache } = useContext( TacheContext );
    const { tache } = props;
    const id = tache.id;
    const title = tache.title;
    let desc = tache.description;
    const dateFin = tache.date_echeance;
    const etat = tache.etat;

    if (desc === "") {
        desc = "Aucune déscription";
    }

    return (
        <div className="tache">
            <div className="entete">
                <p className="titre">{title}</p>
                <EtatTache etat={etat}/>
                <button className="supprBtn" onClick={() => supprTache(id)}>X</button>
            </div>

            <div>
                <p>{desc}</p>
            </div>

            <div className="terminerTache">
                <p>Fin : {dateFin}</p>
                <button>Modifier</button>
            </div>
        </div>
    )
}