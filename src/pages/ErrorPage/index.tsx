import * as S from "./styled";
import { HomeIcon } from "lucide-react";

export function ErrorPage() {
    return (
      <S.ErrorPage>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>Clique no botão abaixo para retornar para o início</p>
        <S.HomeButton to="/"><HomeIcon size={22} /> Início</S.HomeButton>
      </S.ErrorPage>
    )
  }