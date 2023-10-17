
const ListProduct = (props) => {
  const electronicItems = props.onDisplay.filter(item => item.category === 'electronic');
  const foodItems = props.onDisplay.filter(item => item.category === 'food');
  const skincareItems = props.onDisplay.filter(item => item.category === 'skincare');

  const deleteItem=(id)=>{
    props.onDelete(id)
  }

  return (
    <>
      <div>
        <h3>Electronic Item</h3>
        <ul>
          {electronicItems.map(item => (  
          <li key={item.id}>{item.name} {item.price} <button onClick={()=>deleteItem(item.id)}>Delete</button></li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Food Item</h3>
        <ul>
          {foodItems.map(item => (
            <li key={item.id}>{item.name} {item.price} <button onClick={()=>deleteItem(item.id)}>Delete</button></li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Skincare Item</h3>
        <ul>
          {skincareItems.map(item => (
            <li key={item.id}>{item.name} {item.price} <button onClick={deleteItem(item.id)}>Delete</button></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListProduct;
