import { Item } from "../components/Item";
import { useState, useEffect } from "react";
import { Flex } from "@radix-ui/themes";

export const Shop = () => {
    
    useEffect(() => {
        document.title = "Shop";
    }, [])

    return (
        <>
        <h1>Shop</h1>
        <Flex gap="4">
            <Item id={1} />
            <Item id={4} />
        </Flex>
        </>
    );
}