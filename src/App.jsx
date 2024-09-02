import { useState } from "react";
import Perfil from "./components/Perfil";
import Form from "./components/Formulario/indes";
import ReposList from "./components/ReposList";

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  return(
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* {formularioVisivel && <Form /> }

      <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">Toggle Form</button> */}
    </>
  )
}

export default App
