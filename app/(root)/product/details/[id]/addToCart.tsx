"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/store/CartSlice";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AddToCart = ({ p }: { p: any }) => {
    const dispatch = useDispatch();

    return (
        <Button onClick={() => dispatch(addItemToCart(p))} className="mt-6">
            Add To Cart
        </Button>
    );
};

export default AddToCart;
