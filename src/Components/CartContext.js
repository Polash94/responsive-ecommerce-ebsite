const { createContext, useState, useEffect } = require("react");


const CartContext = createContext()

export function CartProvider({ children }) {
//Cart State
    const [cart, setCart] = useState([])

//Item amount State

const [itemAmount,setItemAmount] = useState(0)

//Total Price State

const [totalPrice,setTotalPrice] = useState(0)

    // add to cart function

    const addToCart = (item, id) => {
        //checking if the item already exists
        const cartItem = [...cart].filter((item) => {
            return item.id === id
        })

        if (cartItem < 1) {
            const newItem = { ...item, amount: 1 }
            setCart([...cart, newItem])
        } else {
            const newItem = [...cart].map((obj) => {
                if (obj.id === id) {
                    return { ...obj, amount: obj.amount + 1 }
                } else {
                    return obj
                }
            })
            setCart(newItem)
        }
    }

    // remove from cart function

    const removeFromCart = (id) => {
        const newCart = [...cart].filter((item => {
            return item.id !== id
        }))
        setCart(newCart)
    }

    //Empty cart function
    const emptyCart = () => {
        const newCart = []
        setCart(newCart)
    }


    // Increase Function

    const handleIncrease = (id) => {

        const newCart = [...cart].map((prod) => {
            if (prod.id === id) {
                return { ...prod, amount: prod.amount + 1 }
            } else {
                return prod
            }
        })
            
        setCart(newCart)
    }

    //Decrease Function

    const handleDecrease = (id) => {
        const newCart = [...cart].map((prod) => {
            if (prod.id === id) {
                return { ...prod, amount: prod.amount - 1 }
            } else {
                return prod
            }
        })
        setCart(newCart)

        const findItem = cart.find((item) => {
            return item.id === id
        })
        if(findItem.amount <2){
        removeFromCart(id);
        }}


//Item Amount in Header
useEffect(() => {
    if(cart){
        const amount = cart.reduce((accumualtor, currentAmount) => {
            return accumualtor + currentAmount.amount
        },0)
        setItemAmount(amount)
    }
},[cart])

//Total price Function

useEffect(() => {
    if(cart){
        const price = cart.reduce((accumulator,currentPrice) => {
            return accumulator + currentPrice.price*currentPrice.amount
        },0)
        setTotalPrice(parseFloat(price).toFixed(2))
    }
},[cart])




    return (
        <CartContext.Provider value={{ addToCart,totalPrice, itemAmount, emptyCart, cart, setCart, handleDecrease, removeFromCart, handleIncrease }}>{children}</CartContext.Provider>
    )
}



export default CartContext;