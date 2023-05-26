import React, { useState } from "react";

import FilmItem from "./FilmItem";

import { Container, Row } from "src/shared/styles/base/grid";
import Loader from "src/shared/components/Loader/Loader";

import useFilmList from "src/shared/hooks/useFilmList";

export default function FilmList() {
  const { loading, filmList } = useFilmList();
  return (
    <Container>
      <Row>
        {loading ? (
          <Loader />
        ) : (
          filmList.map((film) => (
            <FilmItem
              key={film.id}
              id={film.id}
              description={film.description}
              releaseDate={film.releaseDate}
              title={film.title}
              price={film.price}
            />
          ))
        )}
      </Row>
    </Container>
  );
}
