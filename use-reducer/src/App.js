import {useReducer, useState} from 'react'
import './App.css';
import reducer, { ADICIONAR_FRASE, EXCLUIR_FRASE } from './reducer';

function App() {

  const [frase, setFrase] = useState('')
  // const [frases, setFrases] = useState([])
  const [frases, dispatch] = useReducer(reducer, [])
  
  const salvarFrase = (evento) => {
    evento.preventDefault()

    dispatch({
      tipo: ADICIONAR_FRASE,
      frase
    })
    // setFrases([...frases, frase])
  }

  const excluir = (fraseExcluida) => {
    dispatch({
      tipo: EXCLUIR_FRASE,
      frase: fraseExcluida
    })
  }

  return (
    <div className="App">
      <form onSubmit={salvarFrase}>
        <textarea 
          onChange={e => setFrase(e.target.value)}
          placeholder='Digite a sua frase...'
          required 
        />
        <br />
        <button type="">Salvar frase</button>
      </form>
      {frases.map((fraseAtual, index) => <p key={index}>{fraseAtual} - <button onClick={() => excluir(frase)}>Excluir</button></p>)}
    </div>
  );
}

export default App;
