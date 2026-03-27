import './App.css';
import './assets/css/style.css'
import { Header, Footer } from "./views/template";
import { TodoList } from "./component/todo-list/view";
import { InitTaches, TacheContext } from "./services/tachesManager";
import data from "./data/data.json";
import {useState} from "react";

function App() {
    const [taches, setTaches] = useState(data.taches);

  return (
    <TacheContext values={{taches, setTaches}}>
      <div className="App">
          <Header nbTaches={10} nbEnCours={3} />
          <TodoList/>
          <Footer/>
      </div>
    </TacheContext>
  );
}

export default App;
