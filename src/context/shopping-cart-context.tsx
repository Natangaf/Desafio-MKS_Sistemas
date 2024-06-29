import { ReactNode, createContext, useContext } from "react";
import { toast } from "sonner";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
    children: ReactNode;
}

type CartItem = {
    id: number,
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    getCartQuantity: () => number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() { 
    return useContext(ShoppingCartContext) 
}

export function ShoppingCartProvider({ children } : ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "shopping-cart-local-storage",
        []
    )

    function getCartQuantity() {
        return cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
    }

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                toast.success("Item adicionado", {
                    style: {
                        border: '1px solid #3e8e41',
                        padding: '.5em .75em',
                        color: '#3e8e41',
                    },
                })
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        toast.success("Item adicionado", {
                            style: {
                                border: '1px solid #3e8e41',
                                padding: '.5em .75em',
                                color: '#3e8e41',
                            },
                        })
                        return { ...item, quantity: item.quantity + 1 }
                    } else { return item }
                })
            }
        })
    }

      function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                toast.error("Item removido", {
                    style: {
                        border: '1px solid #ff4b4b',
                        padding: '.5em .75em',
                        color: '#ff4b4b',
                    },
                })
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        toast.error("Item removido", {
                            style: {
                                border: '1px solid #ff4b4b',
                                padding: '.5em .75em',
                                color: '#ff4b4b',
                            },
                        })
                return { ...item, quantity: item.quantity - 1 }
                    } else { return item }
                })
            }
        })
    }
      
      function removeFromCart(id: number) {
        setCartItems(currItems => {
            toast.error("Item removido", {
                style: {
                    border: '1px solid #ff4b4b',
                    padding: '.5em .75em',
                    color: '#ff4b4b',
                },
            })
            return currItems.filter(item => item.id !== id)
        })
    }

      return (
        <ShoppingCartContext.Provider
          value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            getCartQuantity,
            cartItems,
          }}
        >
          {children}
        </ShoppingCartContext.Provider>
    )
}