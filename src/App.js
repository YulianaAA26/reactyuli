//import logo from './logo.svg';
//import './App.css';

import { collection, getDocs, query, doc, deleteDoc, where, onSnapshot } from 'firebase/firestore';
import {useEffect, useState} from "react"; 
import Appform from './componentes/Appform';
import {db} from './Firebase/firebase';

function App() {
///READ - LECTURA - fnread ///
  const [docsBD,setDocBD] = useState([]);
  
  const fnRead = () => {
    try {
      const xColeccionConQuery = query(collection(db, "persona"));
      
      const unsubscribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
        const xDoc = [];
        xDatosBD.forEach( (doc) => {
         
          xDoc.push({id: doc.id,  ...doc.data()});
         
        });
        
        setDocBD(xDoc);
        
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect( () => {
    fnRead();
  }, []);



/// DELETE - eliminar - fnDelete ///
  const [idActual,setIdActual] = useState("");
  const fnDelete = async(xId) => {
      if(window.confirm("Confirme para eliminar")){
        await deleteDoc(doc(db, 'persona', xId));
        console.log("Se elimino... "+xId);
      }
  }

   /// const camposRegistros = {nombre:"", edad:"", genero:""}///
  return (
    <div style={{background:"yellow", width:"350px", padding:"10px"}}>
      <h1>reactYuli (app.js)</h1>
      <h3>READ / DELETE</h3>
      <Appform {...{idActual, setIdActual, fnRead}}/>
      {
        docsBD.map((p, index) =>
        <p key={p.id}>
          {index+1}{p.nombre} ...
          <span onClick={() => fnDelete(p.id)}> X </span>
          ...
          <span onClick={() => setIdActual(p.id)}> A </span>
        </p>)
      }
      
    </div>
  );
}

export default App;
