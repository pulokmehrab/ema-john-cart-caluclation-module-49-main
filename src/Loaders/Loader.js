import { getStoredCart } from "../utilities/fakedb";

export const Loader = async()=>{
    const ProductsData= await fetch('Products.json');
    const Products =await ProductsData.json();

    // get cart
    const saveCart = getStoredCart();
   
    const initialCart =[];

    for(const id in saveCart){
     const addedProduct = Products.find(Product =>Product.id===id);
    if(addedProduct){
        const quantity=saveCart[id];
        addedProduct.quantity =quantity;
        initialCart.push(addedProduct);  
    }
    }

    return {Products:Products, initialCart: initialCart};
}