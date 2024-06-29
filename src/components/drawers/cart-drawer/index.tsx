import { useShoppingCart } from "../../../context/shopping-cart-context";
import { useProductData } from "../../../hooks/useProductsData";
import { formatCurrency } from "../../../utilities/formatCurrency";
import { CartDrawerCard } from "../../cards/cart-drawer-card";
import * as S from "./styled";

interface ICartDrawer {
    isDrawerOpen: boolean,
    onClose: () => void,
}

export function CartDrawer( { isDrawerOpen, onClose}:ICartDrawer ) {
    const { cartItems } = useShoppingCart();
    const { data } = useProductData();

    return (
        !!isDrawerOpen && data ? 
        (<S.CartDrawer>
            <S.CartDrawerContent>
                <S.CartDrawerHeader>
                    <div>
                        <span>Carrinho</span>
                        <span>de Compras</span>
                    </div>
                    <S.CartDrawerCloseButton onClick={onClose}>X</S.CartDrawerCloseButton>
                </S.CartDrawerHeader>

                <S.CartDrawerListItems>
                    {cartItems.map(cartItem => (
                        <CartDrawerCard key={cartItem.id} product={data.products[cartItem.id - 1]} quantity={cartItem.quantity} />
                    ))}
                </S.CartDrawerListItems>

                <S.CartDrawerTotal>
                    <p>Total: </p>
                    {formatCurrency(
                        cartItems.reduce((total, cartItem) => {
                            const item = data?.products.find(i => i.id === cartItem.id)
                            return total + (Number(item?.price) || 0) * cartItem.quantity
                        }, 0)
                    )}
                </S.CartDrawerTotal>
            </S.CartDrawerContent>
            <S.CartDrawerBuyButton>Finalizar Compra</S.CartDrawerBuyButton>
        </S.CartDrawer>)
        : <></>
    )
}