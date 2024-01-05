const Person = ({name, age, profession, photo}) => {
  return (
    <>
      <img src={photo} alt={name}/>
      <h2>Nome: {name}</h2>
      <p>Idade:{age}</p>
      <p>Profession: {profession}</p>
    </>
  );
}

export default Person
