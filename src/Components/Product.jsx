import { useState } from "react"

function Newproduct(props){
    const [id,setId]=useState('')
    const [price,setPrice]=useState('')
    const [name,setName]=useState('')
    const [category,setCategory]=useState('')
    const idChange=(e)=>{
        setId(e.target.value)
    }
    const priceChange=(e)=>{
        setPrice(e.target.value)
    }
    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const categoryChange=(e)=>{
        setCategory(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        const data={id:id,price:price,name:name,category:category}
        localStorage.setItem(id,JSON.stringify(data))
        props.onAddItem(data)
        console.log(data)
    }
    return(<form onSubmit={submitHandler}>
            <label>Id</label>
            <input type='number' onChange={idChange}></input>
            <label>Selling Price</label>
            <input type='number' onChange={priceChange}></input>
            <label>Product Name</label>
            <input type='text' onChange={nameChange}></input>
            <label>Category</label>
            <select onChange={categoryChange} defaultValue=''>
                <option value='' disabled>please select</option>
                <option value='electronic'>Electronic Item</option>
                <option value='food'>Food Item</option>
                <option value='skincare'>Skincare Item</option>
            </select>
            <button type="submit">Add</button>
        </form>
    )
}
export default Newproduct