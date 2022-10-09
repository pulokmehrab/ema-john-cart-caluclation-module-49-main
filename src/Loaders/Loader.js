import Product from "../components/Product/Product";
import { getStoredCart } from "../utilities/fakedb";

export const Loader = async()=>{
    const ProductsData= await fetch('Products.json');
    const Products =await ProductsData.json();

    // get cart
    const saveCart = getStoredCart();
    console.log(saveCart);
    for(const id in saveCart){
     const addedProduct = Products.find(Produc=>Product.id===id);
     console.log(addedProduct);
    }

    return Products;
}