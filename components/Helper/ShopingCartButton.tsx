"use client";

import { RootState } from "@/store/store";
import { ShoppingBagIcon } from "lucide-react";
import { useSelector } from "react-redux";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import CartSideBar from "./cartSideBar";

const ShopingCartButton = () => {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const totalQuantity = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    return (
        <Sheet>
            <SheetTrigger>
                <div className=" relative">
                    {totalQuantity > 0 && (
                        <span className=" absolute -top-3 -right-2 w-5 h-5 bg-transparent text-center flex items-center justify-center flex-col text-xs rounded-full text-white">
                            <span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 w-5 justify-center items-center bg-red-500">
                                {totalQuantity}
                            </span>
                        </span>
                    )}

                    <ShoppingBagIcon
                        size={26}
                        cursor={"pointer"}
                        className=""
                    />
                </div>
            </SheetTrigger>
            <SheetContent className="overflow-auto">
                <SheetHeader>
                    <SheetTitle>
                        <CartSideBar key={Math.random()} cart={cartItems} />
                    </SheetTitle>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default ShopingCartButton;
