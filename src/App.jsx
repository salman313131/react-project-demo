import Newproduct from './Components/Product.jsx'
import ListProduct from './Components/ListProduct.jsx'
import { useState } from 'react'
function App() {
  const [itemList,setItemList]=useState([])
  const itemHandler=(data)=>{
    setItemList((prevList)=>{
      return [...prevList,data]
    })
  }
  const deleteItemHandler=(id)=>{
    const newItemList = itemList.filter(item=>item.id != id)
    localStorage.removeItem(id)
    setItemList(newItemList)
  }
  return (
    <>
  <Newproduct onAddItem={itemHandler}/>
  <ListProduct onDisplay={itemList} onDelete={deleteItemHandler}/>
    </>)
}

export default App
