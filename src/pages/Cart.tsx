import { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import axios from "axios";
import '../styles/Cart.css'


function Product ({id, onPrice}: {id: number; onPrice: (id: number, price: number) => void }){
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState(0);
    const totalCartInfo = useCart();
    const cartItem = totalCartInfo.totalCart.find(item => item.productID === id);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/`);
                const data = response.data[id]; 
                setImg(data.image);
                setTitle(data.title);
                const price = Math.trunc(data.price);
                setPrice(price);
                onPrice(id, price); 
                
            } 
            catch(error){
                console.error('error!');
            }
        }
        

        fetchProduct(); 
    }, [id])




    if (!cartItem || cartItem?.productQuantity <= 0) return null;

    return (
        <>
        <div className="cartProduct">
            <img src={img} className="cartImg"></img>
            <div className="text">
                <h3>{title}</h3>
                <p>Quantity: {cartItem.productQuantity}</p>
                <h3>${price}</h3>
            </div>

        </div>

        </>
    );
}


export const Cart = () => {
    const cartInfo = useCart(); 
    const [prices, setPrices] = useState<Record<number, number>>({});

    const handlePrice = (id: number, price: number) => {
        setPrices(previous => ({...previous, [id]:price}));
    }

    const totalPrice = cartInfo.totalCart.reduce(
        (sum, item) => sum + (prices[item.productID] ?? 0) * item.productQuantity,
        0
    );

    useEffect(() => {
        document.title = 'Cart'; 
    }, []);

    return (
        <>
        <h1 className="title">Cart</h1>
        <div className="productCards">
        { cartInfo.totalCart.map(item => 
            <Product key={item.productID} id={item.productID}  onPrice={handlePrice}/>
        )}
        </div>


        <h2 className="totalText">Total Price: ${totalPrice}</h2>
        </>
    );
}