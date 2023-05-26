import React from "react";
import { useParams } from "react-router-dom";

import FilmDetailContent from "./FilmDetailContent";

import { Container } from "src/shared/styles/base/grid";
import Loader from "src/shared/components/Loader/Loader";

import useFilmDetail from "src/shared/hooks/useFilmDetail";

interface FilmDetailType {
  AddCart: (id: number, title: string, price: number) => void;
}

export default function FilmDetail({ AddCart }: FilmDetailType) {
  const { id } = useParams<{ id: string }>();
  const { loading, filmDetail } = useFilmDetail(Number(id));

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <FilmDetailContent
          id={filmDetail.id}
          title={filmDetail.title}
          director={filmDetail.director}
          producer={filmDetail.producer}
          description={filmDetail.description}
          characters={filmDetail.characters}
          planets={filmDetail.planets}
          species={filmDetail.species}
          starships={filmDetail.starships}
          vehicles={filmDetail.vehicles}
          price={filmDetail.price}
          AddCart={AddCart}
        />
      )}
    </Container>
  );
}
