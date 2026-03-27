import './App.css';
import './assets/css/style.css'
import { Header, footer } from "./views/template";
import { TodoList } from "./component/todo-list/view";
import { TachesContext } from "./services/tachesManager";

function App() {
  return (
    <div className="App">
      <Header nbTaches={10} nbEnCours={3} />
      <TodoList taches={data.taches} />

    </div>
  );
}

export default App;
