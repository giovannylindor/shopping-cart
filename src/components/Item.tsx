import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Box, Button, Flex } from "@radix-ui/themes";
import '../styles/Item.css'
import { Link } from "react-router";
import { useCart } from "../contexts/CartContext";


interface ItemProps {
    id: number;
}

export const Item = ({ id }: ItemProps) => {
    const [productTitle, setProductTitle] = useState("");
    const [productImage, setProductImage] = useState(""); 
    const [productPrice, setProductPrice] = useState(0);
    const cartInfo = useCart(); 
    const cartItem = cartInfo.totalCart.find(item => item.productID === id);

    const handleClick = () => {
        const product = {
            productID: id,
            productQuantity: 1,  
            productAdded: true, 
        };

        if (cartItem){
                cartInfo.setTotalCart(prev => 
            prev.map(item => item.productID === id ? 
                { ...item, productQuantity: item.productQuantity + 1}
            : item )
        );
        } else {
            cartInfo?.setTotalCart(prev => [...prev, product]);
        }
        
    }

    const addQuantity = () => {
        
        cartInfo.setTotalCart(prev => 
            prev.map(item => item.productID === id ? 
                { ...item, productQuantity: item.productQuantity + 1}
            : item )
        );
        cartInfo?.setCartQuantity(cq => cq + 1);
    }

    const subtractQuantity = () => {
        cartInfo?.setTotalCart(prev => 
            prev.map(item => item.productID === id ? 
                { ...item, productQuantity: item.productQuantity - 1}
            : item )
        );
        cartInfo?.setCartQuantity(cq => cq - 1);
    }
        
    function AddButtons(){
        const cartItem = cartInfo?.totalCart.find(item => item.productID === id);
        return (
            <>
            <Flex direction="row" gap='1'>
            { cartItem?.productAdded && cartItem.productQuantity > 0 && <>
                <Button className="addToCartBtn" onClick={addQuantity}>+</Button>
                <Button className="addToCartBtn" onClick={subtractQuantity}>-</Button>
            </>
            }
            </Flex>
            </>
        );
    }

    useEffect(() => {
            //function to fetch the item
    const fetchItem = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            const product = response.data[id]; 
            setProductTitle(product.title);
            setProductImage(product.image);
            setProductPrice(Math.trunc(product.price));
        } catch (error) {
            console.log(error);
        }
    }
        fetchItem(); 
    }, [id]);

    useEffect(() => {        
        if(cartItem?.productAdded){
            console.log(`You want ${cartItem?.productQuantity} ${productTitle}!`);   
        }

        return () => {
            console.clear(); 
        }
    }, [cartItem?.productAdded, cartItem?.productQuantity]);

    return (
        <>
            <Box maxWidth="300px">
                <Card>
                    <Flex gap="1" direction="column" align="center">
                    <Link to="/product"><img src={productImage} alt={productTitle} className="productImg"/></Link>
                    <Link to="/product" className="prodTitle"><h2 className="prodTitle">{productTitle}</h2></Link>
                    
                    <h3>${productPrice}</h3>
                    <Button onClick={handleClick} className={"addToCartBtn"}>Add to Cart</Button>
                    { cartItem?.productAdded && <AddButtons />}
                    </Flex>
                </Card>
            </Box>
            
        </>
    );
};