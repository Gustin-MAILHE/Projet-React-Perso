import "../../assets/css/todoList.css"
import {useContext} from "react";
import {tacheContext} from "../../services/tachesManager";


export const TodoList = () => {
    const { taches } = useContext(tacheContext);

    return (
        <div content='TodoList'>
            {taches.map(item => (
                <div key={item.id}> {item.title} </div>
            ))}
        </div>
    )
}

function getTache(props) {
    const { title, desc, dateCrea, dateSuppr, equipiers } = props;

}