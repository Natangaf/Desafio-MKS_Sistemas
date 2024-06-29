import { CardButton } from "../buttons/cart-button";
import * as S from "./styled";

export function Header() {
    return (
        <S.Header>
            <S.Container>
                <S.Logo>
                    <h1>MKS</h1>
                    <span>Sistemas</span>
                </S.Logo>
                <CardButton />
            </S.Container>
        </S.Header>
    )
}