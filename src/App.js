import React , { useState } from 'react'
import Login from "./components/Login";
import Alert from './components/Alert';

function App() {

  const [alert , setAlert] = useState({

    mensaje : '',
    color : ''
    
  });

  return (
      <>
        < Login setAlert={setAlert} />
        < Alert color={alert.color}>{alert.mensaje}</Alert>
      </>
  );
}

export default App;
