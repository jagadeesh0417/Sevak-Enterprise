import { createContext, useContext, useReducer, useEffect } from 'react'

const WishlistContext = createContext()

function loadWishlist() {
  try {
    const saved = localStorage.getItem('sevak-wishlist')
    return saved ? JSON.parse(saved) : []
  } catch { return [] }
}

function wishlistReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE': {
      const exists = state.find((i) => i.id === action.item.id)
      if (exists) return state.filter((i) => i.id !== action.item.id)
      return [...state, action.item]
    }
    default:
      return state
  }
}

export function WishlistProvider({ children }) {
  const [items, dispatch] = useReducer(wishlistReducer, [], loadWishlist)

  useEffect(() => {
    localStorage.setItem('sevak-wishlist', JSON.stringify(items))
  }, [items])

  const toggleItem = (product) => {
    dispatch({
      type: 'TOGGLE',
      item: {
        id: product.id,
        name: product.name,
        price: product.price,
        variants: product.variants,
        image: product.image,
        icon: product.icon,
        badge: product.badge,
        description: product.description,
      },
    })
  }

  const isWishlisted = (id) => items.some((i) => i.id === id)

  return (
    <WishlistContext.Provider value={{ items, toggleItem, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)
