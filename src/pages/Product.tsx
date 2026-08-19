import { useEffect } from "react";

export const Product = () => {
    useEffect(() => {
        document.title = 'Product'; 
    }, []);
    return (
        <>
            <h1>Page still in Development!</h1>
        </>
    );
}