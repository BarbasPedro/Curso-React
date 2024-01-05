import PropTypes from 'prop-types'

const Item = ({itemName, lancamento}) => {
  return (
    <>
      <li>
        {itemName} - {lancamento}
      </li>
    </>
  )
}

Item.propTypes = {
  itemName: PropTypes.string.isRequired,
  lancamento: PropTypes.number,
}

Item.defaultProps = {
  itemName: "Escolha uma linguagem",
  lancamento: 0,
}


export default Item
