"use client";
import { addItemToCart, CartItem, removeItemFromCart } from "@/store/CartSlice";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { useDispatch } from "react-redux";

type Props = {
    cart: CartItem[];
};

const CartSideBar = ({ cart }: Props) => {
    const dispatch = useDispatch();

    return (
        <div className="h-full my-6 ">
            <h1 className=" mb-6 text-center text-cyan-300  text-lg ">
                Your Cart
            </h1>
            {cart.length === 0 ? (
                <div className="flex justify-center items-center w-full  flex-col h-4/5">
                    <Image
                        src={"/images/cart.svg"}
                        alt="emptyCart"
                        width={200}
                        height={200}
                        className="object-cover"
                    />

                    <h1 className="mt-8 text-2xl text-cyan-300 font-semibold">
                        Your Cart is Empty
                    </h1>
                </div>
            ) : (
                <div>
                    {cart?.map((item, index) => (
                        <div
                            key={index}
                            className="pb-4 border-b-2 border-b-gray-300 opac70 p-4"
                        >
                            <div>
                                <Image
                                    src={item.image}
                                    alt={item.description}
                                    width={60}
                                    height={60}
                                    className="mb-4 object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-sm truncate w-4/5 font-semibold">
                                    {item?.title}
                                </h3>
                                <h3 className="text-base font-semibold">
                                    ${(item?.price * item?.quantity).toFixed(2)}
                                </h3>
                                <h3 className="text-base font-semibold mb-2">
                                    quantity: {item?.quantity}
                                </h3>
                                <div className="flex space-x-4 items-center">
                                    <Button
                                        size={"sm"}
                                        onClick={() => {
                                            dispatch(removeItemFromCart(item));
                                        }}
                                        variant={"destructive"}
                                    >
                                        Remove
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            dispatch(addItemToCart(item));
                                        }}
                                        size={"sm"}
                                    >
                                        Add
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <Link href={"/cart"}>
                        <SheetClose className="mt-6 w-full font-bold ">
                            View
                        </SheetClose>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CartSideBar;
