import SearchBox from "@/components/Helper/SearchBox";
import ShopingCartButton from "@/components/Helper/ShopingCartButton";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { HeartIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
    return (
        <div className="h-[12vh] sticky top-0 shadow-md z-50 bg-white ">
            <div className="flex justify-between mx-auto items-center h-full w-[95%] md:w-4/5">
                {/* logo */}
                <Link href="/">
                    <Image
                        priority
                        src={"/images/logo.png"}
                        alt="logo"
                        width={140}
                        height={140}
                    />
                </Link>
                {/* icons */}
                <div className="flex items-center space-x-6">
                    <SearchBox />
                    <HeartIcon size={26} cursor={"pointer"} />
                    <ShopingCartButton />

                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                    <SignedOut>
                        <SignInButton>
                            <UserIcon size={26} cursor={"pointer"} />
                        </SignInButton>
                    </SignedOut>
                </div>
            </div>
        </div>
    );
};

export default Nav;
