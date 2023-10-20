import logo from './logo.svg';
import './App.css';
import C01componente from './componentes/C01componente';
import Appform from './componentes/Appform';

function App() {
  return (
    <div style={{background:"yellow", width:"350px", padding:"10px"}}>
      <Appform/>
      <i class="large material-icons">insert_chart</i>

      <p>1. Jose Manuel 28 Masculino ---- x - A</p>
      <p>2. Shirley Beatriz 32 Masculino ---- x - A</p>
      <p>3. Edgar Junior 24 Masculino ---- x - A</p>
    </div>
  );
}

export default App;
