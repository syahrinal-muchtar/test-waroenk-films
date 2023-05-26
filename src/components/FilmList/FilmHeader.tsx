import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CoverFilm from "src/shared/assets/images/fastX.png";
import { formatDate } from "src/shared/helpers/format-date";
import { COLOR_GRAY } from "src/shared/styles/themes/colors";

const FilmHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.7rem;

  & > img {
    margin-left: auto;
    margin-right: auto;
  }
`;

const FilmTitle = styled.h3`
  font-family: "Star Jedi", "Open Sans", sans-serif;
  font-size: 2.2rem;
  letter-spacing: 2px;
`;

const FilmDate = styled.span`
  color: ${COLOR_GRAY};
  font-size: 1.4rem;
`;

export default function FilmHeader({
  id,
  title,
  releaseDate,
}: FilmHeaderProps) {
  return (
    <FilmHeaderStyle>
      <FilmTitle>
        <Link to={`/film/${id}`}>{title}</Link>
      </FilmTitle>
      <FilmDate>{formatDate(releaseDate)}</FilmDate>
      {/* Data image not provided from SWAPI */}
      <img src={CoverFilm} alt="Cover" width={100} />
    </FilmHeaderStyle>
  );
}

export type FilmHeaderProps = {
  id: number;
  title: string;
  releaseDate: string;
};

FilmHeader.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
