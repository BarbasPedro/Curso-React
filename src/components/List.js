import Item from "./Item"

const List = () => {
  return (
    <>
    <h1>Minha Lista</h1>
      <ul>
        <Item itemName="JavaScript" lancamento={2020}/>
        <Item itemName="JSX" lancamento={2012}/>
        <Item itemName="React" lancamento={2023}/>
        <Item />
      </ul>
    </>
  )
}

export default List
