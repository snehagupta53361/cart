import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, calculatePrice, decrements, deleteFromCart } from '../redux/reducer';

const Cart = () => {

    const { cartItems, subtotal, total, tax, shipping } = useSelector(state => state.createReducerCart);
    const dispatch = useDispatch();

    dispatch(calculatePrice());
    const increment = (id)=>{
        dispatch(addToCart({id}));
        dispatch(calculatePrice());
    }
    const decrement = (id)=>{
        dispatch(decrements(id));
        dispatch(calculatePrice());
    }
    const deleteHandler = (id)=>{
        dispatch(deleteFromCart(id));
        dispatch(calculatePrice());
    }
    return (
        <div className='cart'>
            <main>
                {
                    cartItems.length > 0 ? (cartItems.map((i) => {
                        return <CartItem name={i.name} price={i.price} id={i.id} qty={i.quantity} imgSrc={i.imgSrc} key={i.id} 
                            decrement={decrement}
                            increment = {increment}
                            deleteHandler={deleteHandler}
                        />
                    })) : <h1>No items Yet</h1>
                }
            </main>

            <aside>
                <h2>${subtotal}</h2>
                <h2>${shipping}</h2>
                <h2>${tax}</h2>
                <h2>${total}</h2>
            </aside>
        </div>
    )
}

const CartItem = ({ imgSrc, name, price, qty, decrement, increment, deleteHandler, id }) => {
    return (
        <div className='cartItem'>
            <img src={imgSrc} alt={name} />
            <article>
                <h3>{name}</h3>
                <p>{price}</p>
            </article>

            <div>
                <button onClick={() => decrement(id)}>-</button>
                <p>{qty}</p>
                <button onClick={() => increment(id)}>+</button>
            </div>

            <AiFillDelete onClick={() => deleteHandler(id)} />
        </div>
    )
}
export default Cart