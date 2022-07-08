import React from 'react';
// Types
import { CoffeeItemType } from '../App'
// Styles

type Props = {
  item: CoffeeItemType;
  //handleAddToCart: (clickedItem: CoffeeItemType) => void;
}

const Item: React.FC<Props> = ({ item }) => (
  <div className='flex flex-col items-center justify-center text-center'>
    <img className='max-h-[250px] object-cover rounded-[20px]' src={item.image} alt={item.title} />
    <div className='font-{Arial, Helvetica, sans-serif} p-[1rem] h-[100%]'>
      <h3 className='font-galliard'>{item.title}</h3>
      {/* <p>{item.description}</p> */}
      <h3>from ${item.price}</h3>
    </div>
    {/* <button onClick={() => handleAddToCart(item)}>Add to Cart</button> */}
  </div>
)

export default Item;