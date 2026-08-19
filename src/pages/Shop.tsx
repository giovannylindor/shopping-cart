import { Item } from "../components/Item";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "@radix-ui/themes";
import '../styles/Shop.css'

export const Shop = () => {
    const [idList, setIDList] = useState<number[]>([]);
    const [loading, setLoading] = useState(true); 
    

    useEffect(() => {
        document.title = "Shop";

        const fetchStoreInventory = async () => {
            const res = await axios.get("https://fakestoreapi.com/products");
            const data = res.data; 
            console.log(data);
            
           const ids = data.map((product: {id: number}) => product.id);
           setIDList(prev => [...prev, ...ids]);

           setLoading(false);
        }

        fetchStoreInventory(); 
    }, []);

    if(loading){
        return(
            <>
            <Spinner size='3'></Spinner>
            </>
        )
    }

    return (
        <>
        <h1>Shop</h1>
            <div className="allCards">
            {idList.map(id => 
                <Item key={id} id={id} />
            )}
            </div>
        
        </>
    );
}