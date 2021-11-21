import React , { useState , useEffect } from 'react'
import { commerce } from '../lib/commerce';
import Navbar from '../Navbar/navbar';
import Cart from '../Carts/Cart';
const Cat = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState({});

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId,quantity);

        setCart(item.cart);
    }

    useEffect(() => {
        fetchCart();
    },[]);
    return (
            <div>
                <Navbar totalItems={cart.total_items}/>
                <Cart cart={cart}/>
            </div>
    )
}


export default Cat;
//<div className="container"><Products products={products} onAddToCart={handleAddToCart}/></div>
//<CartItem item={item}/>