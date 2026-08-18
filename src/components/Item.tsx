import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Box, Button, Flex } from "@radix-ui/themes";
import '../styles/Item.css'
import { Link } from "react-router";


interface ItemProps {
    id: number;
}

export const Item = ({ id }: ItemProps) => {
    const [productTitle, setProductTitle] = useState("");
    const [productImage, setProductImage] = useState(""); 
    //const [productDescription, setProductDescription] = useState(""); 
    const [productPrice, setProductPrice] = useState(0);
    const [productQuantity, setProductQuantity] = useState(0);
    const [productAdded, setProductAdded] = useState(false);

    

    //function to fetch the item
    const fetchItem = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            const product = response.data[id]; 
            setProductTitle(product.title);
            setProductImage(product.image);
            //setProductDescription(product.description);
            setProductPrice(Math.trunc(product.price));
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = () => {
        setProductAdded(true);

        setProductQuantity(pq => pq + 1);
        
    }

    const addQuantity = () => {

        setProductQuantity(pq => pq + 1);
    }

    const subtractQuantity = () => {
        
        setProductQuantity(pq => pq - 1);
     
    }
        
    function AddButtons(){
        return (
            <>
            <Flex direction="row" gap='1'>
            {productAdded && productQuantity > 0 && <>
                <Button className="addToCartBtn" onClick={addQuantity}>+</Button>
                <Button className="addToCartBtn" onClick={subtractQuantity}>-</Button>
            </>}
            </Flex>
            </>
        );
    }

    useEffect(() => {
        fetchItem(); 
    }, [id]);

    useEffect(() => {
        if(productAdded) {
            console.log(`You want ${productQuantity} ${productTitle}!`);   
        }

        return () => {
            console.clear(); 
        }
    }, [productAdded, productQuantity]);

    return (
        <>
            <Box maxHeight="250px" maxWidth="300px">
                <Card>
                    <Flex gap="1" direction="column" align="center">
                    <Link to="/product"><img src={productImage} alt={productTitle} className="productImg"/></Link>
                    <Link to="/product" className="prodTitle"><h2 className="prodTitle">{productTitle}</h2></Link>
                    
                    <h3>${productPrice}</h3>
                    <Button onClick={handleClick} className={"addToCartBtn"}>Add to Cart</Button>
                    { productAdded && <AddButtons />}
                    </Flex>
                </Card>
            </Box>
            
        </>
    );
};