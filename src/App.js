//import logo from './logo.svg';
//import './App.css';

import { collection, getDocs, query, doc, deleteDoc, where, onSnapshot } from 'firebase/firestore';
import {useEffect, useState} from "react"; 
import Appform from './componentes/Appform';
import {db} from './Firebase/firebase';

function App() {
///READ - LECTURA - fnread ///
  const [docBD,setDocBD] = useState([]);
  
  const fnread = () => {
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
    fnread();
  }, []);



/// DELETE - eliminar - fnDelete ///
  const [idActual,setIdActual] = useState("");
  const fnDelete = (xId) => {

  }

   /// const camposRegistros = {nombre:"", edad:"", genero:""}///
  return (
    <div style={{background:"yellow", width:"350px", padding:"10px"}}>
      <Appform {...{idActual}}/>
      <p>1. Jose Manuel  28 Masculino  ----x - A</p>
      <p>2. Shirley Beatriz  31 Femenino  ----x - A</p>
      <p>3. Edgar Junior 25 Masculino  ----x - A</p>
    </div>
  );
}

export default App;
