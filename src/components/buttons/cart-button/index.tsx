import { useShoppingCart } from "../../../context/shopping-cart-context";
import { CartDrawer } from "../../drawers/cart-drawer";
import { ShoppingCartIcon } from "lucide-react";
import { useCallback, useState } from "react";
import * as S from "./styled";

export function CardButton() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { getCartQuantity } = useShoppingCart();

  const handleClose = useCallback(() => setIsDrawerOpen(false), []);
  const handleOpen = useCallback(() => setIsDrawerOpen(true), []);

  return (
    <>
      <S.Button onClick={handleOpen}>
        <ShoppingCartIcon />
        {getCartQuantity()}
      </S.Button>
      <CartDrawer isDrawerOpen={isDrawerOpen} onClose={handleClose} />
    </>
  );
}
