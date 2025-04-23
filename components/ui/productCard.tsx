"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types";
import { Button } from "./button";
import { Heart, ShoppingBag } from "lucide-react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/store/CartSlice";

const ProductCard = (product: Product) => {
    const dispach = useDispatch();
    const addToCartHandler = () => {
        dispach(addItemToCart(product));
    };

    return (
        <div key={product.id} className="p-4 ">
            <div className="w-50 h-[150px] ">
                <Image
                    width={100}
                    height={100}
                    src={product.image}
                    alt={product.title}
                    className=" object-contain w-4/5 h-4/5 "
                />
            </div>
            <p className="text-xs mt-5 text-gray-600 capitalize">
                {product.category}
            </p>
            <Link href={`/product/details/${product.id}`}>
                <h1 className="text-lg mt-2 font-semibold hover:text-blue-800 sm:w-full sm:truncate transition-all cursor-pointer">
                    {product.title}
                </h1>
            </Link>
            <div className="flex  items-center">
                <p className="text-lg font-semibold mr-2 opacity-80">
                    ${product.price}
                </p>
            </div>
            <div className="flex mt-4 space-x-2 items-center">
                <Button onClick={addToCartHandler} size={"icon"}>
                    <ShoppingBag size={"18"} />
                </Button>
                <Button size={"icon"} className="bg-red-500">
                    <Heart size={"18"} />
                </Button>
            </div>
            <Link href={`/product/details/${product.id}`}>
                <Button size={"lg"} className="mt-4">
                    View Product
                </Button>
            </Link>
        </div>
    );
};

export default ProductCard;
