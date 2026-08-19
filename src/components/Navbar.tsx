import { ShoppingCart } from "lucide-react";
import '../styles/Navbar.css'
import { Link } from "react-router";
import { Flex } from "@radix-ui/themes";
import { useCart } from "../contexts/CartContext";




export const Navbar = () => {
    const cartInfo = useCart(); 

    //learn
   const totalItems = cartInfo.totalCart.reduce(
        (sum, item) => sum + item.productQuantity,
        0
    ) ?? 0;

    return (
        <>
            {/* navbar */}
            <Flex direction="row" align='center' gap="3" justify='between'>
                    <Link to="/" className="main">
                        <h1>Shopping Cart App</h1>
                    </Link>
                    <Link to="/cart" className="cart">
                    { totalItems > 0 && <p className="cartNumber">{totalItems}</p> }
                    <ShoppingCart className="shoppingCartIcon"/>    
                    </Link>
            </Flex>
        </>
    );
}