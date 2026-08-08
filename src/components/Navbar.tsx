import { ShoppingCart } from "lucide-react";
import '../styles/Navbar.css'
import { Link } from "react-router";
import { Flex } from "@radix-ui/themes";


export const Navbar = () => {
    return (
        <>
            {/* navbar */}
            <Flex direction="row" align='center' gap="3" justify='between'>
                    <Link to="/" className="main">
                        <h1>Shopping Cart App</h1>
                    </Link>
                    <Link to="/cart">
                    <ShoppingCart className="shoppingCartIcon"/>    
                    </Link>
            </Flex>
        </>
    );
}