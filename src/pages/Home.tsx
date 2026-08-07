import { Button } from "@radix-ui/themes";
import '../styles/Home.css';
import { Link } from "react-router";

export const Home = () => {

    return (
        <>
            {/* main text */}
            <div className="mainText">
                <h1>ShopperCentral</h1>
                <h2>Click the Start Shopping Button Below to begin shopping!</h2>
                <Link to="/shop">
                <Button className="startShoppingBtn">Start Shopping</Button>
                </Link>
                
            </div>


            { /* footer */}
            <footer className="footer">
                <p>Created by Giovanny Lindor &copy; 2026</p>
            </footer>
        </>
    );
};