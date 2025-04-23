export default async function getSingleCategory(category: string) {
    try {
        const response = await fetch(
            `https://fakestoreapi.com/products/category/${category}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
