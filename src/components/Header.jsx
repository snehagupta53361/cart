import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingBag } from 'react-icons/fi'
import { useSelector } from 'react-redux'

const Header = () => {
  const {cartItems} = useSelector(state=>state.createReducerCart);
  return (
    <nav>
        <h1>Logo Here</h1>
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'}>
            <FiShoppingBag/>
            <p>{cartItems.length}</p>
            </Link>
        </div>
    </nav>
  )
}

export default Header