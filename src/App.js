import './App.css';
import './assets/css/style.css'
import { Header, Footer } from "./views/template";
import { TodoList } from "./component/todo-list/view";
import { TacheContext, createTache, supprTache } from "./services/tachesManager";
import data from "./data/data.json";
import { useState } from "react";

function App() {
  const [taches, setTaches] = useState(data.taches);

  return (
    <TacheContext value={{taches, createTache, supprTache}}>
      <div className="App">
          <Header nbTaches={10} nbEnCours={3} />
          <TodoList/>
          <Footer/>
      </div>
    </TacheContext>
  );
}

export default App;
