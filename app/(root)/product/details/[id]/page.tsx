import getSingleCategory from "@/Requests/singleCategory";
import getSingleProduct from "@/Requests/singleProduct";
import { Product } from "@/types";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import AddToCart from "./addToCart";
import ProductCard from "@/components/ui/productCard";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
    const { id: ID } = params;
    const SingleProduct: Product = await getSingleProduct(ID);
    const relatedProducts: Product[] = await getSingleCategory(
        SingleProduct.category
    );

    const num = Math.round(SingleProduct?.rating?.rate);
    const starArray = new Array(num).fill("0");

    return (
        <div className="mt-20">
            <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4 ">
                <div className="col-span-3 mb-6 lg:mb-0">
                    <Image
                        src={SingleProduct.image}
                        alt={SingleProduct.description}
                        width={400}
                        height={400}
                    />
                </div>
                <div className="col-span-4">
                    <h1 className="text-2xl lg:text-3xl font-bold text-black">
                        {SingleProduct.title}
                    </h1>
                    <div className="mt-2 flex items-center space-x-2">
                        <div className="flex items-center">
                            {starArray.map((star, index) => (
                                <StarIcon
                                    key={index}
                                    size={20}
                                    fill="yellow"
                                    className="text-yellow-600"
                                />
                            ))}
                        </div>
                        <p className=" text-red-400 text-base font-semibold  ">
                            ({SingleProduct?.rating?.count * 100} reviews)
                        </p>
                    </div>
                    <span className="w-1/4 h-[1.6px] block rounded-lg bg-gray-400 opacity-20 my-4 "></span>
                    <span className="line-through bg-slate-400 justify-center inline-flex items-center">
                        ${SingleProduct?.price * 2.5}
                    </span>{" "}
                    <h1 className="text-3xl md:text-4xl lg:text-6xl  font-bold text-transparent bg-clip-text inline w-fit bg-gradient-to-r from-pink-900 via-pink-300 to-pink-600 ">
                        ${SingleProduct?.price?.toFixed(2)}
                    </h1>
                    <p className="mt-4 text-base text-slate-400 ">
                        {SingleProduct?.description} Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Sequi dolorem illo magnam
                        natus, velit voluptates blanditiis eius sint pariatur
                        esse sed quae, earum asperiores quos distinctio iusto
                        fugiat qui facere. Fuga, unde! Quisquam architecto
                        dignissimos hic quod modi officiis necessitatibus vero
                        quas at ducimus, dicta reprehenderit minus voluptatibus
                        id nostrum?
                    </p>
                    <p className="mt-4 text-black font-semibold ">
                        Category: {SingleProduct?.category}
                    </p>
                    <p className="mt-2 text-black font-semibold ">
                        Tag: Shop,
                        <strong className="font-extralight fonts">
                            {" "}
                            Cino{" "}
                        </strong>
                        ,
                        <strong className="font-extralight fonts">
                            {" "}
                            WDW shop
                        </strong>
                    </p>
                    <p className="mt-2 text-black font-semibold ">
                        SKU: {Math.random() * 10000}
                    </p>
                    <AddToCart p={SingleProduct} />
                </div>
            </div>

            <div className=" mx-auto w-4/5 mt-16 mb-6">
                <h1 className=" text-2xl to-black font-semibold ">
                    Related Products
                </h1>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {relatedProducts?.map((product) => {
                        if (product.id === SingleProduct.id) return null;

                        return (
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
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
