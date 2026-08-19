import { createContext, useContext, useState, type SetStateAction, type Dispatch } from "react";


//interface for an individual product item
export interface ProductItem {
    productID: number; 
    productQuantity: number;
    productAdded: boolean; 
}


//interface for the all the products in the cart
export interface CartContext { 
    productID: number; 
    cartQuantity: number; 
    productAdded: boolean; 
    totalCart: ProductItem[]; 
    setProductID: Dispatch<SetStateAction<number>>;
    setCartQuantity: Dispatch<SetStateAction<number>>; 
    setProductAdded: Dispatch<SetStateAction<boolean>>; 
    setTotalCart: Dispatch<SetStateAction<ProductItem[]>>; 
}

export const NewCartContext = createContext<CartContext | undefined>(undefined); 

export function CartProvider({children}: {children: React.ReactNode}) {
    const [productID, setProductID] = useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [totalCart, setTotalCart] = useState<ProductItem[]>([]); 
    const [productAdded, setProductAdded] = useState(false); 
    
    return(
        <NewCartContext.Provider value={{ productID, setProductID, productAdded, setProductAdded, cartQuantity, setCartQuantity, totalCart, setTotalCart}}>
            {children}
        </NewCartContext.Provider>
    )
}


export function useCart(){
    const context = useContext(NewCartContext);
    if(!context){
        throw new Error("Error!");
    }
    return context;  
}

