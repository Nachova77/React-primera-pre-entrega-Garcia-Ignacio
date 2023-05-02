import { useState, useEffect } from "react"
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

import {useParams} from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    
    useEffect(()=>{
        const asynFunc = categoryId ? getProductsByCategory : getProducts
            asynFunc(categoryId)
                .then(response => {
                    setProducts(response)
                })
                .catch(error => {
                    console.error(error)
                })
    }, [categoryId])

    return (
        <div className="greeting">
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer