import Item from "./Item"
const ItemListContainer = ({ greatings }) => {
    return (
        <div className='itemListContainer'>
            <h1>{greatings}</h1>
            <Item />
        </div>
    )
}

export default ItemListContainer