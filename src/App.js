import logo from './logo.svg';
import './App.css';
//import TaskListComponent from './components/container/TaskListComponent';
import ContactoListComponent from './components/container/ContactoListComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent></TaskListComponent> */}
       <ContactoListComponent></ContactoListComponent>
      </header>
    </div>
  );
}

export default App;
