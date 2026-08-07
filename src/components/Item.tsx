import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Box, Button, Flex } from "@radix-ui/themes";
import '../styles/Item.css'


interface ItemProps {
    id: number;
}


export const Item = ({ id }: ItemProps) => {
    const [productTitle, setProductTitle] = useState("");
    const [productImage, setProductImage] = useState(""); 
    const [productDescription, setProductDescription] = useState(""); 
    const [productPrice, setProductPrice] = useState(0);
    const [productQuantity, setProductQuantity] = useState(0);

    //function to fetch the item
    const fetchItem = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            const product = response.data[id];
            console.log(product); 
            setProductTitle(product.title);
            setProductImage(product.image);
            setProductDescription(product.description);
            setProductPrice(Math.trunc(product.price));
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = () => {
        return console.log("clicked")
    }

    useEffect(() => {
        fetchItem(); 
    }, [id]);

    return (
        <>
            <Box maxHeight="250px" maxWidth="300px">
                <Card>
                    <Flex gap="2" direction="column" align="center">
                    <img src={productImage} alt={productDescription} className="productImg"/>
                    <h2>{productTitle}</h2>
                    <h3>${productPrice}</h3>
                    <Button onClick={handleClick} className={"addToCartBtn"}>Add to Cart</Button>
                    </Flex>
                </Card>
            </Box>
            
        </>
    );
};