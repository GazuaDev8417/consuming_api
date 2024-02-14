export interface Username {
    title:string
    first:string
    last:string 
}

export interface Picture {
    large:string
    medium:string
    thumbnail:string
}

export interface Products {
    brand:string
    category:string
    description:string
    discountPercentage:number
    id:number
    images:string[]
    price:number
    rating:number
    stock:number
    thumbnail:string
    title:string
}

export interface CartsProducts {
    discountPercentage:number
    discountedPrice:number
    id:number
    price:number
    quantity:number
    thumbnail:string
    title:string
    total:number
}

export interface Carts {
    discountedTotal:number
    id:number
    products:CartsProducts[]
    total:number
    totalProducts:number
    totalQuantity:number
    userId:number
}

export interface Posts {
    body:string
    id:number
    reactions:number
    tags:string[]
    title:string
    userId:number
}
