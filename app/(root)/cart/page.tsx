"use client";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "@/store/CartSlice";
import { useDispatch } from "react-redux";
import { useUser } from "@clerk/nextjs";

const Page = () => {
    const items = useSelector((state: RootState) => state.cart.cartItems);
    const dispatch = useDispatch();

    const totalQuantity = items.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = items
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2);

    const vat = (+totalPrice * 0.15).toFixed(2);

    const totalPriceWithVat = (+totalPrice + +vat).toFixed(2);

    const { user } = useUser();

    return (
        <div className="mt-8 min-h-[60vh]">
            {/* التحقق من أن السلة فارغة */}
            {items.length === 0 && (
                <div className="flex items-center w-full h-[80vh] flex-col justify-center">
                    <Image
                        src="/images/cart.svg"
                        alt="empty_cart"
                        width={400}
                        height={400}
                        className="object-cover mx-auto"
                    />

                    <h1 className="mt-8 text-2xl font-semibold">
                        Your Cart is empty
                    </h1>

                    <Link href="/">
                        <Button className="mt-4">Shop Now</Button>
                    </Link>
                </div>
            )}
            {items.length > 0 && (
                <div className="md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12">
                    <div className="rounded-lg shadow-md overflow-hidden xl:col-span-4">
                        <h1 className="p-4 text-xl sm:text-2x1 md:text-3x1 font-bold text-white bg-pink-700">
                            Your Cart ({totalQuantity}) Items
                        </h1>
                        {items.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="flex pb-6 mt-2 p-5 border-b-[1.5px] border-opacity-25 border-gray-700 items-center space-x-10">
                                        <div>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={180}
                                                height={180}
                                            />
                                        </div>
                                        <div>
                                            <h1 className="md:text-xl text-base font-bold  text-black">
                                                {item.title}
                                            </h1>
                                            <h1 className="md:text-lg text-sm font-semibold">
                                                Category : {item.category}
                                            </h1>
                                            <h1 className="md:text-2x1 text-lg font-bold  text-blue-950">
                                                {item.price}
                                            </h1>
                                            <h1 className="md:text-lg text-sm font-semibold">
                                                Quantity : {item.quantity}
                                            </h1>
                                            <div className=" flex space-x-2 items-center mt-4">
                                                <Button
                                                    variant={"destructive"}
                                                    onClick={() =>
                                                        dispatch(
                                                            removeItemFromCart(
                                                                item
                                                            )
                                                        )
                                                    }
                                                >
                                                    Remove One Item
                                                </Button>
                                                <Button
                                                    onClick={() =>
                                                        dispatch(
                                                            addItemToCart(item)
                                                        )
                                                    }
                                                >
                                                    Add More
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* <summary> */}
                    <div className="xl:col-span-2 ">
                        <div className=" sticky bg-red-200 p-6 rounded-lg top-[25vh] ">
                            <h1 className="text-center my-8 text-white text-3xl">
                                summary
                            </h1>
                            <div className="w-full bg-white h-[1.2px] opacity-20"></div>
                            <div className="flex my-4 text-xl uppercase text-white items-center justify-between font-semibold">
                                <span>Subtotal</span>
                                <span>${totalPrice}</span>
                            </div>
                            <div className="flex my-10 text-xl uppercase text-white items-center justify-between font-semibold">
                                <span>VAT</span>
                                <span>${vat}</span>
                            </div>
                            <div className="flex mb-6 text-xl uppercase text-white items-center justify-between font-semibold">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="w-full bg-white h-[1.2px] opacity-20"></div>
                            <div className="flex my-6 text-xl uppercase text-white items-center justify-between font-semibold">
                                <span>Total</span>
                                <span>${totalPriceWithVat}</span>
                            </div>
                            {user ? (
                                <Button className="w-full bg-pink-700">
                                    pay with credit card
                                </Button>
                            ) : (
                                <Link href={"/sign-in"} className=" ">
                                    <Button className="w-full bg-pink-700">
                                        Sign in to checkout
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;

//

//
//     <Image //
//     </div>
//     }
// </div>
