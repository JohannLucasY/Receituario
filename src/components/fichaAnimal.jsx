import './FichaAnimal.css'
function FichaAnimal(props) {

  return (
    <div className='folha-a4'>

      <header>
        <p>CRMV: 00000</p>
        <p>Dra. Nome da Médica</p>
      </header>
      <main>
        <h1>Nome: {props.dados.nome}</h1>
        <p>Espécie: {props.dados.especie}</p>
        <p>Raça: {props.dados.raca}</p>
        <p>Idade: {props.dados.idade}</p>
        <p>Peso: {props.dados.peso}</p>
        <p>Tutor: {props.dados.tutor}</p>
      </main>
      <section>
        <p>Observações: {props.dados.observacoes}</p>
      </section>
      <footer>
        <p>Email: contato@exemplo.com</p>
        <p>Telefone: (00) 00000-0000</p>
        <p>Instagram: @exemplo</p>
      </footer>
    </div>
  )
}
export default FichaAnimal