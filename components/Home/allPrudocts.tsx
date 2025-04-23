"use client";

import getAllProducts from "@/Requests/allProducts";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import ProductCard from "../ui/productCard";

export default function AllProducts() {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        // fetch all products
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const prudocts: Product[] = await getAllProducts();
                setProducts(prudocts);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="py-16 ">
            <h1 className="lg:text-3xl text-2xl font-bold text-center mb-12">
                All Products
            </h1>

            {loading ? (
                <div className=" animate-spin h-9 w-9 border-4 mx-auto border-gray-200 border-b-red-500 rounded-full bg-transparent"></div>
            ) : (
                <div className="w-4/5 mx-auto grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                    {products?.map((product) => (
                        <ProductCard
                            key={product.id}
                            category={product.category}
                            description={product.description}
                            id={product.id}
                            image={product.image}
                            price={product.price}
                            rating={product.rating}
                            title={product.title}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
