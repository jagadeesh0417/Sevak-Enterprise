import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

function loadCart() {
  try {
    const saved = localStorage.getItem('sevak-cart')
    return saved ? JSON.parse(saved) : []
  } catch { return [] }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const key = action.item.variant || action.item.id
      const existing = state.find((i) => (i.variant || i.id) === key && i.id === action.item.id)
      if (existing) {
        return state.map((i) =>
          (i.variant || i.id) === key && i.id === action.item.id
            ? { ...i, qty: i.qty + 1 }
            : i
        )
      }
      return [...state, { ...action.item, qty: 1 }]
    }
    case 'REMOVE':
      return state.filter((i) => i.cartId !== action.cartId)
    case 'UPDATE_QTY':
      return state.map((i) =>
        i.cartId === action.cartId ? { ...i, qty: Math.max(1, action.qty) } : i
      )
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart)

  useEffect(() => {
    localStorage.setItem('sevak-cart', JSON.stringify(items))
  }, [items])

  const addItem = (product, variant = null) => {
    const cartId = variant ? `${product.id}-${variant}` : `${product.id}`
    const price = variant
      ? product.variants.find((v) => v.name === variant)?.price || product.price
      : product.price
    dispatch({
      type: 'ADD',
      item: {
        cartId,
        id: product.id,
        name: product.name,
        price,
        variant,
        image: product.image,
        icon: product.icon,
        badge: product.badge,
      },
    })
  }

  const removeItem = (cartId) => dispatch({ type: 'REMOVE', cartId })
  const updateQty = (cartId, qty) => dispatch({ type: 'UPDATE_QTY', cartId, qty })
  const clearCart = () => dispatch({ type: 'CLEAR' })

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const count = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
