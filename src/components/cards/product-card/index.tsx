import { useShoppingCart } from "../../../context/shopping-cart-context";
import { IProductData } from "../../../interfaces/product.interface";
import { PriceLabel } from "../../labels/price-label";
import { ShoppingBagIcon } from "lucide-react";
import * as S from "./styled";

export function ProductCard( { product } : { product:IProductData } ) {
    const { increaseCartQuantity } = useShoppingCart();
    return (
        <S.Card>
            <S.CardContent>
                <S.CardImageContainer>
                    <img src={product.photo} alt={`Imagem de ${product.name}`} loading="lazy" />
                </S.CardImageContainer>

                <S.CardProductInfo>
                    <S.CardTitle>{product.name}</S.CardTitle>
                    <PriceLabel price={product.price}/>
                </S.CardProductInfo>

                <S.CardProductDescription>
                    {product.description}
                </S.CardProductDescription>
            </S.CardContent>
            <S.CardButton onClick={() => increaseCartQuantity(product.id)}><ShoppingBagIcon size={22} /> Comprar</S.CardButton>
        </S.Card>
    )
}