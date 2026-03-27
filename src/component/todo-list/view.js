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
    const { tache } = props;
    const id = tache.id;
    const title = tache.title;
    const desc = tache.description;
    const dateCrea = tache.date_creation;
    const dateFin = tache.date_echeance;
    const equipe = tache.equipiers;

    return (
        <div className="tache">
            <p>id</p>
            <p>{title}</p>

        </div>
    )
}