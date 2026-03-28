import './App.css';
import './assets/css/style.css'
import { Header, Footer } from "./views/template";
import { ViewFiltre, filtreTaches } from './component/filter/filtreTache';
import { TodoList } from "./component/todo-list/view";
import { TacheContext } from "./services/tachesManager";
import data from "./data/data.json";
import { useState } from "react";

function App() {
  const [taches, setTaches] = useState(data.taches);

  function supprTache( id ) {
      setTaches( taches =>taches.filter( tache => tache.id !== id));
  }
  function createTache(tache) {
      setTaches(taches => taches + tache);
  }

  return (
    <TacheContext value={{taches, createTache, supprTache}}>
      <div className="App">
          <Header/>
          <TodoList/>
          <Footer/>
      </div>
    </TacheContext>
  );
}

export default App;
