import { FC, useState, useEffect } from "react"
import { Container } from "./styled"
import { Carts } from "../../interfaces/interfaces"



const AsideRight:FC = ()=>{
    const [carts, setCarts] = useState<Carts[]>([])



    useEffect(()=>{
        fetch('https://dummyjson.com/carts').then(res => res.json()).then(data=>{
            setCarts(data.carts)
        })
    }, [])

    return(
        <Container>
            <h2>Carts</h2>
            <div className="product-container">
                {carts.map(cart => cart.products.map(product=>{
                    return(
                        <figure>
                            <img src={product.thumbnail} alt="Cart Picture" />
                            <figcaption>
                                <b>Produto: </b>{product.title}<br/>
                                <b>Valor: </b>$ {product.price.toFixed(2)}
                            </figcaption>
                        </figure>
                    )
                }))}
            </div>
        </Container>
    )
}

export default AsideRight