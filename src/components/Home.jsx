import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToCart, calculatePrice } from '../redux/reducer';
const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAz4AYFU28SRln6kgHxriPGHvZAT2QKMt0JricoHm5c8AyrHlCMUo3Apz550Xw4lzFY0&usqp=CAU"


const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 12344,
      imgSrc: img1,
      id: 1,
    },
    {
      name: "Black Shoes",
      price: 12345,
      imgSrc: img2,
      id: 2,
    }
]
const dispatch = useDispatch();
  const actionHandler = (options)=>{
    console.log(options); 
    toast.success("Added to cart");
    dispatch(addToCart(options));
  }
  dispatch(calculatePrice());

  return (
    <div className='home'>
        {
          productList.map((i)=>{
           return <ProductCart name={i.name} id={i.id} key={i.id} price={i.price} handler={actionHandler} imgSrc={i.imgSrc}/>
          })
        }
    </div>
  )
}

const ProductCart = ({name, id, price, handler, imgSrc})=>{
  return (
    <div className='productCard'>
      <img src={imgSrc} alt={name}/>
      <p>{name}</p>
      <h4>${price}</h4>
      <button onClick={()=>handler({name, price, quantity: 1, imgSrc, id})}>Add to Card</button>
    </div>
  )
}
export default Home