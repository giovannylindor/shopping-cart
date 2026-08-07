import { ShoppingCart } from "lucide-react";
import '../styles/Navbar.css'

export const Navbar = () => {
    return (
        <>
            {/* navbar */}
            <nav className="navbar">
                <h1>Shopping Cart App</h1>
                <ShoppingCart className="shoppingCartIcon"/>    
            </nav>
        </>
    );
}