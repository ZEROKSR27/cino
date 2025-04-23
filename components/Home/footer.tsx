import Image from "next/image";
import React from "react";

const footer = () => {
    return (
        <div className="pt-30 pb-12 bg-red-300  [clip-path:polygon(0_0,_100%_45px,_100%_100%,_0_100%)]">
            {/* define the grid  */}
            <div className="grid w-4/5 mx-auto border-b-[1.2px] pb-8 border-b-slate-500 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* 1st grid item */}
                <div>
                    <h1 className=" text-[25px]  text-slate-500 font-semibold mb-4">
                        CINO SHOP
                    </h1>
                    <p className="text-sm text-slate-300 selection:bg-rose-700 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat optio aspernatur eum amet quibusdam quas ab qui
                        beatae distinctio fugit?
                    </p>
                    <p className="mt-6 text-slate-200 text-base ">
                        (+000) 1234 5678 90 - info@example.com
                    </p>
                </div>
                {/* 2nd grid item */}
                <div className="lg:mx-auto">
                    <h1 className="footer__title">About Us</h1>
                    <p className="footer__link">Privacy Policy</p>
                    <p className="footer__link">Retun Policy</p>
                    <p className="footer__link">Shipping Policy</p>
                    <p className="footer__link">DropShipping</p>
                </div>
                {/* 3rd grid item */}
                <div className="lg:mx-auto">
                    <h1 className="footer__title">Account</h1>
                    <p className="footer__link">Account Details</p>
                    <p className="footer__link">Dashboard</p>
                    <p className="footer__link">My Orders</p>
                    <p className="footer__link">Track Orders</p>
                </div>
                {/* 4th grid item */}
                <div className="lg:mx-auto">
                    <h1 className="footer__title">Shop</h1>
                    <p className="footer__link">Affiliate</p>
                    <p className="footer__link">Best Sellers</p>
                    <p className="footer__link">Latest Prudocts</p>
                    <p className="footer__link">Sale Products</p>
                </div>
            </div>
            {/* copy rights  */}
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 justify-between w-4/5 mx-auto">
                <p className=" text-slate-500 opacity-80">
                    © Copyright cino shop 2025
                </p>
                <Image
                    src={"/images/pay.svg"}
                    alt="pay"
                    width={230}
                    height={230}
                    className=" object-contain sm:ml-auto"
                />
            </div>
        </div>
    );
};

export default footer;
