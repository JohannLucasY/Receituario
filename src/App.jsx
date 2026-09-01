import { useState } from 'react'
import './App.css'
import FichaAnimal from './components/FichaAnimal'


function App() {

  const [mostrarFicha, setMostrarFicha] = useState(false)
  const [informacao, setInformacao] = useState({ // Um objeto. useStates = um interruptor que representa uma pergunta, 'true or false'.
    nome: '',
    especie: '',
    raca: '',
    idade: '',
    peso: '',
    tutor: '',
    observacoes: ''
  })

  function handleChange(e) {
    setInformacao({ ...informacao, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault() // Duvidas!!! 
    setMostrarFicha(true)
    console.log(informacao)
  }

  return (
    <> {/* Abertura do FichaAnimal */}
    <main id='content'>

      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={informacao.nome}
            name='nome'
            onChange={handleChange}
          />
        </label>
        <p>Nome: {informacao.nome}</p>

        <label>
          Especie:
          <input
            type="text"
            value={informacao.especie}
            name='especie'
            onChange={handleChange}
          />
        </label>
        <p>Espécie: {informacao.especie}</p>

        <label>
          Raça:
          <input
            type="text"
            value={informacao.raca}
            name='raca'
            onChange={handleChange}
          />
        </label>
        <p>Raça: {informacao.raca}</p>

        <label>
          Idade:
          <input
            type="text"
            value={informacao.idade}
            name='idade'
            onChange={handleChange}
          />
        </label>
        <p>Idade: {informacao.idade}</p>

        <label>
          Peso:
          <input
            type="text"
            value={informacao.peso}
            name='peso'
            onChange={handleChange}
          />
        </label>
        <p>Peso: {informacao.peso} kg</p>

        <label>
          Tutor:
          <input
            type="text"
            value={informacao.tutor}
            name='tutor'
            onChange={handleChange}
          />
        </label>
        <p>Tutor: {informacao.tutor}</p>

        <label>
          Observações:
          <input
            type="text"
            value={informacao.observacoes}
            name='observacoes'
            onChange={handleChange}
          />
        </label>
        <p>Observações: {informacao.observacoes}</p>

        <button type="submit">Gerar ficha</button>
      </form>

      {mostrarFicha && <FichaAnimal dados={informacao} />}
    </main>

    </> // fechamento do FichaAnimal
  )
}
export default App