import { ShoppingCart } from "lucide-react";
import { Button } from "@radix-ui/themes";
import '../styles/Home.css'

export const Home = () => {
    return (
        <>
            {/* navbar */}
                <nav className="navbar">
                    <h1>Shopping Cart App</h1>
                    <ShoppingCart className="shoppingCartIcon"/>    
                </nav>


            {/* main text */}
            <div className="mainText">
                <h1>ShopperCentral</h1>
                <h2>Click the Start Shopping Button Below to begin shopping!</h2>
                <Button className="startShoppingBtn">Start Shopping</Button>
            </div>


            { /* footer */}
            <footer className="footer">
                <p>Created by Giovanny Lindor &copy; 2026</p>
            </footer>
        </>
    );
};