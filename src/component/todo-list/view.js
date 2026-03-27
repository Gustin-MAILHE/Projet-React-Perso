import "../../assets/css/todoList.css"


export const TodoList = (props) => {
    const { listeTaches } = props;

    return (
        <div content='TodoList'>
            {listeTaches.map(item => (
                <div key={item.id}> {item.title} </div>
            ))}
        </div>
    )
}

function getTache(props) {
    const { title, desc, dateCrea, dateSuppr, equipiers } = props;

}