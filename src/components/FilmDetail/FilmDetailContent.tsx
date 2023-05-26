import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import FilmDetailHeader from "./FilmDetailHeader";
import FilmDetailDescription from "./FilmDetailDescription";
import FilmDetailList from "./FilmDetailList";

import { FilmDetailType } from "src/shared/helpers/api";
import {
  COLOR_WHITE,
  COLOR_BACKGROUND,
  COLOR_GREEN,
} from "src/shared/styles/themes/colors";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${COLOR_GREEN};
  color: ${COLOR_WHITE};
  font-size: 1.6rem;
  padding: 3rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 10rem;
`;

interface FilmDetailContentType {
  id: number;
  title: string;
  director: string;
  producer: string;
  description: string;
  characters: string[];
  planets: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  price: number;
  AddCart: (id: number, title: string, price: number) => void;
}

export default function FilmDetailContent({
  id,
  title,
  director,
  producer,
  description,
  characters,
  planets,
  species,
  starships,
  vehicles,
  price,
  AddCart,
}: FilmDetailContentType) {
  return (
    <Wrapper>
      <FilmDetailHeader
        id={id}
        title={title}
        director={director}
        producer={producer}
        price={price}
        AddCart={AddCart}
      />
      <FilmDetailDescription description={description} />
      <FilmDetailList label="Characters" list={characters} />
      <FilmDetailList label="Planets" list={planets} />
      <FilmDetailList label="Species" list={species} />
      <FilmDetailList label="Starships" list={starships} />
      <FilmDetailList label="Vehicles" list={vehicles} />
    </Wrapper>
  );
}

FilmDetailContent.propTypes = {
  title: PropTypes.string,
  director: PropTypes.string,
  producer: PropTypes.string,
  description: PropTypes.string,
  characters: PropTypes.array,
  planets: PropTypes.array,
  species: PropTypes.array,
  starships: PropTypes.array,
  vehicles: PropTypes.array,
};
