import { ImageIcon } from "lucide-react";
import * as S from "./styled";

export function SkeletonProductCard() {
    return (
        <S.CardSkeleton>
            <S.CardSkeletonContent>
                <S.CardSkeletonImageContainer>
                    <ImageIcon size={96} strokeWidth={1} />
                </S.CardSkeletonImageContainer>

                <S.CardSkeletonProductInfo>
                    <div>
                        <S.SkeletonLine />
                        <S.SkeletonLine />
                    </div>
                    <S.SkeletonLine />
                </S.CardSkeletonProductInfo>

                <S.CardSkeletonProductDescription />
            </S.CardSkeletonContent>
            
            <S.CardSkeletonButton />
        </S.CardSkeleton>
    )
}