import { FC, useEffect, useState } from "react"
import { Container } from "./styled"
import { Posts } from "../../interfaces/interfaces"



const AsideLeft:FC = ()=>{
    const [posts, setPosts] = useState<Posts[]>([])



    useEffect(()=>{
        fetch('https://dummyjson.com/posts').then(res => res.json()).then(data=>{
            setPosts(data.posts)
        }).catch(e=>{
            alert(e.message)
        })
    }, [])

    return(
        <Container>
            <h2>Posts</h2>
            <div className="product-container">
                {posts.map(post=>{
                    return(
                        <div key={post.id}>
                            <b>Título: </b> {post.title}<br/>
                            <b>Post: </b> {post.body}<br/>
                            <b>Categoria: </b> {post.tags.map(tag => tag+', ')}<br/>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default AsideLeft