import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
    return (
        <main className="w-full h-[calc(100vh-12vh)] flex justify-center flex-col items-center">
            {/* define the grid */}
            <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12 ">
                {/* content */}
                <div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase text-black font-bold ">
                        mega sale <span className="text-rose-600">special</span>{" "}
                        offer up to{" "}
                        <span className=" text-orange-500">60%</span> off
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg mt-4">
                        this page is just a template UI design for a e-commerce
                        adipisicing elit. Itaque sint fuga consectetur, ad vitae
                        incidunt,rerum minus eaque doloremque aut excepturi ex,
                        aperiam.odio molestias accusamus.
                    </p>
                    <div className="flex mt-6 items-center space-x-4">
                        <Button size={"lg"} className="bg-blue-700">
                            Shop Now
                        </Button>
                        <Button size={"lg"}>Explor More</Button>
                    </div>
                </div>
                <div>
                    <Image
                        src={"/images/hero.svg"}
                        alt="hero section image"
                        width={600}
                        height={600}
                        className="mx-auto"
                    />
                </div>
            </div>
        </main>
    );
};

export default Hero;
