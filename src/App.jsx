import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return(
    <>
    <header className="headerTwo">
      <label htmlFor="usuarioID">Digite o usuário que eseja ver o perfil no GitHub: </label>
    <input className="searchUsu" id="usuarioID" type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
    </header>
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
