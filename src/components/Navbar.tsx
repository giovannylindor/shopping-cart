import { ShoppingCart } from "lucide-react";
import '../styles/Navbar.css'
import { Link } from "react-router";

export const Navbar = () => {
    return (
        <>
            {/* navbar */}
            <nav className="navbar">
                <Link to="/" className="main">
                    <h1>Shopping Cart App</h1>
                </Link>
                <ShoppingCart className="shoppingCartIcon"/>    
            </nav>
        </>
    );
}