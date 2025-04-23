export default async function getSingleProduct(id: string) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
