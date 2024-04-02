import { useCart } from '../hooks/useCart.js'
import '../styles/Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'

// eslint-disable-next-line react/prop-types
export function Products({ products }) {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {
                    // eslint-disable-next-line react/prop-types
                    products.map(product => {
                        const isProductInCart = checkProductInCart(product)
                        return (
                            <li key={product.id}>
                                <img src={product.thumbnail}
                                    alt={product.title}
                                />
                                <div>
                                    <strong>{product.title}</strong> - ${product.price}
                                </div>
                                <div>
                                    <button
                                        style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
                                            isProductInCart
                                                ? removeFromCart(product)
                                                : addToCart(product)
                                        }}
                                    >
                                        {isProductInCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                        }

                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}