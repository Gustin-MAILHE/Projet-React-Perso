import "../../assets/css/todoList.css"
import { useContext } from "react";
import { TacheContext } from "../../services/tachesManager";


export const TodoList = () => {
    const { taches } = useContext( TacheContext );

    return (
        <div className={"todoList"}>
            {taches && taches.map((el) => (
                <ViewTache tache={el}/>
            ))}
        </div>
    )
}

const ViewTache = (props) => {
    const { supprTache } = useContext( TacheContext );
    const { tache } = props;
    const id = tache.id;
    const title = tache.title;
    const desc = tache.description;
    const dateFin = tache.date_echeance;
    const etat = tache.etat;

    return (
        <div className="tache">
            <div className="entete">
                <p>{title}</p>
                <p>{etat}</p>
                <button className="supprBtn" onClick={() => supprTache(id)}>X</button>
            </div>

            <div>
                <p>Déscription</p>
            </div>

            <div className="terminerTache">
                <p>{dateFin}</p>
                <button>Terminer</button>
            </div>
        </div>
    )
}