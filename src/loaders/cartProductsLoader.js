const cartProductsLoader = async () => {
    const loaderProducts = await fetch('products.json')
    const products = await loaderProducts.json()
    console.log(products)

}

export default cartProductsLoader