import { SkeletonProductCard } from "../../components/cards/skeleton-product-card";
import { ProductCard } from "../../components/cards/product-card";
import { useProductData } from "../../hooks/useProductsData";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import * as S from "./styled";
import { ShoppingCartProvider } from "../../context/shopping-cart-context";

export function HomePage() {
  const { data, isLoading } = useProductData();
  return (
    <ShoppingCartProvider>
      <S.PageContainer>
        <Header />
        <S.Main>
          <S.ProductsGrid>
            {isLoading ? (
              <>
                <SkeletonProductCard />
                <SkeletonProductCard />
                <SkeletonProductCard />
                <SkeletonProductCard />
                <SkeletonProductCard />
                <SkeletonProductCard />
                <SkeletonProductCard />
                <SkeletonProductCard />
              </>
            ) : (
              data?.products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })
            )}
          </S.ProductsGrid>
        </S.Main>
        <Footer />
      </S.PageContainer>
    </ShoppingCartProvider>
  );
}
