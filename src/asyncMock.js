const products = [
    {
        id: '1',
        name: 'Redragon 500W',
        price: 22400,
        category: 'fuente',
        img: 'ecommerce\src\img\fuente.jpg',
        stock: 25,
        description: 'descripcion de fuente'
    },
    {
        id: '2',
        name: 'AMD Ryzen 7 5800X',
        price: 216100,
        category: 'cpu',
        img: 'ecommerce\src\img\cpu.jpg',
        stock: 30,
        description: 'descripcion de cpu'
    },
    {
        id: '3',
        name: 'Asrock RX 6700 XT',
        price: 207350,
        category: 'gpu',
        img: 'ecommerce\src\img\placa.jpg',
        stock: 15,
        description: 'descripcion de gpu'
    },
    {
        id: '4',
        name: 'MSI X570-A',
        price: 87000,
        category: 'mother',
        img: 'ecommerce\src\img\mother.jpg',
        stock: 40,
        description: 'descripcion de mother'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}