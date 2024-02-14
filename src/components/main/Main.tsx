import { FC, useEffect, useState } from "react"
import { Container } from "./styled"
import { Products } from "../../interfaces/interfaces"


const Main:FC = ()=>{
    const [products, setProducts] = useState<Products[]>([])
    


    useEffect(()=>{
        fetch('https://dummyjson.com/products').then(res => res.json()).then(data=>{
            setProducts(data.products)
        }).catch(e=>{
            alert(e.message)
        })
    }, [])


    return(
        <Container>
            <h2>Produtos</h2>
            <div className="product-container">
                {products.map(product=>{
                    return(
                        <div key={product.id}>
                            <figure>
                                <img src={product.images[0]} alt="Smartphone" />
                                <figcaption>
                                    <b>Modelo: </b>{product.title}<br/>
                                    <b>Marca: </b>{product.brand}<br/>
                                    <b>Categoria: </b>{product.category}<br/>
                                    <b>Valor: </b>$ {product.price}
                                </figcaption>
                            </figure>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default Main