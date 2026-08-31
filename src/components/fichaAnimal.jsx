function FichaAnimal(props) {

  return (
    <div>
      <h1>Nome: {props.dados.nome}</h1>
      <p>Espécie: {props.dados.especie}</p>
      <p>Raça: {props.dados.raca}</p>
      <p>Idade: {props.dados.idade}</p>
      <p>Peso: {props.dados.peso}</p>
      <p>Tutor: {props.dados.tutor}</p>
      <p>Observações: {props.dados.observacoes}</p>
    </div>
  )
}
export default FichaAnimal