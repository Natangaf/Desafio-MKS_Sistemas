import { formatCurrency } from "../../../utilities/formatCurrency";
import * as S from "./styled";

export function PriceLabel( { price } : { price : string }) {
    return (
        <S.PriceLabel>{formatCurrency(Number(price))}</S.PriceLabel>
    )
}