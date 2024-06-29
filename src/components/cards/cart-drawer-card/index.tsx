import { useShoppingCart } from "../../../context/shopping-cart-context";
import { IProductData } from "../../../interfaces/product.interface";
import { formatCurrency } from "../../../utilities/formatCurrency";
import * as S from "./styled";

type CartDrawerCardProps = {
  product: IProductData;
  quantity: number;
};

export function CartDrawerCard({ product, quantity }: CartDrawerCardProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  return (
    <S.Card>
      <S.CartDrawerCloseButton onClick={() => removeFromCart(product.id)}>
        X
      </S.CartDrawerCloseButton>
      <S.CardImage src={product.photo} alt={`Imagem de ${product.name}`} />
      <S.CardTitle title={product.name}>{product.name}</S.CardTitle>
      <S.PriceQuantityContainer>
        <S.CardQuantity>
          <button onClick={() => decreaseCartQuantity(product.id)}>-</button>
          <p>{quantity}</p>
          <button onClick={() => increaseCartQuantity(product.id)}>+</button>
        </S.CardQuantity>
        <S.CardPrice>
          {formatCurrency(Number(product.price) * quantity)}
        </S.CardPrice>
      </S.PriceQuantityContainer>
    </S.Card>
  );
}
