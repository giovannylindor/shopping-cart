import { ShoppingCart } from "lucide-react";
import '../styles/Navbar.css'
import { Link } from "react-router";
import { Flex } from "@radix-ui/themes";
import { useCart} from "../contexts/CartContext";



export const Navbar = () => {
    const {cartQuantity } = useCart();

    return (
        <>
            {/* navbar */}
            <Flex direction="row" align='center' gap="3" justify='between'>
                    <Link to="/" className="main">
                        <h1>Shopping Cart App</h1>
                    </Link>
                    <Link to="/cart" className="cart">
                    <p className="cartNumber">{cartQuantity > 0 && cartQuantity}</p>
                    <ShoppingCart className="shoppingCartIcon"/>    
                    </Link>
            </Flex>
        </>
    );
}