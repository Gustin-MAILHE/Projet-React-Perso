import './App.css';
import './assets/css/style.css'
import { Header, Footer } from "./views/template";
import { TodoList } from "./component/todo-list/view";
import { tacheContext } from "./services/tachesManager";

function App() {
  return (
    <tacheContext>
      <div className="App">
          <Header nbTaches={10} nbEnCours={3} />
          <TodoList/>
          <Footer/>
      </div>
    </tacheContext>
  );
}

export default App;
