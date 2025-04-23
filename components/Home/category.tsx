import UseAllCategories from "@/Requests/allCategories";

const Category = async () => {
    const categories: string[] = await UseAllCategories();

    return (
        <div className="py-16">
            <h1 className="text-center font-bold text-2xl lg:text-3xl capitalize">
                shop by category
            </h1>
            {/* grid */}
            <div className="mt-12 grid grid-cols-2 mx-auto lg:grid-cols-3 xl:grid-cols-4 gap-8 w-4/5 ">
                {categories.map((category) => {
                    return (
                        <div
                            key={category}
                            className="p-6 rounded-lg cursor-pointer text-center hover:scale-110 transition-all bg-gray-200 duration-300 shadow-md"
                        >
                            <h1 className="text-sm sm:text-base text-red-500 md:text-lg font-semibold capitalize text-center">
                                {category}
                            </h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Category;
