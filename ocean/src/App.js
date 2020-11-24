import logo from './logo.svg';
import './index.css';
import Aquarium from './Aquarium';
import Menu from './Menu';
import kataraUser from './katara.json';
import zukoUser from './zuko.json';

function App() {
  return (
    <div className="App">
      <Aquarium/>
      <Menu/>
    </div>
  );
}

export default App;
