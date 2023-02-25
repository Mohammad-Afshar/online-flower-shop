export function continuShopping(productState,product){
    return productState.find((c)=> c.id === product.id)
}