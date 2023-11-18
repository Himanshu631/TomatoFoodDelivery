import { useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from "../utils/cartSlice"
import { useDispatch } from "react-redux";

const Cart = () => {

    const dispatch = useDispatch();

    const cartItems = useSelector((store) => store.cart.items)

    const handlClearItem = () => {
        dispatch(clearCart());
    }

    return <div className="text-center  m-5 p-5">
                <h1 className="font-bold  text-3xl">Cart</h1>
                <div  className="w-6/12 m-auto mt-6 bg-white">
                    <button className="m-4  p-1 px-2 bg-black text-lg text-white rounded-md" onClick={handlClearItem}>Clear Cart</button>
                    {cartItems.length === 0 && <h1>Your cart is empty</h1>}
                    <ItemList items={cartItems} />
                </div>
           </div>
}

export default Cart;