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

interface Coordinates {
    lat:number
    lng:number
}

interface Address {
    address:string
    city:string
    coordinates:Coordinates
    postalCode:string
    state:string
}

interface Bank {
    cardExpire:string
    cardNumber:string
    cardType:string
    currency:string
    iban:string
}

interface Company {
    address:Address
    department:string
    name:string
    title:string
}

interface Crypto {
    coin:string
    network:string
    wallet:string
}

interface Hair {
    color:string
    type:string
}

export interface Users {
    address:Address
    age:number
    bank:Bank
    birthDate:string
    bloodGroup:string
    company:Company
    crypt:Crypto
    domain:string
    ein:string
    email:string
    eyeColor:string
    firstName:string
    gender:string
    hair:Hair
    height:number
    id:number
    image:string
    ip:string
    lastName:string
    macAddress:string
    maidenName:string
    password:string
    phone:string
    ssn:string
    university:string
    userAgent:string
    username:string
    weight:number
}

export interface RecipesProps {
    caloriesPerServing:number
    cookTimeMinutes:number
    cuisine:string
    difficulty:string
    id:number
    image:string
    ingredients:string[]
    instructions:string[]
    mealType:string[]
    name:string
    prepTimeMinutes:number
    rating:number
    reviewCount:number
    servings:number
    tags:string[]
    userId:number
}
